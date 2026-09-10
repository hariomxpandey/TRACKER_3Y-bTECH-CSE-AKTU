// AKTU B.Tech Computer Science & Engineering (Third Year - V & VI Semester)
// Official Syllabus Data based on NEP2020 (Session 2024-25)

const syllabusData = {
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh, Lucknow",
  course: "B.Tech. Third Year (CS / CSE / Computer Engineering)",
  session: "NEP2020 (Effective from Session 2024-25)",
  semesters: {
    sem5: {
      id: "sem5",
      name: "Semester V",
      totalCredits: 23,
      totalMarks: 900,
      subjects: [
        {
          code: "BCS501",
          name: "Database Management System",
          shortName: "DBMS",
          credits: 4,
          type: "core",
          icon: "database",
          color: "#2563eb",
          textbooks: [
            "Korth, Silberschatz, Sudarshan - 'Database Concepts', McGraw Hill",
            "Date C.J. - 'An Introduction to Database Systems', Addison Wesley",
            "Elmasri, Navathe - 'Fundamentals of Database Systems', Addison Wesley",
            "Ramakrishnan, Gehrke - 'Database Management Systems', McGraw Hill",
            "Bipin C. Desai - 'An Introduction to Database Systems', Galgotia"
          ],
          units: [
            {
              unitNum: 1,
              title: "Introduction & ER Model",
              lectures: 8,
              topics: [
                "Overview: Database System vs File System",
                "Database System Concepts and Architecture",
                "Data Model Schema and Instances",
                "Three-Schema Architecture & Data Independence",
                "Database Languages and Interfaces (DDL, DML)",
                "Overall Database Structure & Component Modules",
                "Data Modeling Using Entity Relationship (ER) Model",
                "ER Model Concepts & Notation for ER Diagrams",
                "Mapping Constraints (Cardinality & Participation)",
                "Keys: Super Key, Candidate Key, Primary Key",
                "Generalization, Specialization & Aggregation",
                "Reduction of ER Diagrams to Relational Tables",
                "Extended ER (EER) Model & Higher Degree Relationships"
              ]
            },
            {
              unitNum: 2,
              title: "Relational Data Model & SQL",
              lectures: 8,
              topics: [
                "Relational Data Model Concepts & Terminology",
                "Integrity Constraints: Entity, Referential, Key & Domain",
                "Relational Algebra: Select, Project, Rename, Cartesian Product",
                "Relational Algebra: Set Operations & Join Types",
                "Relational Calculus: Tuple Relational Calculus (TRC)",
                "Relational Calculus: Domain Relational Calculus (DRC)",
                "Introduction to SQL: Characteristics and Advantages",
                "SQL Data Types, Literals & Operators",
                "SQL Command Types: DDL, DML, DCL, TCL",
                "Creating and Managing Tables, Views, and Indexes",
                "Queries, Subqueries & Correlated Subqueries",
                "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)",
                "Insert, Update and Delete Operations",
                "Set Operations: Union, Intersection, Minus",
                "PL/SQL Architecture: Cursors and Database Triggers",
                "PL/SQL Stored Procedures and Functions"
              ]
            },
            {
              unitNum: 3,
              title: "Database Design & Normalization",
              lectures: 8,
              topics: [
                "Pitfalls in Relational Database Design & Data Redundancy",
                "Functional Dependencies (FD) & Armstrong's Axioms",
                "Attribute Closure and Closure of Functional Dependencies",
                "Minimal Cover / Canonical Cover Algorithm",
                "First Normal Form (1NF)",
                "Second Normal Form (2NF)",
                "Third Normal Form (3NF)",
                "Boyce-Codd Normal Form (BCNF)",
                "Inclusion Dependencies",
                "Lossless Join Decomposition Property & Testing",
                "Dependency Preservation Property",
                "Normalization using Functional Dependencies (FD)",
                "Multi-Valued Dependencies (MVD) and 4NF",
                "Join Dependencies (JDs) and 5NF",
                "Alternative Approaches to Database Design"
              ]
            },
            {
              unitNum: 4,
              title: "Transaction Processing & Distributed DB",
              lectures: 8,
              topics: [
                "Transaction Processing Concept & ACID Properties",
                "Transaction States and System Architecture",
                "Testing of Serializability (Precedence Graph Method)",
                "Serializability of Schedules: Conflict vs View Serializable",
                "Recoverability of Schedules: Recoverable, Cascadeless, Strict",
                "Recovery from Transaction Failures",
                "Log-Based Recovery: Deferred & Immediate Modification",
                "Checkpoints & Shadow Paging",
                "Deadlock Handling: Prevention, Detection, and Recovery",
                "Distributed Database Concepts & System Architecture",
                "Distributed Data Storage: Fragmentation and Replication",
                "Distributed Concurrency Control & Directory Systems"
              ]
            },
            {
              unitNum: 5,
              title: "Concurrency Control Techniques",
              lectures: 8,
              topics: [
                "Need for Concurrency Control & Concurrency Hazards",
                "Locking Techniques for Concurrency Control (Shared & Exclusive)",
                "Two-Phase Locking Protocol (2PL, Strict 2PL, Rigorous 2PL)",
                "Timestamping Protocols for Concurrency Control",
                "Thomas' Write Rule",
                "Validation-Based (Optimistic) Protocol",
                "Multiple Granularity Locking & Hierarchy Trees",
                "Multi-Version Schemes (MVCC)",
                "Recovery with Concurrent Transactions",
                "Case Study of Oracle Database Architecture & Concurrency"
              ]
            }
          ]
        },
        {
          code: "BCS502",
          name: "Web Technology",
          shortName: "Web Tech",
          credits: 4,
          type: "core",
          icon: "globe",
          color: "#0284c7",
          textbooks: [
            "Jessica Burdman - 'Collaborative Web Development', Addison Wesley",
            "C. Xavier - 'Web Technology and Design', New Age International",
            "Hans Bergsten - 'Java Server Pages', O'Reilly",
            "Greg Lim - 'Beginning Node.js, Express & MongoDB Development'",
            "Shannon Bradshaw - 'MongoDB: The Definitive Guide', O'Reilly"
          ],
          units: [
            {
              unitNum: 1,
              title: "Web Intro & HTML/XML",
              lectures: 8,
              topics: [
                "Web Development Strategies & History of Web/Internet",
                "Protocols Governing the Web (HTTP, HTTPS, FTP, DNS)",
                "Writing Web Projects & Connecting to the Internet",
                "Internet Services and Web Tools",
                "Client-Server Computing Concepts (N-Tier Architecture)",
                "HTML: Lists, Tables, Images, Frames, Forms",
                "XML: Document Type Definition (DTD)",
                "XML Schemas (XSD) & Object Models",
                "Presenting and Using XML Documents",
                "XML Processors: DOM (Document Object Model) and SAX"
              ]
            },
            {
              unitNum: 2,
              title: "CSS & Responsive Page Design",
              lectures: 8,
              topics: [
                "Creating Style Sheets: Inline, Internal, External",
                "CSS Properties: Background, Text Formatting, Controlling Fonts",
                "Working with Block Elements, Inline Elements, and Objects",
                "Working with Lists and Tables Styling",
                "CSS Id and Class Selectors & Combinators",
                "Box Model: Content, Border, Padding, Margin properties",
                "CSS Advanced: Grouping, Dimension, Display, Positioning, Floating, Align",
                "Pseudo-Classes and Pseudo-Elements",
                "Responsive Navigation Bar Design",
                "CSS Image Sprites and Attribute Selectors",
                "CSS Color Spaces & Creating Modern Page Layouts and Site Designs"
              ]
            },
            {
              unitNum: 3,
              title: "JavaScript, AJAX & Network Programming",
              lectures: 8,
              topics: [
                "JavaScript: Introduction, Syntax, Statements, Variables",
                "Documents & DOM Manipulation",
                "Form Validation using JavaScript",
                "JavaScript Functions, Scope, and Objects",
                "Introduction to AJAX & XMLHttpRequest",
                "Networking Concepts: Internet Addressing & InetAddress in Java",
                "Factory Methods and Instance Methods in Java Networking",
                "TCP/IP Client Sockets Programming",
                "URL and URLConnection Classes",
                "TCP/IP Server Sockets & Datagram (UDP) Sockets"
              ]
            },
            {
              unitNum: 4,
              title: "Enterprise JavaBeans, Node.js & MongoDB",
              lectures: 8,
              topics: [
                "Enterprise Java Beans: Creating JavaBeans & Properties",
                "Types of Beans: Stateful Session, Stateless Session, Entity Bean",
                "Node.js: Introduction & Environment Setup",
                "REPL Terminal & Node Core Architecture",
                "NPM (Node Package Manager) & package.json",
                "Callbacks Concept, Asynchronous Events, Packaging",
                "Express Framework: Routing, Middleware, RESTful API Design",
                "Node.js with MongoDB: Create Database and Collections",
                "MongoDB CRUD Operations: Insert, Delete, Update, Query",
                "MongoDB Joins, Sorting & Aggregation Pipeline"
              ]
            },
            {
              unitNum: 5,
              title: "Java Servlets & Java Server Pages (JSP)",
              lectures: 8,
              topics: [
                "Servlet Overview and Architecture & Web Container",
                "Interface Servlet and Servlet Life Cycle (init, service, destroy)",
                "Handling HTTP GET Requests",
                "Handling HTTP POST Requests",
                "Redirecting Requests to Other Resources (sendRedirect vs forward)",
                "Session Tracking: Cookies and Hidden Form Fields",
                "Session Tracking with HttpSession API",
                "Java Server Pages (JSP): Introduction & Architecture Overview",
                "First Java Server Page Example & Compilation Workflow",
                "JSP Implicit Objects (request, response, session, out, etc.)",
                "JSP Scripting Elements (Declarations, Scriptlets, Expressions)",
                "JSP Standard Actions & Directives (page, include, taglib)",
                "Custom Tag Libraries (JSTL) & Custom Tags Implementation"
              ]
            }
          ]
        },
        {
          code: "BCS503",
          name: "Design and Analysis of Algorithm",
          shortName: "DAA",
          credits: 4,
          type: "core",
          icon: "cpu",
          color: "#7c3aed",
          textbooks: [
            "Thomas H. Cormen, Leiserson, Rivest, Stein - 'Introduction to Algorithms' (CLRS)",
            "E. Horowitz & S. Sahni - 'Fundamentals of Computer Algorithms'",
            "Aho, Hopcroft, Ullman - 'The Design and Analysis of Computer Algorithms'",
            "Jon Kleinberg & Éva Tardos - 'Algorithm Design', Pearson"
          ],
          units: [
            {
              unitNum: 1,
              title: "Algorithm Analysis & Sorting",
              lectures: 8,
              topics: [
                "Algorithms Definition & Analyzing Algorithms",
                "Complexity of Algorithms: Time and Space Complexity",
                "Growth of Functions: Asymptotic Notations (Big-O, Omega, Theta)",
                "Performance Measurements & Recurrence Solving Methods",
                "Sorting: Shell Sort Algorithm & Analysis",
                "Quick Sort Algorithm, Partitioning & Worst/Average Case",
                "Merge Sort Algorithm & Divide-and-Conquer Analysis",
                "Heap Sort: Max-Heapify, Build-Heap, and Priority Queues",
                "Comparison of Sorting Algorithms (Lower Bound Omega(n log n))",
                "Sorting in Linear Time: Counting Sort, Radix Sort, Bucket Sort",
                "Order Statistics: Min, Max, and Selection in Expected Linear Time"
              ]
            },
            {
              unitNum: 2,
              title: "Advanced Data Structures",
              lectures: 8,
              topics: [
                "Red-Black Trees: Properties and Invariants",
                "Red-Black Tree Rotations (Left and Right)",
                "Red-Black Tree Insertion & Deletion Cases",
                "B-Trees: Definition, Properties, and Order",
                "B-Tree Operations: Search, Insertion (Splitting), Deletion (Merging)",
                "Binomial Trees & Binomial Heaps: Structure and Operations",
                "Fibonacci Heaps: Potential Function & Mergeable Heap Operations",
                "Amortized Analysis of Fibonacci Heap Operations",
                "Tries: Standard, Compressed, and Prefix Lookup Operations",
                "Skip Lists: Probabilistic Structure, Search, Insertion, and Deletion"
              ]
            },
            {
              unitNum: 3,
              title: "Divide & Conquer & Greedy Methods",
              lectures: 8,
              topics: [
                "Divide and Conquer: Sorting Algorithms",
                "Strassen's Matrix Multiplication Algorithm",
                "Convex Hull Problem (Graham's Scan / Jarvis March)",
                "Divide and Conquer Searching (Binary Search Analysis)",
                "Greedy Strategy: Principles & Greedy Choice Property",
                "Optimal Reliability Allocation Problem",
                "Fractional Knapsack Problem",
                "Minimum Spanning Trees: Prim's Algorithm",
                "Minimum Spanning Trees: Kruskal's Algorithm (with Disjoint Sets)",
                "Single Source Shortest Paths: Dijkstra's Algorithm",
                "Single Source Shortest Paths: Bellman-Ford Algorithm"
              ]
            },
            {
              unitNum: 4,
              title: "Dynamic Programming, Backtracking & Branch and Bound",
              lectures: 8,
              topics: [
                "Dynamic Programming: Overlapping Subproblems & Optimal Substructure",
                "0/1 Knapsack Problem using Dynamic Programming",
                "All-Pairs Shortest Paths: Floyd-Warshall Algorithm",
                "Transitive Closure: Warshall's Algorithm",
                "Resource Allocation Problem",
                "Backtracking Principles & State Space Tree Exploration",
                "Traveling Salesperson Problem (TSP) using Backtracking",
                "Graph Coloring Problem (m-Colorability)",
                "N-Queens Problem using Backtracking",
                "Hamiltonian Cycles Problem",
                "Sum of Subsets Problem",
                "Branch and Bound: Concepts, FIFO & LC Branch and Bound",
                "Traveling Salesperson Problem using Branch and Bound"
              ]
            },
            {
              unitNum: 5,
              title: "Selected Topics & NP-Completeness",
              lectures: 8,
              topics: [
                "Algebraic Computation & Fast Fourier Transform (FFT)",
                "String Matching: Naive String Matching",
                "Rabin-Karp String Matching Algorithm",
                "Knuth-Morris-Pratt (KMP) Algorithm & Prefix Function",
                "Boyer-Moore String Matching Overview",
                "Theory of NP-Completeness: P, NP, NP-Complete, NP-Hard",
                "Polynomial Time Verification and Reductions",
                "Cook's Theorem & Satisfiability (SAT)",
                "Classic NP-Complete Problems (Vertex Cover, Clique, 3-CNF)",
                "Approximation Algorithms (Vertex Cover, Metric TSP)",
                "Randomized Algorithms: Las Vegas & Monte Carlo Algorithms"
              ]
            }
          ]
        },
        {
          code: "DEPT_ELEC_1",
          name: "Departmental Elective-I",
          shortName: "Dept Elective I",
          credits: 3,
          type: "elective",
          icon: "layers",
          color: "#059669",
          selectedOption: "BCS-054",
          options: [
            {
              code: "BCS-051",
              name: "Statistical Computing",
              units: [
                {
                  unitNum: 1,
                  title: "Descriptive Statistics & Probability",
                  lectures: 8,
                  topics: [
                    "Diagrammatic Representation of Data",
                    "Measures of Central Tendency (Mean, Median, Mode)",
                    "Measures of Dispersion (Variance, Standard Deviation, Range)",
                    "Measures of Skewness and Kurtosis",
                    "Correlation & Inference Procedure for Correlation Coefficient",
                    "Bivariate and Multiple Correlation Analysis",
                    "Linear Regression and Its Inference Procedure",
                    "Multiple Regression Models",
                    "Probability: Conditional Probability, Independent Events, Bayes' Theorem",
                    "Random Variables, Discrete and Continuous Probability Distributions",
                    "Expectation and Variance",
                    "Markov Inequality, Chebyshev's Inequality, Central Limit Theorem"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Inferential Statistics & Linear Methods",
                  lectures: 8,
                  topics: [
                    "Sampling & Confidence Intervals, Inference & Significance",
                    "Estimation and Hypothesis Testing, Goodness of Fit",
                    "Test of Independence, Permutations and Randomization Tests",
                    "t-Test & z-Test (One Sample, Independent, Paired)",
                    "Analysis of Variance (ANOVA) & Chi-Square Tests",
                    "Multiple Regression Analysis & Orthogonalization by Householder (QR)",
                    "Singular Value Decomposition (SVD)",
                    "Linear Dimension Reduction using Principal Component Analysis (PCA)"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Pseudo-Random Numbers & Monte Carlo",
                  lectures: 8,
                  topics: [
                    "Random Number Generation Techniques",
                    "Inverse-Transform Method & Acceptance-Rejection Method",
                    "Transformations & Multivariate Probability Calculations",
                    "Simulation and Monte Carlo Integration",
                    "Variance Reduction Techniques",
                    "Antithetic Variables, Control Variates, Importance Sampling",
                    "Markov Chain Monte Carlo (MCMC): Markov Chains Fundamentals",
                    "Metropolis-Hastings Algorithm",
                    "Gibbs Sampling and Convergence Diagnostics"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Resampling, Density Estimation & Optimization",
                  lectures: 8,
                  topics: [
                    "Cross-Validation, Bootstrapping, Jackknife Resampling",
                    "Percentile Confidence Intervals & Permutation Tests",
                    "Univariate & Multivariate Density Estimation, Kernel Smoothing",
                    "Numerical Methods: Root Finding & Numerical Integration",
                    "Numerical Maximization and Minimization",
                    "Constrained and Unconstrained Optimization",
                    "EM (Expectation-Maximization) Algorithm & Simplex Algorithm"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Introduction to R Programming",
                  lectures: 8,
                  topics: [
                    "History and Fundamentals of R Programming",
                    "R Workspace, Package Handling, Operators, Expressions",
                    "Data Objects: Vectors, Matrices, Arrays, Lists, Data Frames",
                    "Built-in and User-Defined Functions, Strings, Factors",
                    "Flow Control, Loops, Advanced Looping, Dates and Times",
                    "Importing/Exporting Data Files & Graphics in R",
                    "R Commands for Descriptive Statistics and Data Aggregation",
                    "Multivariate Data Representation & Statistical Libraries in R"
                  ]
                }
              ]
            },
            {
              code: "BCS-052",
              name: "Data Analytics",
              units: [
                {
                  unitNum: 1,
                  title: "Data Analytics Intro & Lifecycle",
                  lectures: 8,
                  topics: [
                    "Sources and Nature of Data",
                    "Classification of Data (Structured, Semi-Structured, Unstructured)",
                    "Characteristics of Data & Big Data Platform Intro",
                    "Need of Data Analytics & Evolution of Analytic Scalability",
                    "Analytic Process and Tools: Analysis vs Reporting",
                    "Modern Data Analytic Tools & Applications",
                    "Data Analytics Lifecycle: Need and Key Roles",
                    "Lifecycle Phases: Discovery, Data Preparation, Model Planning",
                    "Lifecycle Phases: Model Building, Communicating Results, Operationalization"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Data Analysis Techniques",
                  lectures: 8,
                  topics: [
                    "Regression Modeling & Multivariate Analysis",
                    "Bayesian Modeling, Inference and Bayesian Networks",
                    "Support Vector Machines (SVM) & Kernel Methods",
                    "Time Series Analysis: Linear Systems & Nonlinear Dynamics",
                    "Rule Induction & Decision Trees",
                    "Neural Networks: Learning, Generalization & Competitive Learning",
                    "Principal Component Analysis (PCA) and Neural Networks",
                    "Fuzzy Logic: Extracting Fuzzy Models & Fuzzy Decision Trees",
                    "Stochastic Search Methods"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Mining Data Streams",
                  lectures: 8,
                  topics: [
                    "Stream Concepts, Stream Data Model and Architecture",
                    "Stream Computing, Sampling Data in a Stream, Filtering Streams",
                    "Counting Distinct Elements in a Stream",
                    "Estimating Moments & Counting Oneness in a Window",
                    "Decaying Windows for Stream Analysis",
                    "Real-Time Analytics Platform (RTAP) Applications",
                    "Case Studies: Real-Time Sentiment Analysis & Stock Market Prediction"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Frequent Itemsets & Clustering",
                  lectures: 8,
                  topics: [
                    "Mining Frequent Itemsets & Market Basket Modeling",
                    "Apriori Algorithm & Handling Large Data Sets in Main Memory",
                    "Limited Pass Algorithm & Counting Frequent Itemsets in a Stream",
                    "Clustering Techniques: Hierarchical & K-Means Clustering",
                    "Clustering High-Dimensional Data: CLIQUE and ProCLUS",
                    "Frequent Pattern Based Clustering Methods",
                    "Clustering in Non-Euclidean Space & Parallel Stream Clustering"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Big Data Frameworks & R Visualization",
                  lectures: 8,
                  topics: [
                    "Frameworks: MapReduce, Hadoop, Pig, Hive, HBase",
                    "MapR, Sharding, NoSQL Databases, Amazon S3, HDFS",
                    "Visual Data Analysis Techniques & Interaction Systems",
                    "Introduction to R GUI, Data Import/Export, Attributes and Types",
                    "Descriptive Statistics & Exploratory Data Analysis (EDA) in R",
                    "Visualization Before Analysis & Analytics for Unstructured Data"
                  ]
                }
              ]
            },
            {
              code: "BCS-053",
              name: "Computer Graphics",
              units: [
                {
                  unitNum: 1,
                  title: "Hardware, Primitives & Line Algorithms",
                  lectures: 8,
                  topics: [
                    "Types of Computer Graphics & Applications",
                    "Graphic Displays: Random Scan Displays vs Raster Scan Displays",
                    "Frame Buffer and Video Controller Architecture",
                    "Points and Lines Graphics Primitives",
                    "DDA Line Drawing Algorithm",
                    "Bresenham's Line Drawing Algorithm",
                    "Mid-Point Circle Generating Algorithm",
                    "Parallel Algorithms for Line and Circle Generation"
                  ]
                },
                {
                  unitNum: 2,
                  title: "2D Transformations, Windowing & Clipping",
                  lectures: 8,
                  topics: [
                    "Basic 2D Transformations: Translation, Rotation, Scaling",
                    "Matrix Representations & Homogeneous Coordinates",
                    "Composite Transformations, Reflections, and Shearing",
                    "Viewing Pipeline and Viewing Transformations",
                    "2D Line Clipping: Cohen-Sutherland Algorithm",
                    "2D Line Clipping: Liang-Barsky Algorithm",
                    "Line Clipping against Non-Rectangular Clip Windows",
                    "Polygon Clipping: Sutherland-Hodgman Polygon Clipping",
                    "Weiler-Atherton Polygon Clipping Algorithm",
                    "Curve Clipping and Text Clipping"
                  ]
                },
                {
                  unitNum: 3,
                  title: "3D Graphics & Projections",
                  lectures: 8,
                  topics: [
                    "3D Geometric Primitives & 3D Object Representation",
                    "3D Transformations: Translation, Rotation, Scaling, Reflection",
                    "3D Composite Transformations",
                    "3D Viewing Pipeline & View Coordinate System",
                    "Projections: Parallel Projections (Orthographic, Oblique)",
                    "Projections: Perspective Projections & Vanishing Points",
                    "3D Clipping Techniques"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Curves and Surfaces",
                  lectures: 8,
                  topics: [
                    "Quadric Surfaces: Spheres, Ellipsoids, Torus",
                    "Blobby Objects & Superquadrics",
                    "Introductory Concepts of Splines & Continuity",
                    "Hermite Splines & B-Spline Curves and Surfaces",
                    "Bezier Curves and Surfaces & their Mathematical Properties"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Hidden Surfaces & Illumination Models",
                  lectures: 8,
                  topics: [
                    "Visible Surface Detection: Back-Face Detection Algorithm",
                    "Depth-Buffer (Z-Buffer) Method & A-Buffer Method",
                    "Scan-Line Method for Visible Surface Detection",
                    "Basic Illumination Models: Ambient, Diffuse, and Specular Reflection",
                    "Phong and Gouraud Shading Models",
                    "Warn Model, Intensity Attenuation & Color Considerations",
                    "Transparency, Shadows, and Ray Tracing Overview"
                  ]
                }
              ]
            },
            {
              code: "BCS-054",
              name: "Object Oriented System Design with C++",
              units: [
                {
                  unitNum: 1,
                  title: "OOP Concepts & UML Architecture",
                  lectures: 8,
                  topics: [
                    "Meaning of Object Orientation & Object Identity",
                    "Encapsulation, Information Hiding, Polymorphism, Genericity",
                    "Importance and Principles of Modeling",
                    "Object-Oriented Modeling Concepts",
                    "Introduction to UML (Unified Modeling Language)",
                    "Conceptual Model of the UML & UML Architecture",
                    "UML Building Blocks: Things, Relationships, Diagrams"
                  ]
                },
                {
                  unitNum: 2,
                  title: "UML Structural, Behavioral & Architecture Modeling",
                  lectures: 8,
                  topics: [
                    "Classes, Relationships, Common Mechanisms & Diagrams",
                    "Class & Object Diagrams: Terms, Concepts, Modeling Techniques",
                    "Collaboration Diagrams: Messages, Iteration, Self-Messages",
                    "Sequence Diagrams: Asynchronous Messages, Priorities, Callbacks",
                    "Use Cases & Use Case Diagrams: Actors, Includes, Extends",
                    "Activity Diagrams: Actions, Fork, Join, Swimlanes",
                    "State Machine Diagrams: States, Events, Transitions",
                    "Package Diagrams & Interaction Overview Diagrams",
                    "Component Diagrams & Deployment Diagrams"
                  ]
                },
                {
                  unitNum: 3,
                  title: "OO Analysis & Design vs SA/SD",
                  lectures: 8,
                  topics: [
                    "Object-Oriented Analysis (OOA) & System Design (OOD)",
                    "Object Design: Combining Object, Dynamic, and Functional Models",
                    "Designing Algorithms & Design Optimization",
                    "Implementation of Control & Adjustment of Inheritance",
                    "Physical Packaging & Documenting Design Considerations",
                    "Structured Analysis / Structured Design (SA/SD) vs OO Approach",
                    "Jackson Structured Development (JSD)",
                    "Translating Classes into Data Structures & Passing Arguments",
                    "OO Programming Style: Reusability, Extensibility, Robustness"
                  ]
                },
                {
                  unitNum: 4,
                  title: "C++ Fundamentals & Functions",
                  lectures: 8,
                  topics: [
                    "C++ Program Structure, Namespaces, Identifiers, Variables",
                    "Constants, Enums, Operators, Typecasting, Control Structures",
                    "Functions: Simple Functions & Call / Return by Reference",
                    "Inline Functions vs Macros",
                    "Function Overloading & Default Arguments",
                    "Friend Functions & Friend Classes",
                    "Virtual Functions Basics"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Classes, Inheritance & Polymorphism in C++",
                  lectures: 8,
                  topics: [
                    "Objects and Classes: Private, Public, Protected Access Specifiers",
                    "Static Data Members and Static Member Functions",
                    "Constructors: Default, Parameterized, Copy, Dynamic",
                    "Destructors & Memory Management (new, delete)",
                    "Operator Overloading (Unary & Binary Operators)",
                    "Type Conversion: Basic to Class, Class to Basic, Class to Class",
                    "Inheritance Types: Single, Multiple, Multilevel, Hierarchical, Hybrid",
                    "Virtual Base Classes & Member Function Overriding",
                    "Pointers to Objects & 'this' Pointer",
                    "Virtual Functions, Pure Virtual Functions & Abstract Classes",
                    "Run-Time Polymorphism Implementation"
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "DEPT_ELEC_2",
          name: "Departmental Elective-II",
          shortName: "Dept Elective II",
          credits: 3,
          type: "elective",
          icon: "brain",
          color: "#db2777",
          selectedOption: "BCS-055",
          options: [
            {
              code: "BCS-055",
              name: "Machine Learning Techniques",
              units: [
                {
                  unitNum: 1,
                  title: "Introduction to Machine Learning",
                  lectures: 8,
                  topics: [
                    "Learning Definition & Types (Supervised, Unsupervised, Reinforcement)",
                    "Well-Defined Learning Problems & Designing a Learning System",
                    "History and Evolution of Machine Learning",
                    "ML Approaches: ANN, Clustering, RL, Decision Trees, Bayes, SVM, GA",
                    "Key Issues in Machine Learning",
                    "Data Science vs Machine Learning Concepts"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Regression, Bayesian Learning & SVM",
                  lectures: 8,
                  topics: [
                    "Linear Regression & Ordinary Least Squares",
                    "Logistic Regression for Classification",
                    "Bayes' Theorem & Concept Learning",
                    "Bayes Optimal Classifier & Naive Bayes Classifier",
                    "Bayesian Belief Networks (BBN)",
                    "Expectation-Maximization (EM) Algorithm",
                    "Support Vector Machines (SVM): Hyperplanes & Decision Surfaces",
                    "Margin Maximization: Hard vs Soft Margin",
                    "Kernel Trick: Linear, Polynomial, Gaussian RBF Kernels",
                    "Properties and Practical Issues in SVM"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Decision Trees & Instance-Based Learning",
                  lectures: 8,
                  topics: [
                    "Decision Tree Representation & Learning Algorithm",
                    "Inductive Bias & Inductive Inference in Decision Trees",
                    "Entropy and Information Theory",
                    "Information Gain, Gain Ratio & ID3 / C4.5 Algorithms",
                    "Issues in Decision Trees: Overfitting, Tree Pruning, Continuous Attributes",
                    "Instance-Based Learning: k-Nearest Neighbor (k-NN) Algorithm",
                    "Distance Metrics (Euclidean, Manhattan, Minkowski)",
                    "Locally Weighted Regression",
                    "Radial Basis Function (RBF) Networks",
                    "Case-Based Reasoning & Learning"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Artificial Neural Networks & Deep Learning",
                  lectures: 8,
                  topics: [
                    "Biological vs Artificial Neurons & Perceptron Model",
                    "Perceptron Learning Rule & Linear Separability Problem",
                    "Multilayer Perceptron (MLP) Architecture",
                    "Gradient Descent and the Delta Rule",
                    "Derivation of the Backpropagation Algorithm",
                    "Generalization, Overfitting & Regularization in ANN",
                    "Unsupervised Learning: Kohonen Self-Organizing Maps (SOM)",
                    "Deep Learning Introduction & Motivation",
                    "Convolutional Neural Networks (CNN) Architecture",
                    "CNN Layers: Convolutional, Activation (ReLU), Pooling, Fully Connected",
                    "1D and 2D Convolutions & Network Training",
                    "CNN Case Studies: Diabetic Retinopathy, Smart Speakers, Self-Driving Cars"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Reinforcement Learning & Genetic Algorithms",
                  lectures: 8,
                  topics: [
                    "Introduction to Reinforcement Learning & Agent-Environment Framework",
                    "RL Tasks: Exploration vs Exploitation",
                    "Markov Decision Processes (MDP): States, Actions, Transitions, Rewards",
                    "Bellman Equation & Value Iteration / Policy Iteration",
                    "Q-Learning Algorithm & Q-Table Updates",
                    "Introduction to Deep Q-Learning (DQN) & Applications",
                    "Genetic Algorithms (GA): Principles & Terminology",
                    "GA Components: Chromosomes, Fitness Function",
                    "GA Cycle of Reproduction: Selection, Crossover, Mutation",
                    "Genetic Programming & Models of Evolution and Learning",
                    "Practical Applications of Genetic Algorithms"
                  ]
                }
              ]
            },
            {
              code: "BCS-056",
              name: "Application of Soft Computing",
              units: [
                {
                  unitNum: 1,
                  title: "Neural Networks Architecture",
                  lectures: 8,
                  topics: [
                    "Biological Neuron, Nerve Structure, Synapse Model",
                    "Artificial Neuron and Mathematical Models",
                    "Activation Functions (Sigmoid, Tanh, ReLU, Step)",
                    "Neural Network Architectures: Single-Layer and Multilayer Feedforward",
                    "Recurrent Neural Networks (RNN) Overview",
                    "Learning Techniques: Hebbian, Perceptron, Delta Rule",
                    "Auto-Associative and Hetero-Associative Memory"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Backpropagation Networks",
                  lectures: 8,
                  topics: [
                    "Multilayer Perceptron Architecture & Formulation",
                    "Backpropagation Learning Method & Mathematical Derivation",
                    "Effect of Learning Rate & Momentum Coefficient",
                    "Factors Affecting Backpropagation Convergence & Training",
                    "Applications of Backpropagation Networks"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Fuzzy Logic Fundamentals",
                  lectures: 8,
                  topics: [
                    "Basic Concepts of Fuzzy Logic & Philosophy",
                    "Fuzzy Sets vs Crisp (Classical) Sets",
                    "Fuzzy Set Operations (Union, Intersection, Complement)",
                    "Properties of Fuzzy Sets",
                    "Fuzzy Relations and Crisp Relations",
                    "Composition of Fuzzy Relations (Max-Min, Max-Product)",
                    "Fuzzy to Crisp Conversion Principles"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Fuzzy Membership, Rules & Controllers",
                  lectures: 8,
                  topics: [
                    "Fuzzy Membership Functions (Triangular, Trapezoidal, Gaussian)",
                    "Interference in Fuzzy Logic & Fuzzy IF-THEN Rules",
                    "Fuzzy Propositions & Fuzzy Implications",
                    "Fuzzification Techniques",
                    "Defuzzification Methods (Centroid, Bisector, Mean of Maxima)",
                    "Fuzzy Logic Controller Architecture & Design",
                    "Industrial Applications of Fuzzy Controllers (Washing Machine, Inverter)"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Genetic Algorithms (GA)",
                  lectures: 8,
                  topics: [
                    "Basic Concepts & Working Principle of GA",
                    "Procedures and Standard Flowchart of GA",
                    "Genetic Representations & Encoding Schemes (Binary, Real, Order)",
                    "Initialization and Selection Methods (Roulette Wheel, Tournament)",
                    "Genetic Operators: Crossover (Single-Point, Multi-Point, Uniform)",
                    "Genetic Operators: Mutation (Bit-Flip, Inversion)",
                    "Generational Cycle, Elitism & Termination Criteria",
                    "GA Applications in Combinatorial Optimization"
                  ]
                }
              ]
            },
            {
              code: "BCS-057",
              name: "Image Processing",
              units: [
                {
                  unitNum: 1,
                  title: "Digital Image Fundamentals",
                  lectures: 8,
                  topics: [
                    "Steps in Digital Image Processing & System Architecture",
                    "Elements of Visual Perception & Human Eye Structure",
                    "Image Sensing and Acquisition (Sensor Strips, Sensor Arrays)",
                    "Image Sampling and Quantization",
                    "Relationships between Pixels (Neighbors, Adjacency, Connectivity)",
                    "Distance Measures (Euclidean, City-Block, Chessboard)",
                    "Color Image Fundamentals: RGB, HSI, CMYK Color Models",
                    "2D Mathematical Preliminaries & Transforms (DFT, DCT)"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Image Enhancement",
                  lectures: 8,
                  topics: [
                    "Spatial Domain: Gray-Level Transformations (Linear, Log, Power-Law)",
                    "Histogram Processing, Histogram Equalization & Matching",
                    "Spatial Filtering: Smoothing Filters (Linear & Order-Statistics)",
                    "Spatial Filtering: Sharpening Filters (Laplacian, Unsharp Masking)",
                    "Frequency Domain Filtering Introduction & 2D Fourier Transform",
                    "Smoothing Frequency Domain Filters (Ideal, Butterworth, Gaussian)",
                    "Sharpening Frequency Domain Filters",
                    "Homomorphic Filtering & Color Image Enhancement"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Image Restoration",
                  lectures: 8,
                  topics: [
                    "Image Degradation / Restoration Model",
                    "Noise Models (Gaussian, Rayleigh, Gamma, Salt-and-Pepper)",
                    "Restoration in the Presence of Noise Only (Mean, Order-Statistics Filters)",
                    "Adaptive Local Noise Reduction Filters",
                    "Periodic Noise Reduction: Band-Reject, Band-Pass, Notch Filters",
                    "Optimum Notch Filtering",
                    "Inverse Filtering and Wiener (Minimum MSE) Filtering"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Image Segmentation",
                  lectures: 8,
                  topics: [
                    "Detection of Discontinuities: Points, Lines, Edges",
                    "Edge Linking and Boundary Detection via Hough Transform",
                    "Thresholding: Basic Global Thresholding & Otsu's Method",
                    "Region-Based Segmentation: Region Growing, Splitting and Merging",
                    "Morphological Processing: Dilation, Erosion, Opening, Closing",
                    "Morphological Watersheds Segmentation & Dam Construction Algorithm"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Compression & Recognition",
                  lectures: 8,
                  topics: [
                    "Need for Data Compression & Image Redundancies (Coding, Spatial, Psycho-visual)",
                    "Lossless Coding: Huffman, Run-Length Encoding (RLE), Arithmetic Coding",
                    "Lossy Compression: Transform Coding & JPEG Standard",
                    "MPEG Video Compression Overview",
                    "Boundary Representation: Chain Codes, Polygonal Approximations",
                    "Boundary Descriptors & Fourier Descriptors",
                    "Regional Descriptors: Topological Features, Texture Analysis",
                    "Pattern Classes & Recognition Based on Minimum Distance Matching"
                  ]
                }
              ]
            },
            {
              code: "BCS-058",
              name: "Data Warehousing and Data Mining",
              units: [
                {
                  unitNum: 1,
                  title: "Data Warehousing Architecture",
                  lectures: 8,
                  topics: [
                    "Data Warehousing: Overview, Definition, and Core Components",
                    "Building a Data Warehouse & Warehouse Database Lifecycle",
                    "Mapping Data Warehouse to Multiprocessor Architecture",
                    "Operational Database Systems (OLTP) vs Data Warehouse (OLAP)",
                    "Multidimensional Data Model: Dimensions, Measures, Facts",
                    "Data Cubes: Star Schema, Snowflake Schema, Fact Constellation",
                    "Data Warehouse Back-End Tools and Utilities"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Warehouse Processes & Implementation",
                  lectures: 8,
                  topics: [
                    "Warehousing Strategy and Management Processes",
                    "Warehouse Planning and Implementation Steps",
                    "Hardware and Operating Systems for Data Warehousing",
                    "Client/Server Computing Model & Data Warehousing",
                    "Parallel Processors and Cluster Systems",
                    "Distributed DBMS Implementations in Warehousing",
                    "Warehousing Software & Schema Design Principles"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Data Mining & Data Pre-Processing",
                  lectures: 8,
                  topics: [
                    "Data Mining: Motivation, Definition, and Functionalities",
                    "Data Processing & Forms of Data Pre-processing",
                    "Data Cleaning: Handling Missing Values & Noisy Data (Binning, Regression)",
                    "Data Integration and Transformation (Normalization, Aggregation)",
                    "Data Reduction: Data Cube Aggregation, Dimensionality Reduction",
                    "Data Compression and Numerosity Reduction",
                    "Discretization and Concept Hierarchy Generation",
                    "Decision Trees for Data Mining"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Classification, Clustering & Association Rules",
                  lectures: 8,
                  topics: [
                    "Classification: Definition, Issues & Data Generalization",
                    "Analytical Characterization & Attribute Relevance Analysis",
                    "Statistical-Based & Distance-Based Classification",
                    "Decision Tree-Based Classification (ID3, C4.5)",
                    "Clustering: Similarity and Distance Measures",
                    "Hierarchical Clustering (Agglomerative, Divisive, CURE, Chameleon)",
                    "Partitional Clustering: K-Means & K-Medoids",
                    "Density-Based Methods: DBSCAN and OPTICS",
                    "Grid-Based Methods: STING and CLIQUE",
                    "Association Rules: Frequent Itemset Mining & Apriori Algorithm",
                    "Parallel and Distributed Association Rule Mining",
                    "Neural Network Approaches to Mining"
                  ]
                },
                {
                  unitNum: 5,
                  title: "OLAP & Recent Trends",
                  lectures: 8,
                  topics: [
                    "Data Visualization and Historical Information Access",
                    "OLAP Query Facilities and Interactive Operations",
                    "OLAP Servers: ROLAP, MOLAP, HOLAP Comparison",
                    "Data Mining Interface & System Architecture",
                    "Security, Backup, Recovery, and Tuning of Data Warehouse",
                    "Testing the Data Warehouse",
                    "Recent Trends: Web Mining, Spatial Mining, Temporal Mining"
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "BCS551",
          name: "Database Management Systems Lab",
          shortName: "DBMS Lab",
          credits: 1,
          type: "lab",
          icon: "terminal",
          color: "#2563eb",
          experiments: [
            "1. Installing Oracle 11g / MySQL database engine",
            "2. Creating Entity-Relationship (ER) Diagrams using CASE tools",
            "3. Writing SQL Statements: (a) Basic SELECT statements",
            "3. Writing SQL Statements: (b) Restricting and sorting query data",
            "3. Writing SQL Statements: (c) Displaying data from multiple tables (Joins)",
            "3. Writing SQL Statements: (d) Aggregating data using group functions",
            "3. Writing SQL Statements: (e) Manipulating data (INSERT, UPDATE, DELETE)",
            "3. Writing SQL Statements: (f) Creating and managing tables (DDL constraints)",
            "4. Schema Normalization practical exercises (1NF to BCNF)",
            "5. Creating explicit and implicit PL/SQL Cursors",
            "6. Creating PL/SQL Stored Procedures and Functions",
            "7. Creating PL/SQL Packages and Database Triggers",
            "8. Design and Implementation of Payroll Processing System",
            "9. Design and Implementation of Library Information System",
            "10. Design and Implementation of Student Information System",
            "11. Automatic Backup and Recovery of Database Files",
            "12. Mini Project: Database & Application Development (Inventory/Hospital/Hotel/Ticket)",
            "Virtual Lab Mapping: DDL statements (Create, Alter, Drop table)",
            "Virtual Lab Mapping: DML and DQL statements with operators and aggregates",
            "Virtual Lab Mapping: TCL statements (Commit, Rollback) & DESCRIBE structure"
          ]
        },
        {
          code: "BCS552",
          name: "Web Technology Lab",
          shortName: "Web Tech Lab",
          credits: 1,
          type: "lab",
          icon: "code",
          color: "#0284c7",
          experiments: [
            "1. Design Institute Website displaying departmental information using HTML",
            "2. Design Data Entry Form for student/employee/faculty using HTML form elements",
            "3. Develop a Responsive Website using CSS and HTML (blog/commercial portal)",
            "4. Client-side input data validation programs using HTML and JavaScript",
            "5. XML document creation with DTD validation and XSL/CSS styling",
            "6. Create a JavaBean for Employee Information (EmpID, Name, Salary, Dept)",
            "7. Build a command-line utility using Node.js (uppercase, factorial, password)",
            "8. Develop a script using MongoDB aggregation framework (group, filter, sort)",
            "9. Servlet Cookie Management: Create cookies for 4 users & authenticate login",
            "10. Servlet/JSP Database Connectivity: User registration form & data insertion/retrieval",
            "11. JSP Login System: Register 3-4 users and authenticate with database credentials",
            "12. Design and implement a Shopping Cart application with Session Tracking API"
          ]
        },
        {
          code: "BCS553",
          name: "Design and Analysis of Algorithm Lab",
          shortName: "DAA Lab",
          credits: 1,
          type: "lab",
          icon: "git-commit",
          color: "#7c3aed",
          experiments: [
            "1. Recursive Binary Search and Linear Search implementation",
            "2. Heap Sort program and max-heapify analysis",
            "3. Merge Sort program and recursion tree tracing",
            "4. Selection Sort program implementation",
            "5. Insertion Sort program implementation",
            "6. Quick Sort program implementation",
            "7. Fractional Knapsack Problem using Greedy solution",
            "8. Traveling Salesperson Problem (TSP) implementation",
            "9. Minimum Spanning Tree using Kruskal's Algorithm",
            "10. N-Queens Problem using Backtracking",
            "11. Quick Sort time complexity benchmarking (n > 5000 random elements) & curve plotting",
            "12. Merge Sort time complexity benchmarking (n > 5000 random elements) & curve plotting",
            "13. 0/1 Knapsack Problem implementation: Dynamic Programming vs Greedy comparison",
            "14. Dijkstra's Single-Source Shortest Path algorithm on weighted graph",
            "15. Minimum Cost Spanning Tree using Kruskal's Algorithm with Disjoint Sets Union-Find",
            "16. Minimum Cost Spanning Tree using Prim's Algorithm",
            "17. All-Pairs Shortest Paths problem using Floyd-Warshall Algorithm",
            "18. Traveling Salesperson Problem using Dynamic Programming",
            "19. Sum of Subsets Problem using Backtracking",
            "20. Find all Hamiltonian Cycles in a connected graph using Backtracking"
          ]
        },
        {
          code: "BCS554",
          name: "Mini Project or Internship Assessment",
          shortName: "Mini Project",
          credits: 2,
          type: "project",
          icon: "folder",
          color: "#d97706",
          experiments: [
            "1. Internship Report / 4-Week Summer Project documentation compilation",
            "2. System Requirements Specification (SRS) & Architecture Design",
            "3. Code repository setup, modular implementation & version control",
            "4. Testing, UI demonstration & final viva voce presentation"
          ]
        },
        {
          code: "BNC501/502",
          name: "Constitution of India / Essence of Indian Knowledge",
          shortName: "Constitution / ITK",
          credits: 0,
          type: "audit",
          icon: "book-open",
          color: "#475569",
          units: [
            {
              unitNum: 1,
              title: "Constitutional Framework & Values",
              topics: [
                "Preamble, Salient Features & Constitutional Philosophy",
                "Fundamental Rights (Articles 12-35)",
                "Directive Principles of State Policy & Fundamental Duties",
                "Union & State Executive, Legislature, and Independent Judiciary",
                "Emergency Provisions & Constitutional Amendments"
              ]
            }
          ]
        }
      ]
    },
    sem6: {
      id: "sem6",
      name: "Semester VI",
      totalCredits: 21,
      totalMarks: 800,
      subjects: [
        {
          code: "BCS601",
          name: "Software Engineering",
          shortName: "Software Engg",
          credits: 4,
          type: "core",
          icon: "shield-check",
          color: "#059669",
          textbooks: [
            "R.S. Pressman - 'Software Engineering: A Practitioner's Approach', McGraw Hill",
            "Pankaj Jalote - 'Software Engineering', Wiley",
            "Rajib Mall - 'Fundamentals of Software Engineering', PHI",
            "Ian Sommerville - 'Software Engineering', Addison Wesley"
          ],
          units: [
            {
              unitNum: 1,
              title: "Introduction & SDLC Models",
              lectures: 8,
              topics: [
                "Introduction to Software Engineering & Components",
                "Software Characteristics & The Software Crisis",
                "Software Engineering Processes vs Conventional Engineering",
                "Software Quality Attributes (Maintainability, Reliability, Usability)",
                "Software Development Life Cycle (SDLC) Concept",
                "Waterfall Model: Phases, Strengths & Weaknesses",
                "Prototyping Model & RAD Model",
                "Spiral Model: Risk Analysis & Evolutionary Cycles",
                "Iterative Enhancement & Agile SDLC Models"
              ]
            },
            {
              unitNum: 2,
              title: "Software Requirements Specification (SRS) & SQA",
              lectures: 8,
              topics: [
                "Requirements Engineering Process: Elicitation & Analysis",
                "Requirements Documentation, Review & User Needs Management",
                "Feasibility Study: Technical, Operational, Economic",
                "Information Modeling: Data Flow Diagrams (DFDs)",
                "Entity-Relationship Diagrams for Software Requirements",
                "Decision Tables and Decision Trees",
                "SRS Document Structure & IEEE Standards for SRS",
                "Software Quality Assurance (SQA): Verification and Validation",
                "SQA Plans and Quality Frameworks",
                "ISO 9000 Quality Standard Models",
                "SEI Capability Maturity Model (SEI-CMM) Levels"
              ]
            },
            {
              unitNum: 3,
              title: "Software Design & Metrics",
              lectures: 8,
              topics: [
                "Basic Concepts of Software Design & Architectural Design",
                "Low-Level Design: Modularization & Structure Charts",
                "Pseudocode and Flowcharts",
                "Coupling: Types and Minimization Guidelines",
                "Cohesion: Types and Maximization Guidelines",
                "Function-Oriented Design vs Object-Oriented Design",
                "Top-Down and Bottom-Up Design Strategies",
                "Software Measurement and Metrics Overview",
                "Halstead's Software Science Metrics (Length, Volume, Effort)",
                "Function Point (FP) Based Metrics Calculation",
                "Cyclomatic Complexity & Control Flow Graphs (McCabe's Metric)"
              ]
            },
            {
              unitNum: 4,
              title: "Software Testing Strategies",
              lectures: 8,
              topics: [
                "Testing Objectives & Principles",
                "Testing Levels: Unit Testing, Integration Testing",
                "System Testing & Acceptance Testing (Alpha and Beta)",
                "Regression Testing & Performance Testing",
                "Test Drivers and Test Stubs for Integration",
                "Structural Testing (White-Box): Basis Path Testing & Cyclomatic Complexity",
                "Control Structure Testing: Condition, Data Flow, Loop Testing",
                "Functional Testing (Black-Box): Equivalence Partitioning",
                "Boundary Value Analysis (BVA) & Cause-Effect Graphing",
                "Test Data Suite Preparation & Test Cases Design",
                "Static Testing Strategies: Peer Reviews, Walkthroughs, Code Inspection",
                "Compliance with Design and Coding Standards"
              ]
            },
            {
              unitNum: 5,
              title: "Maintenance & Project Management",
              lectures: 8,
              topics: [
                "Software as an Evolutionary Entity & Need for Maintenance",
                "Categories of Maintenance: Preventive, Corrective, Perfective, Adaptive",
                "Cost of Maintenance & Software Re-Engineering",
                "Reverse Engineering Principles",
                "Software Configuration Management (SCM) Activities",
                "Change Control Process & Baseline Management",
                "Software Version Control & Overview of CASE Tools",
                "Project Estimation Parameters: Cost, Effort, Duration",
                "Constructive Cost Model (COCOMO) & COCOMO II",
                "Resource Allocation Models & Gantt Charts",
                "Software Risk Analysis, Assessment and Risk Management (RMMM)"
              ]
            }
          ]
        },
        {
          code: "BCS602",
          name: "Compiler Design",
          shortName: "Compiler Design",
          credits: 4,
          type: "core",
          icon: "cpu",
          color: "#ea580c",
          textbooks: [
            "Aho, Sethi & Ullman - 'Compilers: Principles, Techniques and Tools' (Dragon Book)",
            "K. Muneeswaran - 'Compiler Design', Oxford University Press",
            "J.P. Bennet - 'Introduction to Compiler Techniques', McGraw-Hill",
            "Kenneth Louden - 'Compiler Construction', Cengage Learning"
          ],
          units: [
            {
              unitNum: 1,
              title: "Lexical Analysis & Context-Free Grammars",
              lectures: 8,
              topics: [
                "Phases and Passes of a Compiler (Front-End vs Back-End)",
                "Bootstrapping Techniques & Cross-Compilers",
                "Role of Lexical Analyzer & Tokens, Patterns, Lexemes",
                "Finite State Machines & Regular Expressions for Lexical Analysis",
                "Optimization of DFA-Based Pattern Matchers",
                "Implementation of Lexical Analyzers & LEX Compiler Tool",
                "Formal Grammars and Application to Syntax Analysis",
                "BNF (Backus-Naur Form) Notation & Ambiguous Grammars",
                "Context-Free Grammars (CFG), Derivations, and Parse Trees",
                "Capabilities and Limitations of CFGs vs Regular Grammars",
                "YACC Parser Generator Introduction"
              ]
            },
            {
              unitNum: 2,
              title: "Parsing Techniques (LL and LR)",
              lectures: 8,
              topics: [
                "Role of the Parser & Handling Syntax Errors",
                "Shift-Reduce Parsing & Handle Pruning",
                "Operator-Precedence Parsing & Operator Grammar",
                "Top-Down Parsing: Recursive Descent Parsing",
                "Predictive LL(1) Parsers & FIRST and FOLLOW Computation",
                "LL(1) Parsing Table Construction & Non-LL(1) Grammars",
                "Bottom-Up LR Parsers Overview & LR(0) Items",
                "Canonical Collection of LR(0) Items",
                "SLR(1) Parsing Table Construction & Conflicts",
                "Canonical LR (CLR / LR(1)) Items and Parsing Table",
                "LALR Parsing Table Construction (Merging LR(1) States)",
                "Using Ambiguous Grammars in LR Parsing & Conflict Resolution",
                "Automatic Parser Generators & Table Implementation"
              ]
            },
            {
              unitNum: 3,
              title: "Syntax-Directed Translation & Intermediate Code",
              lectures: 8,
              topics: [
                "Syntax-Directed Definitions (SDD) & Syntax-Directed Translation (SDT)",
                "Synthesized vs Inherited Attributes & Dependency Graphs",
                "S-Attributed Definitions vs L-Attributed Definitions",
                "Implementation of Syntax-Directed Translators",
                "Intermediate Code Representations: Syntax Trees, DAGs, Postfix Notation",
                "Three-Address Code (TAC): Quadruples, Triples, Indirect Triples",
                "Translation of Assignment Statements & Expressions",
                "Translation of Boolean Expressions (Short-Circuit Evaluation)",
                "Backpatching for Translation of Control Flow Statements",
                "Array References in Arithmetic Expressions",
                "Procedure Calls and Declaration Statements Translation"
              ]
            },
            {
              unitNum: 4,
              title: "Symbol Tables & Runtime Environment",
              lectures: 8,
              topics: [
                "Role of Symbol Table & Attributes Stored",
                "Symbol Table Data Structures (Hash Tables, Binary Trees)",
                "Representing Scope Information in Symbol Tables",
                "Runtime Storage Administration: Static vs Dynamic Storage",
                "Simple Stack Allocation Scheme & Activation Records (Stack Frames)",
                "Storage Allocation in Block-Structured Languages",
                "Access to Non-Local Names (Access Links, Displays)",
                "Parameter Passing Mechanisms (Call by Value, Reference, Name)",
                "Error Detection and Recovery: Lexical, Syntactic, Semantic Phase Errors"
              ]
            },
            {
              unitNum: 5,
              title: "Code Generation & Optimization",
              lectures: 8,
              topics: [
                "Issues in the Design of a Code Generator",
                "Target Machine Architecture & Addressing Modes",
                "Basic Blocks Identification & Flow Graphs Construction",
                "Optimization of Basic Blocks using DAGs",
                "Code Generator Algorithm & Register Allocation",
                "Machine-Independent Optimizations Overview",
                "Loop Optimizations: Code Motion, Induction Variables, Strength Reduction",
                "Common Subexpression Elimination & Dead Code Elimination",
                "Value Numbers and Algebraic Laws for Transformation",
                "Global Data-Flow Analysis: Reaching Definitions & Available Expressions"
              ]
            }
          ]
        },
        {
          code: "BCS603",
          name: "Computer Networks",
          shortName: "Computer Networks",
          credits: 4,
          type: "core",
          icon: "network",
          color: "#2563eb",
          textbooks: [
            "Behrouz Forouzan - 'Data Communication and Networking', McGraw Hill",
            "Andrew S. Tanenbaum - 'Computer Networks', Prentice Hall",
            "William Stallings - 'Data and Computer Communication', Pearson",
            "Kurose & Ross - 'Computer Networking: A Top-Down Approach', Pearson"
          ],
          units: [
            {
              unitNum: 1,
              title: "Physical Layer & Network Architecture",
              lectures: 8,
              topics: [
                "Goals and Applications of Computer Networks",
                "Network Categories: LAN, MAN, WAN & Internet Structure",
                "Network Layering Principles, Services & Protocols",
                "The OSI 7-Layer Reference Model",
                "The TCP/IP Protocol Suite & Comparison with OSI",
                "Network Devices: Hubs, Repeaters, Switches, Routers, Gateways",
                "Network Topologies: Mesh, Star, Tree, Bus, Ring, Hybrid",
                "Transmission Media: Guided (Twisted Pair, Coaxial, Optical Fiber)",
                "Unguided Transmission Media: Radio Waves, Microwaves, Infrared",
                "Signal Transmission, Digital Encoding & Transmission Impairments",
                "Network Performance Metrics (Bandwidth, Throughput, Latency, Jitter)",
                "Switching Techniques: Circuit Switching vs Packet Switching",
                "Multiplexing: FDM, TDM, WDM"
              ]
            },
            {
              unitNum: 2,
              title: "Data Link Layer & MAC Sublayer",
              lectures: 8,
              topics: [
                "Data Link Layer Design Issues & Framing Techniques",
                "Error Detection & Correction: Parity, Checksum, CRC, Hamming Code",
                "Elementary Data Link Protocols: Unrestricted Simplex, Stop-and-Wait",
                "Sliding Window Protocols: 1-Bit Sliding Window",
                "Go-Back-N Protocol & Selective Repeat Protocol",
                "Channel Allocation: Static vs Dynamic Allocation",
                "Random Access Protocols: ALOHA (Pure and Slotted)",
                "Carrier Sense Multiple Access (CSMA, CSMA/CD, CSMA/CA)",
                "IEEE 802.3 Ethernet Standard & Frame Format",
                "Wireless LANs: IEEE 802.11 Architecture and CSMA/CA",
                "Data Link Switches and Bridges: Learning Bridges & Spanning Tree Algorithm"
              ]
            },
            {
              unitNum: 3,
              title: "Network Layer & Routing Protocols",
              lectures: 8,
              topics: [
                "Network Layer Design: Virtual Circuits vs Datagram Networks",
                "IPv4 Addressing: Classful Addressing & Classless Addressing (CIDR)",
                "Subnetting, Supernetting, and Subnet Masks Calculation",
                "IPv4 Datagram Header Format & Fragmentation",
                "Address Resolution Protocols: ARP and RARP",
                "Host Configuration & Diagnostic Protocols: DHCP and ICMP",
                "Routing vs Forwarding Principles",
                "Static vs Dynamic Routing Algorithms",
                "Shortest Path Routing: Dijkstra's Algorithm",
                "Distance Vector Routing & Count-to-Infinity Problem",
                "Link State Routing & OSPF Protocol",
                "Border Gateway Protocol (BGP) & Routing Information Protocol (RIP)",
                "Congestion Control: Open-Loop vs Closed-Loop",
                "Traffic Shaping: Leaky Bucket & Token Bucket Algorithms",
                "IPv6 Architecture, Addressing & IPv4 to IPv6 Transition"
              ]
            },
            {
              unitNum: 4,
              title: "Transport Layer Protocols",
              lectures: 8,
              topics: [
                "Transport Layer Services & Process-to-Process Delivery",
                "Port Addressing & Multiplexing / Demultiplexing",
                "User Datagram Protocol (UDP): Characteristics, Header & Checksum",
                "Transmission Control Protocol (TCP): Features & Segment Header",
                "TCP Connection Establishment (Three-Way Handshake) & Termination",
                "TCP Flow Control: Sliding Window & Silly Window Syndrome",
                "TCP Error Control & Retransmission Timers (RTT Estimation)",
                "TCP Congestion Control: AIMD, Slow Start, Congestion Avoidance",
                "Fast Retransmit & Fast Recovery (Tahoe vs Reno)",
                "Quality of Service (QoS) Concepts & Techniques"
              ]
            },
            {
              unitNum: 5,
              title: "Application Layer Protocols & Security",
              lectures: 8,
              topics: [
                "Domain Name System (DNS): Hierarchy, Resource Records, Resolution",
                "World Wide Web (WWW) & Hypertext Transfer Protocol (HTTP 1.1, HTTP/2)",
                "Persistent vs Non-Persistent HTTP & HTTP Request/Response Format",
                "Electronic Mail: Architecture, SMTP, POP3, IMAP, MIME",
                "File Transfer Protocol (FTP): Control and Data Connections",
                "Remote Login: TELNET & Secure Shell (SSH)",
                "Network Management: Simple Network Management Protocol (SNMP)",
                "Data Compression in Networking Applications",
                "Cryptography Basics: Symmetric vs Asymmetric Key Encryption",
                "Digital Signatures, Public Key Infrastructure (PKI), SSL/TLS & HTTPS",
                "Virtual Private Networks (VPN) Concepts"
              ]
            }
          ]
        },
        {
          code: "DEPT_ELEC_3",
          name: "Departmental Elective-III",
          shortName: "Dept Elective III",
          credits: 3,
          type: "elective",
          icon: "layers",
          color: "#4f46e5",
          selectedOption: "BCS-061",
          options: [
            {
              code: "BCS-061",
              name: "Big Data",
              units: [
                {
                  unitNum: 1,
                  title: "Introduction to Big Data",
                  lectures: 6,
                  topics: [
                    "Types of Digital Data (Structured, Semi-Structured, Unstructured)",
                    "History of Big Data Innovation & Big Data Platform Drivers",
                    "Big Data Architecture and Core Characteristics",
                    "The 5 V's of Big Data (Volume, Velocity, Variety, Veracity, Value)",
                    "Big Data Technology Components & Industry Applications",
                    "Big Data Features: Security, Compliance, Auditing & Protection",
                    "Big Data Privacy, Ethics, and Governance",
                    "Challenges of Conventional Relational Systems",
                    "Intelligent Data Analysis, Nature of Data, Analysis vs Reporting",
                    "Modern Data Analytic Tools Ecosystem"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Hadoop & MapReduce Framework",
                  lectures: 8,
                  topics: [
                    "History of Apache Hadoop & Hadoop Ecosystem Overview",
                    "Hadoop Distributed File System (HDFS) Overview",
                    "Hadoop Components, Data Formats & Analyzing Data with Hadoop",
                    "Scaling Out in Hadoop & Hadoop Streaming / Pipes",
                    "MapReduce Framework Fundamentals: Mapper, Reducer, Driver",
                    "Developing MapReduce Applications & Unit Testing with MRUnit",
                    "Anatomy of a MapReduce Job Run (JobTracker/TaskTracker & YARN)",
                    "Failures Handling, Job Scheduling (FIFO, Fair, Capacity)",
                    "Shuffle and Sort Phase Details",
                    "Input Formats, Output Formats & MapReduce Types",
                    "Real-World MapReduce Algorithms & Design Patterns"
                  ]
                },
                {
                  unitNum: 3,
                  title: "HDFS Architecture & Hadoop Environment",
                  lectures: 8,
                  topics: [
                    "Design of HDFS: Concepts, Benefits, and Challenges",
                    "HDFS Block Sizes & Block Abstraction Concept",
                    "Data Replication Factor, Topology & Fault Tolerance",
                    "How HDFS Stores, Reads, and Writes Files (Data Flow)",
                    "Java Interfaces to HDFS & HDFS CLI Commands",
                    "Hadoop Archives & Hadoop I/O: Compression, Serialization, Avro",
                    "Data Ingestion Tools: Apache Flume & Apache Sqoop",
                    "Setting up a Hadoop Cluster: Cluster Specification & Installation",
                    "Hadoop Configuration (core-site, hdfs-site, mapred-site)",
                    "Security in Hadoop & Cluster Administration",
                    "HDFS Monitoring, Benchmarks & Hadoop in the Cloud"
                  ]
                },
                {
                  unitNum: 4,
                  title: "YARN, NoSQL, MongoDB, Spark & Scala",
                  lectures: 9,
                  topics: [
                    "Hadoop 2.0 YARN Architecture: ResourceManager & NodeManager",
                    "YARN Schedulers (Fair Scheduler, Capacity Scheduler)",
                    "Hadoop 2.0 Features: NameNode High Availability & HDFS Federation",
                    "Introduction to NoSQL Databases & CAP Theorem",
                    "MongoDB Introduction: Documents, Collections, Data Types",
                    "MongoDB CRUD Operations & Indexing",
                    "MongoDB Capped Collections",
                    "Apache Spark: Architecture, RDDs (Resilient Distributed Datasets)",
                    "Spark Transformations and Actions",
                    "Anatomy of a Spark Job Run: Jobs, Stages, Tasks",
                    "Running Spark on YARN",
                    "Scala Basics: Classes, Objects, Control Structures, Closures, Inheritance"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Hadoop Ecosystem: Pig, Hive & HBase",
                  lectures: 9,
                  topics: [
                    "Apache Pig: Architecture, Execution Modes (Local, MapReduce)",
                    "Pig vs Traditional Relational Databases",
                    "Grunt Shell, Pig Latin Data Types & Operators (LOAD, FILTER, GROUP)",
                    "User-Defined Functions (UDFs) in Pig",
                    "Apache Hive: Architecture, Metastore, Hive Services, Hive Shell",
                    "HiveQL: Managed vs External Tables, Partitions, Buckets",
                    "Querying, Joins, Aggregations & MapReduce Scripts in Hive",
                    "Apache HBase: Architecture, HBase vs RDBMS, Column Families",
                    "HBase Schema Design, Indexing & ZooKeeper Role in Monitoring",
                    "IBM Big Data Strategy: InfoSphere, BigInsights, Big Sheets, Big SQL"
                  ]
                }
              ]
            },
            {
              code: "BCS-062",
              name: "Augmented & Virtual Reality",
              units: [
                {
                  unitNum: 1,
                  title: "VR Environments & Hardware Technologies",
                  lectures: 8,
                  topics: [
                    "Historical Development of VR & Scientific Milestones",
                    "Real-Time Computer Graphics, Flight Simulation & VR Requirements",
                    "Virtual Environments & Benefits of Virtual Reality",
                    "3D UI Hardware Technologies: Visual Displays (HMD, CAVE)",
                    "Auditory Displays and Spatial Audio Generation",
                    "Haptic Displays: Force Feedback and Tactile Interfaces",
                    "Choosing Output Devices for 3D User Interfaces"
                  ]
                },
                {
                  unitNum: 2,
                  title: "3D UI Input Hardware",
                  lectures: 8,
                  topics: [
                    "Input Device Characteristics & Degrees of Freedom (DoF)",
                    "Desktop Input Devices & 3D Mice",
                    "Tracking Technologies: Optical, Magnetic, Acoustic, Inertial",
                    "Special Purpose Input Devices & Direct Human Input (Gloves, Gestures)",
                    "Home-Brewed Input Devices & Device Selection Criteria"
                  ]
                },
                {
                  unitNum: 3,
                  title: "VR Software Technologies",
                  lectures: 8,
                  topics: [
                    "Database: World Space, World Coordinates, World Environment",
                    "Objects: Geometry, Position/Orientation, Hierarchy, Bounding Volumes",
                    "VR Environment: VR Database, Tessellated Data, Levels of Detail (LODs)",
                    "Cullers and Occluders, Scene Graphs, Lights and Cameras",
                    "Interaction Scripts, Feedback, 3D Graphical User Interfaces",
                    "Room/Stage/Area Descriptions & World Authoring/Playback",
                    "VR Toolkits (Unity, Unreal, OpenVR) & Market Overview"
                  ]
                },
                {
                  unitNum: 4,
                  title: "3D Interaction & UI Design",
                  lectures: 8,
                  topics: [
                    "3D Manipulation Tasks (Selection, Positioning, Rotation)",
                    "3D Travel Tasks: Wayfinding, User-Centered & Environmental Aids",
                    "System Control Techniques: Graphical Menus, Voice, Gestures",
                    "Multimodal System Control Techniques & Mixing Control Methods",
                    "Symbolic Input Tasks & Techniques beyond Text and Numbers",
                    "Strategies for Designing and Evaluating 3D User Interfaces",
                    "VR Applications: Engineering, Architecture, Education, Medicine, Training"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Augmented & Mixed Reality",
                  lectures: 8,
                  topics: [
                    "Taxonomy, Technology and Features of Augmented Reality",
                    "Key Differences Between AR and VR & Challenges of AR",
                    "AR Systems, Optics, and Functionality",
                    "Augmented Reality Tracking Methods: Marker-Based vs Marker-Less Tracking",
                    "SLAM (Simultaneous Localization and Mapping) in AR",
                    "Wireless Displays & Mobile Projection Interfaces",
                    "Enhancing Interactivity & Evaluating Augmented Reality Systems"
                  ]
                }
              ]
            },
            {
              code: "BCS-063",
              name: "Blockchain Architecture Design",
              units: [
                {
                  unitNum: 1,
                  title: "Blockchain Primitives & Crypto Basics",
                  lectures: 8,
                  topics: [
                    "Digital Money Evolution to Distributed Ledgers",
                    "Design Primitives: Protocols, Security, Consensus, Permissions, Privacy",
                    "Cryptographic Primitives: Cryptographic Hashes (SHA-256)",
                    "Public Key Cryptography & Digital Signatures",
                    "Hash Chains to Blockchain Data Structure",
                    "Basic Consensus Mechanisms Overview"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Consensus Protocols & Permissioned Ledgers",
                  lectures: 8,
                  topics: [
                    "Requirements for Consensus Protocols in Distributed Systems",
                    "Proof of Work (PoW) & Mining Dynamics",
                    "Scalability Aspects of Public Blockchain Consensus",
                    "Permissioned Blockchains: Design Goals and Threat Models",
                    "Consensus Protocols for Permissioned Blockchains (PBFT, Raft)"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Hyperledger Fabric & Smart Contracts",
                  lectures: 8,
                  topics: [
                    "Hyperledger Fabric Architecture: Execute-Order-Validate Paradigm",
                    "Fabric Components: Peers (Endorsing, Committing), Orderers, CA",
                    "Chaincode (Smart Contract) Design and Implementation",
                    "Hyperledger Fabric SDK and Front-End Client Integration",
                    "Hyperledger Composer Tool Overview"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Enterprise Blockchain Use Cases",
                  lectures: 8,
                  topics: [
                    "Financial Software & Systems (FSS): Cross-Border Settlements",
                    "FSS: Know Your Customer (KYC) Decentralized Registries",
                    "FSS: Capital Markets, Securities & Insurance Automation",
                    "Trade and Supply Chain: Provenance of Goods & Visibility",
                    "Trade Finance & Invoice Management Discounting"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Government Use Cases & Blockchain Security",
                  lectures: 8,
                  topics: [
                    "Government Records: Digital Identity & Land Registry Records",
                    "Public Distribution System (PDS) & Social Welfare Transparency",
                    "Blockchain Cryptography: Zero-Knowledge Proofs (ZKP)",
                    "Privacy and Confidentiality on Blockchain",
                    "Smart Contract Vulnerabilities & Security Auditing"
                  ]
                }
              ]
            },
            {
              code: "BCS-064",
              name: "Data Compression",
              units: [
                {
                  unitNum: 1,
                  title: "Information Theory & Preliminaries",
                  lectures: 8,
                  topics: [
                    "Lossless vs Lossy Compression Concepts",
                    "Measures of Compression Performance (Compression Ratio, Distortion)",
                    "Information Theory Preliminaries: Self-Information & Entropy",
                    "Physical Models, Probability Models, Markov Models",
                    "Composite Source Models",
                    "Uniquely Decodable Codes and Prefix Codes (Kraft-McMillan Inequality)"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Huffman Coding & Variations",
                  lectures: 8,
                  topics: [
                    "The Classic Huffman Coding Algorithm & Optimality Proof",
                    "Minimum Variance Huffman Codes",
                    "Adaptive Huffman Coding: Update, Encoding, Decoding Procedures",
                    "Golomb Codes, Rice Codes, and Tunstall Codes",
                    "Applications: Lossless Image, Text, and Audio Compression"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Dictionary & Predictive Techniques",
                  lectures: 8,
                  topics: [
                    "Static Dictionary Coding: Diagram Coding",
                    "Adaptive Dictionary Techniques: LZ77 Sliding Window Approach",
                    "Adaptive Dictionary Techniques: LZ78 & LZW Approach",
                    "Applications: UNIX compress, GIF Image Format, V.42bis Modem Compression",
                    "Predictive Coding: Prediction with Partial Match (PPM)",
                    "The Escape Symbol, Context Length & Exclusion Principle",
                    "Burrows-Wheeler Transform (BWT) & Move-to-Front (MTF) Coding",
                    "CALIC, JPEG-LS & Facsimile Encoding (Run-Length Standards)"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Quantization Techniques",
                  lectures: 8,
                  topics: [
                    "Distortion Criteria & Mean Squared Error (MSE)",
                    "The Scalar Quantization Problem",
                    "Uniform Quantizer Design & Mid-Tread vs Mid-Riser",
                    "Adaptive Quantization Schemes",
                    "Non-Uniform Quantization & Companding (A-Law, Mu-Law)"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Vector Quantization",
                  lectures: 8,
                  topics: [
                    "Vector Quantization Concept & Advantages over Scalar Quantization",
                    "The Linde-Buzo-Gray (LBG) Algorithm",
                    "Codebook Design, Training Vectors & Voronoi Cells",
                    "Tree-Structured Vector Quantizers (TSVQ)",
                    "Structured Vector Quantizers (Lattice VQ)"
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "OPEN_ELEC_1",
          name: "Open Elective-I",
          shortName: "Open Elective I",
          credits: 3,
          type: "elective",
          icon: "book",
          color: "#0d9488",
          selectedOption: "BOE-068",
          options: [
            {
              code: "BOE-067",
              name: "Basics of Database Management System",
              units: [
                {
                  unitNum: 1,
                  title: "DBMS Fundamentals & ER Model",
                  lectures: 8,
                  topics: [
                    "DBMS Overview: File System vs DBMS",
                    "Concepts and Architecture, Levels of Data Abstraction",
                    "Data Models, Schema and Instances, Data Independence",
                    "DDL, DML, Overall Structure, Storage & Transaction Management",
                    "ER Modeling: Notations, Mapping Constraints, Keys",
                    "Generalization, Aggregation, Reduction to Tables"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Relational Model & Normalization",
                  lectures: 8,
                  topics: [
                    "Relational Model Terminology: Domains, Attributes, Tuples",
                    "Integrity Constraints: Entity, Referential, Key Constraints",
                    "Relational Algebra Operations",
                    "Relational Calculus (Tuple and Domain)",
                    "Functional Dependencies & Normal Forms (1NF, 2NF, 3NF, BCNF)",
                    "Lossless Join Decomposition & Normalization"
                  ]
                },
                {
                  unitNum: 3,
                  title: "SQL & PL/SQL Basics",
                  lectures: 8,
                  topics: [
                    "SQL Commands: DDL, DML, DCL, TCL",
                    "Table Creation, Alteration, Constraints, Views, Indexes",
                    "Queries, Subqueries, Aggregate Functions",
                    "Joins, Unions, Intersection, Minus",
                    "PL/SQL Features, Syntax, Cursors, Stored Procedures and Triggers"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Transaction & Concurrency Control",
                  lectures: 8,
                  topics: [
                    "Transaction Concepts & ACID Properties",
                    "Serializability of Schedules & Recoverability",
                    "Two-Phase Commit Protocol, Checkpoints, Deadlock Handling",
                    "Concurrency Control: Locking Techniques & Timestamp Ordering",
                    "Validation-Based Protocols & Multi-Version Schemes"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Database Security & Trends",
                  lectures: 8,
                  topics: [
                    "Database Security: Authorization, Authentication, Privileges",
                    "Backup & Recovery Techniques",
                    "Architectures: Centralized, Client-Server, Distributed",
                    "Object-Oriented & XML Databases",
                    "Data Warehousing, Data Mining & Big Data Trends"
                  ]
                }
              ]
            },
            {
              code: "BOE-068",
              name: "Software Project Management",
              units: [
                {
                  unitNum: 1,
                  title: "Project Evaluation & Planning",
                  lectures: 8,
                  topics: [
                    "Importance of SPM, Activities, Methodologies",
                    "Categorization of Software Projects & Setting Objectives",
                    "Management Principles & Management Control",
                    "Project Portfolio Management & Cost-Benefit Analysis",
                    "Risk Evaluation & Strategic Program Management",
                    "Stepwise Project Planning Methodology"
                  ]
                },
                {
                  unitNum: 2,
                  title: "Project Life Cycle & Effort Estimation",
                  lectures: 8,
                  topics: [
                    "Software Process & Process Models Selection",
                    "Rapid Application Development (RAD) & Agile Methods",
                    "Extreme Programming (XP) & Dynamic System Development Method",
                    "Software Estimation Basics: Effort and Cost Estimation",
                    "COSMIC Full Function Points Method",
                    "COCOMO II: A Parametric Productivity Model"
                  ]
                },
                {
                  unitNum: 3,
                  title: "Activity Planning & Risk Management",
                  lectures: 8,
                  topics: [
                    "Objectives of Activity Planning & Project Schedules",
                    "Sequencing and Scheduling Activities",
                    "Network Planning Models: PERT and CPM",
                    "Forward Pass & Backward Pass Techniques for Critical Path",
                    "Risk Identification, Assessment, and Risk Planning",
                    "Monte Carlo Simulation & Resource Allocation Models"
                  ]
                },
                {
                  unitNum: 4,
                  title: "Project Monitoring & Control",
                  lectures: 8,
                  topics: [
                    "Framework for Management and Control",
                    "Collection of Data & Visualizing Progress",
                    "Cost Monitoring & Earned Value Analysis (EVA)",
                    "Prioritizing Monitoring & Project Tracking",
                    "Change Control & Software Configuration Management (SCM)",
                    "Managing Contracts & Contract Management"
                  ]
                },
                {
                  unitNum: 5,
                  title: "Staffing in Software Projects",
                  lectures: 8,
                  topics: [
                    "Managing People & Organizational Behavior",
                    "Staff Selection Methods & Motivation Theories",
                    "Oldham-Hackman Job Characteristics Model",
                    "Stress, Health and Safety in IT Projects",
                    "Working in Teams & Decision-Making Processes",
                    "Dispersed and Virtual Teams Management",
                    "Communication Plans & Leadership Styles"
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "BCS651",
          name: "Software Engineering Lab",
          shortName: "Software Engg Lab",
          credits: 1,
          type: "lab",
          icon: "terminal",
          color: "#059669",
          experiments: [
            "1. Prepare SRS document in line with IEEE recommended standards",
            "2. Draw Use Case Diagram specifying actor roles, preconditions, postconditions",
            "3. Draw Activity Diagram for key functional workflows",
            "4. Class Modeling: Identify classes, classify into weak/strong & draw Class Diagram",
            "5. Draw Sequence Diagrams for two complex interaction scenarios",
            "6. Draw Collaboration Diagrams depicting message routing",
            "7. Draw Statechart / State Machine Diagrams",
            "8. Draw Component Diagram showing architectural modules",
            "9. Perform Forward Engineering in Java (Model to Code conversion)",
            "10. Perform Reverse Engineering in Java (Code to Model conversion)",
            "11. Draw Deployment Diagram for the production deployment environment",
            "Virtual Lab Mapping: Requirements Identification & Project Metrics Estimation",
            "Virtual Lab Mapping: UML Modeling, ER Modeling & Domain Classes extraction",
            "Virtual Lab Mapping: Statechart, Data Flow Diagrams & Test Coverage Suites design"
          ]
        },
        {
          code: "BCS652",
          name: "Compiler Design Lab",
          shortName: "Compiler Lab",
          credits: 1,
          type: "lab",
          icon: "code",
          color: "#ea580c",
          experiments: [
            "1. Design lexical analyzer in C to eliminate redundant spaces, tabs, and comments",
            "2. Implement Lexical Analyzer using LEX tool",
            "3. YACC: Validate arithmetic expressions using +, -, *, / operators",
            "3. YACC: Recognize valid variable identifiers (letters followed by digits)",
            "3. YACC: Implementation of Desktop Calculator using LEX and YACC",
            "3. YACC: Convert BNF rules to YACC to generate Abstract Syntax Tree (AST)",
            "4. C program to find epsilon-closure of all states of an NFA with epsilon transitions",
            "5. C program to convert NFA with epsilon transitions to NFA without epsilon",
            "6. C program to convert NFA to DFA",
            "7. C program to minimize any given DFA using state equivalence partitioning",
            "8. Develop an Operator Precedence Parser for a grammar",
            "9. Program to compute FIRST and FOLLOW sets of a given grammar",
            "10. Construct a Recursive Descent Parser for an arithmetic expression",
            "11. Construct a Shift-Reduce Parser for a given grammar",
            "12. Code Optimization: Write program to perform Loop Unrolling",
            "13. Code Optimization: Write program to perform Constant Propagation",
            "14. Implement Intermediate Code Generation (Three-Address Code) for expressions",
            "15. Compiler Back-End: Convert Three-Address Code to 8086 Assembly instructions (MOV, ADD, SUB, JMP)"
          ]
        },
        {
          code: "BCS653",
          name: "Computer Networks Lab",
          shortName: "Networks Lab",
          credits: 1,
          type: "lab",
          icon: "network",
          color: "#2563eb",
          experiments: [
            "1. Implement Stop-and-Wait and Sliding Window Protocols in C/Java",
            "2. Socket Programming: Client-Server communication model setup",
            "3. Simulation of ARP / RARP protocol packet exchange",
            "4. Simulation of ICMP PING and TRACEROUTE utilities",
            "5. Create a TCP Socket program for HTTP web page upload and download",
            "6. Remote Procedure Call (RPC) implementation program",
            "7. Implementation of Subnetting & IP Address calculation program",
            "8. TCP Socket Applications: Echo client-server, Chat program, File transfer",
            "9. UDP Socket Applications: DNS resolver simulation, SNMP, File transfer",
            "10. Simulation of Congestion Control Algorithms using Network Simulator (NS2/NS3)",
            "11. Case Study & Implementation of Routing Algorithms: Link State, Flooding, Distance Vector",
            "12. Hardware Lab: RJ-45 connector crimping, CAT-6 color code wiring & cable testing",
            "13. Configuration of Router, Hub, and Switch using Cisco Packet Tracer",
            "14. Network diagnostics utilities: ping, traceroute, nslookup, arp, telnet, ftp",
            "15. Packet capture and network protocol analysis using Wireshark and tcpdump",
            "16. Topology simulation using Cisco Packet Tracer / NetSim / Mininet",
            "17. Concurrent and Iterative Socket Server programming (Date & Time, Echo)"
          ]
        },
        {
          code: "BNC601/602",
          name: "Constitution of India / Essence of Indian Knowledge",
          shortName: "Constitution / ITK",
          credits: 0,
          type: "audit",
          icon: "book-open",
          color: "#475569",
          units: [
            {
              unitNum: 1,
              title: "Indian Knowledge Systems & Governance",
              topics: [
                "Philosophical Foundations of Indian Knowledge Systems",
                "Traditional Science, Mathematics, and Technology",
                "Ethics, Values, and Environmental Consciousness in Ancient India",
                "Constitution Governance and Indian Societal Framework"
              ]
            }
          ]
        }
      ]
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = syllabusData;
}
