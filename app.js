// AKTU Syllabus Tracker Application Logic
(function () {
  'use strict';

  // Storage key
  const STORAGE_KEY = 'aktu_syllabus_tracker_v1';

  // Application State
  let state = {
    theme: 'dark',
    activeSem: 'sem5',
    activeTab: 'all',
    searchQuery: '',
    statusFilter: 'all',
    selections: {
      sem5_DEPT_ELEC_1: 'BCS-054', // default: OOSD with C++
      sem5_DEPT_ELEC_2: 'BCS-055', // default: Machine Learning Techniques
      sem6_DEPT_ELEC_3: 'BCS-061', // default: Big Data
      sem6_OPEN_ELEC_1: 'BOE-068'  // default: Software Project Management
    },
    examDates: {
      sem5: '',
      sem6: ''
    },
    progress: {} // key: topicId -> { completed: bool, status: 'todo'|'in_progress'|'completed', revision: bool, notes: '' }
  };

  // Active note editing reference
  let currentNoteTopicId = null;

  // Initialize
  function init() {
    loadState();
    applyTheme();
    setupEventListeners();
    renderElectivePickers();
    renderSubjectTabs();
    renderContent();
    updateStats();
  }

  // Load from localStorage
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.error('Failed to load state from localStorage', e);
    }
  }

  // Save to localStorage
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }

  // Theme handling
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = state.theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
  }

  // Toast Notification
  function showToast(message, icon = '✅') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Helper to retrieve active subject list based on elective choices
  function getActiveSubjects() {
    const semData = syllabusData.semesters[state.activeSem];
    if (!semData) return [];

    return semData.subjects.map(sub => {
      if (sub.type === 'elective') {
        const selectedCode = state.selections[`${state.activeSem}_${sub.code}`] || sub.options[0].code;
        const chosenOption = sub.options.find(opt => opt.code === selectedCode) || sub.options[0];
        return {
          ...sub,
          code: chosenOption.code,
          name: chosenOption.name,
          units: chosenOption.units,
          isElectiveParent: true,
          parentCode: sub.code,
          allOptions: sub.options
        };
      }
      return sub;
    });
  }

  // Render Elective Pickers in top bar
  function renderElectivePickers() {
    const container = document.getElementById('electivePickersContainer');
    if (!container) return;
    container.innerHTML = '';

    const semData = syllabusData.semesters[state.activeSem];
    const electiveSubjects = semData.subjects.filter(s => s.type === 'elective');

    electiveSubjects.forEach(elec => {
      const group = document.createElement('div');
      group.className = 'picker-group';

      const label = document.createElement('label');
      label.className = 'picker-label';
      label.textContent = elec.name;

      const select = document.createElement('select');
      select.className = 'picker-select';

      elec.options.forEach(opt => {
        const optionEl = document.createElement('option');
        optionEl.value = opt.code;
        optionEl.textContent = `${opt.code}: ${opt.name}`;
        if (state.selections[`${state.activeSem}_${elec.code}`] === opt.code) {
          optionEl.selected = true;
        }
        select.appendChild(optionEl);
      });

      select.addEventListener('change', (e) => {
        state.selections[`${state.activeSem}_${elec.code}`] = e.target.value;
        saveState();
        renderSubjectTabs();
        renderContent();
        updateStats();
        showToast(`Selected ${e.target.options[e.target.selectedIndex].text}`);
      });

      group.appendChild(label);
      group.appendChild(select);
      container.appendChild(group);
    });

    // Setup exam date input
    const examDateInput = document.getElementById('examDateInput');
    const examCountdownTag = document.getElementById('examCountdownTag');
    if (examDateInput) {
      examDateInput.value = state.examDates[state.activeSem] || '';
      updateExamCountdown();
      examDateInput.onchange = (e) => {
        state.examDates[state.activeSem] = e.target.value;
        saveState();
        updateExamCountdown();
      };
    }
  }

  function updateExamCountdown() {
    const tag = document.getElementById('examCountdownTag');
    if (!tag) return;
    const targetDateStr = state.examDates[state.activeSem];
    if (!targetDateStr) {
      tag.textContent = 'Set Exam Date';
      tag.style.display = 'inline-block';
      return;
    }
    const target = new Date(targetDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffDays = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      tag.textContent = `⏳ ${diffDays} days to Exam`;
      tag.style.color = '#f59e0b';
    } else if (diffDays === 0) {
      tag.textContent = '🎯 Exam is Today!';
      tag.style.color = '#ef4444';
    } else {
      tag.textContent = `Passed ${Math.abs(diffDays)} days ago`;
      tag.style.color = '#94a3b8';
    }
  }

  // Render Subject Filter Tabs
  function renderSubjectTabs() {
    const container = document.getElementById('subjectNavTabs');
    if (!container) return;
    container.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `subject-tab-btn ${state.activeTab === 'all' ? 'active' : ''}`;
    allBtn.innerHTML = `<span>📚 All Subjects</span>`;
    allBtn.addEventListener('click', () => {
      state.activeTab = 'all';
      renderSubjectTabs();
      renderContent();
    });
    container.appendChild(allBtn);

    const subjects = getActiveSubjects();
    subjects.forEach(sub => {
      const btn = document.createElement('button');
      btn.className = `subject-tab-btn ${state.activeTab === sub.code ? 'active' : ''}`;
      btn.innerHTML = `<span>${sub.shortName || sub.code}</span>`;
      btn.addEventListener('click', () => {
        state.activeTab = sub.code;
        renderSubjectTabs();
        renderContent();
      });
      container.appendChild(btn);
    });
  }

  // Build unique topic key
  function getTopicKey(subjectCode, unitIdx, topicIdx) {
    return `${state.activeSem}_${subjectCode}_u${unitIdx}_t${topicIdx}`;
  }

  function getLabKey(subjectCode, expIdx) {
    return `${state.activeSem}_${subjectCode}_exp${expIdx}`;
  }

  // Check topic progress item
  function getProgress(key) {
    return state.progress[key] || { completed: false, status: 'todo', revision: false, notes: '' };
  }

  function setProgress(key, updates) {
    const current = getProgress(key);
    state.progress[key] = { ...current, ...updates };
    saveState();
    updateStats();
  }

  // Render Main Content (Subject Cards & Units)
  function renderContent() {
    const container = document.getElementById('subjectsContainer');
    if (!container) return;
    container.innerHTML = '';

    const subjects = getActiveSubjects();
    const query = state.searchQuery.trim().toLowerCase();

    let renderedSubjectCount = 0;

    subjects.forEach(subject => {
      // If a specific subject tab is active, filter others out
      if (state.activeTab !== 'all' && state.activeTab !== subject.code) {
        return;
      }

      const card = createSubjectCard(subject, query);
      if (card) {
        container.appendChild(card);
        renderedSubjectCount++;
      }
    });

    if (renderedSubjectCount === 0) {
      const empty = document.createElement('div');
      empty.style.textAlign = 'center';
      empty.style.padding = '48px 20px';
      empty.style.color = 'var(--text-muted)';
      empty.innerHTML = `<h3>🔍 No topics match your current filter</h3><p style="margin-top:8px;">Try clearing your search query or reset the status filter.</p>`;
      container.appendChild(empty);
    }
  }

  // Create card for an individual subject
  function createSubjectCard(subject, query) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.id = `subject_card_${subject.code}`;

    // Subject Header
    const header = document.createElement('div');
    header.className = 'subject-header';

    const titleArea = document.createElement('div');
    titleArea.className = 'subject-title-area';

    const codeTag = document.createElement('span');
    codeTag.className = 'subject-code-tag';
    codeTag.style.backgroundColor = subject.color || '#3b82f6';
    codeTag.textContent = subject.code;

    const titleInfo = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = subject.name;

    const meta = document.createElement('div');
    meta.className = 'subject-meta';
    meta.innerHTML = `<span><strong>Credits:</strong> ${subject.credits}</span> • <span><strong>Type:</strong> ${subject.type.toUpperCase()}</span>`;

    titleInfo.appendChild(h2);
    titleInfo.appendChild(meta);
    titleArea.appendChild(codeTag);
    titleArea.appendChild(titleInfo);

    const statsArea = document.createElement('div');
    statsArea.className = 'subject-header-stats';

    const progressPill = document.createElement('span');
    progressPill.className = 'subject-progress-pill';
    progressPill.id = `sub_prog_${subject.code}`;
    progressPill.textContent = '0%';

    statsArea.appendChild(progressPill);
    header.appendChild(titleArea);
    header.appendChild(statsArea);
    card.appendChild(header);

    // Textbooks Accordion if available
    if (subject.textbooks && subject.textbooks.length > 0) {
      const tbToggle = document.createElement('div');
      tbToggle.className = 'textbooks-toggle';
      tbToggle.innerHTML = `<span>📖 Recommended Textbooks & References (${subject.textbooks.length})</span><span style="font-size:12px;">▼ View</span>`;

      const tbContent = document.createElement('div');
      tbContent.className = 'textbooks-content';
      const ul = document.createElement('ul');
      subject.textbooks.forEach(tb => {
        const li = document.createElement('li');
        li.textContent = tb;
        ul.appendChild(li);
      });
      tbContent.appendChild(ul);

      tbToggle.addEventListener('click', () => {
        tbContent.classList.toggle('open');
        tbToggle.querySelector('span:last-child').textContent = tbContent.classList.contains('open') ? '▲ Hide' : '▼ View';
      });

      card.appendChild(tbToggle);
      card.appendChild(tbContent);
    }

    // Units or Lab Experiments Container
    const unitsContainer = document.createElement('div');
    unitsContainer.className = 'units-container';

    let totalSubTopics = 0;
    let completedSubTopics = 0;
    let hasVisibleContent = false;

    // Is it a Theory subject with Units?
    if (subject.units && subject.units.length > 0) {
      subject.units.forEach((unit, unitIdx) => {
        const unitBox = document.createElement('div');
        unitBox.className = 'unit-box open';

        let unitTotal = unit.topics.length;
        let unitCompleted = 0;

        const topicList = document.createElement('div');
        topicList.className = 'topic-list';

        let visibleTopicsInUnit = 0;

        unit.topics.forEach((topicText, topicIdx) => {
          const topicKey = getTopicKey(subject.code, unitIdx, topicIdx);
          const prog = getProgress(topicKey);

          totalSubTopics++;
          if (prog.completed) {
            completedSubTopics++;
            unitCompleted++;
          }

          // Filter evaluation
          const matchesQuery = !query || topicText.toLowerCase().includes(query) || subject.name.toLowerCase().includes(query) || subject.code.toLowerCase().includes(query);
          let matchesFilter = true;
          if (state.statusFilter === 'pending') matchesFilter = !prog.completed;
          else if (state.statusFilter === 'in_progress') matchesFilter = prog.status === 'in_progress';
          else if (state.statusFilter === 'completed') matchesFilter = prog.completed;
          else if (state.statusFilter === 'revision') matchesFilter = prog.revision === true;

          if (matchesQuery && matchesFilter) {
            visibleTopicsInUnit++;
            const topicRow = createTopicRow(topicText, topicKey, prog, () => {
              updateCardProgress();
              updateStats();
            });
            topicList.appendChild(topicRow);
          }
        });

        if (visibleTopicsInUnit > 0 || !query) {
          hasVisibleContent = true;

          // Unit Header
          const unitHeader = document.createElement('div');
          unitHeader.className = 'unit-header';

          const left = document.createElement('div');
          left.className = 'unit-header-left';
          left.innerHTML = `
            <span class="unit-badge">${unit.unit || `Unit ${unit.unitNum}`}</span>
            <span class="unit-title">${unit.title} ${unit.lectures ? `<small style="color:var(--text-muted);font-weight:normal;">(${unit.lectures} Lectures)</small>` : ''}</span>
          `;

          const right = document.createElement('div');
          right.className = 'unit-header-right';
          right.innerHTML = `
            <span class="unit-stat-text" id="stat_${subject.code}_u${unitIdx}">${unitCompleted}/${unitTotal} Done</span>
            <span class="unit-toggle-chevron">▼</span>
          `;

          unitHeader.appendChild(left);
          unitHeader.appendChild(right);

          unitHeader.addEventListener('click', () => {
            unitBox.classList.toggle('open');
          });

          const unitBody = document.createElement('div');
          unitBody.className = 'unit-body';
          unitBody.appendChild(topicList);

          unitBox.appendChild(unitHeader);
          unitBox.appendChild(unitBody);
          unitsContainer.appendChild(unitBox);
        }
      });
    }

    // Is it a Lab subject with Experiments?
    if (subject.experiments && subject.experiments.length > 0) {
      const labBox = document.createElement('div');
      labBox.className = 'unit-box open';

      const topicList = document.createElement('div');
      topicList.className = 'topic-list';

      let visibleExps = 0;
      let labCompleted = 0;

      subject.experiments.forEach((expText, expIdx) => {
        const labKey = getLabKey(subject.code, expIdx);
        const prog = getProgress(labKey);

        totalSubTopics++;
        if (prog.completed) {
          completedSubTopics++;
          labCompleted++;
        }

        const matchesQuery = !query || expText.toLowerCase().includes(query) || subject.name.toLowerCase().includes(query);
        let matchesFilter = true;
        if (state.statusFilter === 'pending') matchesFilter = !prog.completed;
        else if (state.statusFilter === 'in_progress') matchesFilter = prog.status === 'in_progress';
        else if (state.statusFilter === 'completed') matchesFilter = prog.completed;
        else if (state.statusFilter === 'revision') matchesFilter = prog.revision === true;

        if (matchesQuery && matchesFilter) {
          visibleExps++;
          const expRow = createTopicRow(expText, labKey, prog, () => {
            updateCardProgress();
            updateStats();
          });
          topicList.appendChild(expRow);
        }
      });

      if (visibleExps > 0 || !query) {
        hasVisibleContent = true;
        const labHeader = document.createElement('div');
        labHeader.className = 'unit-header';
        labHeader.innerHTML = `
          <div class="unit-header-left">
            <span class="unit-badge" style="background:#0284c7;color:white;">PRACTICALS</span>
            <span class="unit-title">Lab Experiments & Tasks</span>
          </div>
          <div class="unit-header-right">
            <span class="unit-stat-text">${labCompleted}/${subject.experiments.length} Done</span>
            <span class="unit-toggle-chevron">▼</span>
          </div>
        `;
        labHeader.addEventListener('click', () => {
          labBox.classList.toggle('open');
        });

        const labBody = document.createElement('div');
        labBody.className = 'unit-body';
        labBody.appendChild(topicList);

        labBox.appendChild(labHeader);
        labBox.appendChild(labBody);
        unitsContainer.appendChild(labBox);
      }
    }

    function updateCardProgress() {
      // Re-calculate subject completion
      let curCompleted = 0;
      let curTotal = 0;
      if (subject.units) {
        subject.units.forEach((u, uIdx) => {
          let uDone = 0;
          u.topics.forEach((t, tIdx) => {
            curTotal++;
            if (getProgress(getTopicKey(subject.code, uIdx, tIdx)).completed) {
              curCompleted++;
              uDone++;
            }
          });
          const uStatEl = document.getElementById(`stat_${subject.code}_u${uIdx}`);
          if (uStatEl) uStatEl.textContent = `${uDone}/${u.topics.length} Done`;
        });
      }
      if (subject.experiments) {
        subject.experiments.forEach((e, eIdx) => {
          curTotal++;
          if (getProgress(getLabKey(subject.code, eIdx)).completed) {
            curCompleted++;
          }
        });
      }

      const percent = curTotal > 0 ? Math.round((curCompleted / curTotal) * 100) : 0;
      const pill = document.getElementById(`sub_prog_${subject.code}`);
      if (pill) {
        pill.textContent = `${percent}% (${curCompleted}/${curTotal})`;
        if (percent === 100) {
          pill.style.background = 'rgba(16, 185, 129, 0.2)';
          pill.style.color = '#10b981';
        }
      }
    }

    card.appendChild(unitsContainer);

    // Initial update
    const initPercent = totalSubTopics > 0 ? Math.round((completedSubTopics / totalSubTopics) * 100) : 0;
    progressPill.textContent = `${initPercent}% (${completedSubTopics}/${totalSubTopics})`;

    if (query && !hasVisibleContent) {
      return null;
    }

    return card;
  }

  // Create an individual topic row
  function createTopicRow(text, key, prog, onUpdate) {
    const row = document.createElement('div');
    row.className = `topic-item ${prog.completed ? 'completed' : ''}`;
    row.id = `row_${key}`;

    const left = document.createElement('div');
    left.className = 'topic-left';

    const checkbox = document.createElement('div');
    checkbox.className = 'custom-checkbox';
    checkbox.innerHTML = prog.completed ? '✓' : '';
    checkbox.addEventListener('click', () => {
      const newStatus = !prog.completed;
      prog.completed = newStatus;
      prog.status = newStatus ? 'completed' : 'todo';
      setProgress(key, prog);
      checkbox.innerHTML = newStatus ? '✓' : '';
      row.classList.toggle('completed', newStatus);
      statusSelect.value = prog.status;
      onUpdate();
    });

    const topicLabel = document.createElement('span');
    topicLabel.className = 'topic-text';
    topicLabel.textContent = text;

    left.appendChild(checkbox);
    left.appendChild(topicLabel);

    // Actions
    const actions = document.createElement('div');
    actions.className = 'topic-actions';

    // Status Select
    const statusSelect = document.createElement('select');
    statusSelect.className = 'status-badge-select';
    statusSelect.innerHTML = `
      <option value="todo" ${prog.status === 'todo' ? 'selected' : ''}>⏳ To Do</option>
      <option value="in_progress" ${prog.status === 'in_progress' ? 'selected' : ''}>⚡ In Progress</option>
      <option value="completed" ${prog.status === 'completed' ? 'selected' : ''}>✅ Mastered</option>
    `;
    statusSelect.addEventListener('change', (e) => {
      prog.status = e.target.value;
      prog.completed = (prog.status === 'completed');
      setProgress(key, prog);
      checkbox.innerHTML = prog.completed ? '✓' : '';
      row.classList.toggle('completed', prog.completed);
      onUpdate();
    });

    // Star Revision Toggle
    const starBtn = document.createElement('button');
    starBtn.className = `btn-star ${prog.revision ? 'active' : ''}`;
    starBtn.title = prog.revision ? 'Marked for Revision before exams' : 'Mark for Revision';
    starBtn.innerHTML = prog.revision ? '★' : '☆';
    starBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prog.revision = !prog.revision;
      setProgress(key, prog);
      starBtn.className = `btn-star ${prog.revision ? 'active' : ''}`;
      starBtn.innerHTML = prog.revision ? '★' : '☆';
      starBtn.title = prog.revision ? 'Marked for Revision' : 'Mark for Revision';
      onUpdate();
      if (prog.revision) showToast('Marked for Revision! ⭐');
    });

    // Note Button
    const noteBtn = document.createElement('button');
    noteBtn.className = `btn-note ${prog.notes ? 'has-note' : ''}`;
    noteBtn.innerHTML = prog.notes ? '📝 Note' : '＋ Note';
    noteBtn.title = 'Add / Edit personal notes & key formulas';
    noteBtn.addEventListener('click', () => {
      openNoteModal(key, text);
    });

    actions.appendChild(statusSelect);
    actions.appendChild(starBtn);
    actions.appendChild(noteBtn);

    row.appendChild(left);
    row.appendChild(actions);

    return row;
  }

  // Note Modal Handling
  function openNoteModal(topicKey, topicTitle) {
    currentNoteTopicId = topicKey;
    const prog = getProgress(topicKey);
    const modal = document.getElementById('notesModal');
    const titleEl = document.getElementById('modalTopicTitle');
    const textarea = document.getElementById('modalNoteText');

    titleEl.textContent = topicTitle;
    textarea.value = prog.notes || '';
    modal.classList.add('open');
    textarea.focus();
  }

  function closeNoteModal() {
    const modal = document.getElementById('notesModal');
    modal.classList.remove('open');
    currentNoteTopicId = null;
  }

  function saveNoteModal() {
    if (!currentNoteTopicId) return;
    const textarea = document.getElementById('modalNoteText');
    const noteText = textarea.value.trim();

    const prog = getProgress(currentNoteTopicId);
    prog.notes = noteText;
    setProgress(currentNoteTopicId, prog);

    closeNoteModal();
    renderContent();
    showToast('Note saved successfully! 📝');
  }

  // Update Top Stats
  function updateStats() {
    const subjects = getActiveSubjects();
    let totalTopics = 0;
    let completedTopics = 0;
    let revisionCount = 0;

    subjects.forEach(sub => {
      if (sub.units) {
        sub.units.forEach((u, uIdx) => {
          u.topics.forEach((t, tIdx) => {
            totalTopics++;
            const p = getProgress(getTopicKey(sub.code, uIdx, tIdx));
            if (p.completed) completedTopics++;
            if (p.revision) revisionCount++;
          });
        });
      }
      if (sub.experiments) {
        sub.experiments.forEach((e, eIdx) => {
          totalTopics++;
          const p = getProgress(getLabKey(sub.code, eIdx));
          if (p.completed) completedTopics++;
          if (p.revision) revisionCount++;
        });
      }
    });

    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const remaining = totalTopics - completedTopics;

    // Update Elements
    const totalEl = document.getElementById('statTotalTopics');
    const completedEl = document.getElementById('statCompletedTopics');
    const percentEl = document.getElementById('statPercent');
    const remainingEl = document.getElementById('statRemainingTopics');
    const revisionEl = document.getElementById('statRevisionTopics');
    const fillEl = document.getElementById('statProgressFill');

    if (totalEl) totalEl.textContent = totalTopics;
    if (completedEl) completedEl.textContent = completedTopics;
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (remainingEl) remainingEl.textContent = `${remaining} left`;
    if (revisionEl) revisionEl.textContent = revisionCount;
    if (fillEl) fillEl.style.width = `${percent}%`;
  }

  // Export Progress JSON
  function exportProgress() {
    const dataStr = JSON.stringify(state, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AKTU_${state.activeSem}_Syllabus_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Exported syllabus backup! 💾');
  }

  // Import Progress JSON
  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && imported.progress) {
          state = { ...state, ...imported };
          saveState();
          applyTheme();
          renderElectivePickers();
          renderSubjectTabs();
          renderContent();
          updateStats();
          showToast('Progress restored successfully! 🚀');
        } else {
          alert('Invalid backup file structure.');
        }
      } catch (err) {
        alert('Error parsing JSON backup file.');
      }
    };
    reader.readAsText(file);
  }

  // Reset Progress
  function resetProgress() {
    if (confirm('Are you sure you want to reset all tracked progress for this semester? This cannot be undone.')) {
      state.progress = {};
      saveState();
      renderContent();
      updateStats();
      showToast('Progress reset cleanly.', '🔄');
    }
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);

    // Semester Switcher
    const sem5Btn = document.getElementById('sem5TabBtn');
    const sem6Btn = document.getElementById('sem6TabBtn');

    sem5Btn?.addEventListener('click', () => {
      state.activeSem = 'sem5';
      state.activeTab = 'all';
      sem5Btn.classList.add('active');
      sem6Btn.classList.remove('active');
      saveState();
      renderElectivePickers();
      renderSubjectTabs();
      renderContent();
      updateStats();
    });

    sem6Btn?.addEventListener('click', () => {
      state.activeSem = 'sem6';
      state.activeTab = 'all';
      sem6Btn.classList.add('active');
      sem5Btn.classList.remove('active');
      saveState();
      renderElectivePickers();
      renderSubjectTabs();
      renderContent();
      updateStats();
    });

    // Search bar
    const searchInput = document.getElementById('syllabusSearchInput');
    searchInput?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderContent();
    });

    // Filter pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.statusFilter = pill.dataset.filter;
        renderContent();
      });
    });

    // Expand / Collapse All
    document.getElementById('expandAllBtn')?.addEventListener('click', () => {
      document.querySelectorAll('.unit-box').forEach(b => b.classList.add('open'));
    });

    document.getElementById('collapseAllBtn')?.addEventListener('click', () => {
      document.querySelectorAll('.unit-box').forEach(b => b.classList.remove('open'));
    });

    // Export / Import / Reset / Print
    document.getElementById('exportBtn')?.addEventListener('click', exportProgress);

    const importInput = document.getElementById('importFileInput');
    document.getElementById('importBtn')?.addEventListener('click', () => importInput?.click());
    importInput?.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        importProgress(e.target.files[0]);
      }
    });

    document.getElementById('resetBtn')?.addEventListener('click', resetProgress);
    document.getElementById('printBtn')?.addEventListener('click', () => window.print());

    // Modal listeners
    document.getElementById('modalCloseBtn')?.addEventListener('click', closeNoteModal);
    document.getElementById('modalCancelBtn')?.addEventListener('click', closeNoteModal);
    document.getElementById('modalSaveBtn')?.addEventListener('click', saveNoteModal);
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
