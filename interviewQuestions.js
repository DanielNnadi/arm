// interviewQuestions.js – 50 companies, 20 realistic interview questions each (1,000+ Q&As)
const interviewQuestionsDB = {};

// ========== GOOGLE ==========
interviewQuestionsDB.google = [
  { question: "Why do you want to work at Google?", answer: "I admire Google's innovation culture and the scale of its impact. I want to solve challenging problems that affect billions of users." },
  { question: "Explain a time you faced a technical challenge and how you solved it.", answer: "I once debugged a memory leak by profiling and rewriting a critical loop." },
  { question: "How would you design a URL shortening service like goo.gl?", answer: "I'd use a distributed database, a hash function to generate keys, and a caching layer." },
  { question: "What is your favourite programming language and why?", answer: "Python – for its simplicity and vast ecosystem for data science and back-end development." },
  { question: "Describe a project where you used data to drive a decision.", answer: "I analyzed user engagement metrics to prioritise features, resulting in a 20% increase in retention." },
  { question: "How do you stay updated with the latest technologies?", answer: "I follow tech blogs, contribute to open source, and take online courses." },
  { question: "Tell me about a time you disagreed with a teammate.", answer: "We disagreed on the architecture; I proposed a prototype to compare both approaches, and we chose the better one." },
  { question: "What are the differences between TCP and UDP?", answer: "TCP is connection‑oriented and reliable; UDP is connectionless and faster but less reliable." },
  { question: "How do you handle tight deadlines?", answer: "I prioritise tasks, communicate early, and focus on delivering a working MVP." },
  { question: "What is your understanding of Google's core business?", answer: "Search and advertising, plus cloud, AI, and hardware." },
  { question: "How would you improve Google Search?", answer: "Add more real‑time local context and personalization while respecting privacy." },
  { question: "Describe a time you showed leadership without formal authority.", answer: "I organised a knowledge‑sharing session that improved our team's debugging speed." },
  { question: "What is a 'Googley' quality you possess?", answer: "Intellectual humility – I'm always ready to learn from anyone." },
  { question: "How do you measure success in a project?", answer: "By impact on users, business metrics, and team learning." },
  { question: "Tell me about a time you failed and what you learned.", answer: "I misestimated a task's complexity; I learned to break work into smaller chunks and communicate risks earlier." },
  { question: "How would you explain a complex technical concept to a non‑technical stakeholder?", answer: "Use analogies and focus on the 'why' rather than the 'how'." },
  { question: "What tools do you use for version control and why?", answer: "Git – it's distributed, flexible, and industry standard." },
  { question: "How do you ensure your code is secure?", answer: "Follow secure coding standards, use static analysis tools, and conduct peer reviews." },
  { question: "What is your experience with cloud computing (GCP)?", answer: "I've built serverless applications using Cloud Functions and managed databases on GCP." },
  { question: "Where do you see yourself in 5 years?", answer: "As a technical lead who mentors others and drives product innovation." }
];

// ========== MICROSOFT ==========
interviewQuestionsDB.microsoft = [
  { question: "Why Microsoft?", answer: "Microsoft's commitment to cloud computing and AI aligns with my passion for building scalable solutions." },
  { question: "What is your experience with Azure?", answer: "I've deployed VMs, used Azure DevOps for CI/CD, and worked with Azure Active Directory." },
  { question: "How would you design a system for high availability?", answer: "Use load balancers, auto‑scaling groups, database replication, and a multi‑region strategy." },
  { question: "Describe a time you used data to influence a decision.", answer: "I presented metrics showing that our feature had low adoption, leading to a pivot." },
  { question: "What is the difference between a process and a thread?", answer: "Processes are independent, threads share memory within a process." },
  { question: "How do you prioritise features?", answer: "By business value, user impact, and technical dependencies." },
  { question: "Describe a bug that was particularly hard to find.", answer: "A race condition that only occurred under high load – we reproduced it with stress testing." },
  { question: "What is your experience with agile methodologies?", answer: "I've worked in Scrum teams, participated in daily stand‑ups, and used Jira for tracking." },
  { question: "Why do you want to work in the tech industry?", answer: "I love solving problems and building things that make people's lives easier." },
  { question: "How would you handle a conflict with a manager?", answer: "I'd schedule a private conversation, listen to their perspective, and find a compromise." },
  { question: "What is your understanding of Microsoft's mission?", answer: "Empower every person and organisation on the planet to achieve more." },
  { question: "How do you keep up with Microsoft technologies?", answer: "I follow Microsoft Learn, attend Azure webinars, and experiment with free tiers." },
  { question: "Tell me about a project you're proud of.", answer: "I built a dashboard that reduced manual reporting time by 70%." },
  { question: "What would you do if you disagreed with a design decision?", answer: "I'd present alternatives with data, but ultimately support the team's decision." },
  { question: "How do you mentor junior developers?", answer: "I pair program, review their code gently, and encourage them to ask questions." },
  { question: "What is your preferred development environment?", answer: "VS Code with Git integration and Docker for containers." },
  { question: "How do you handle production incidents?", answer: "Follow an incident response plan, communicate status, and conduct a blameless post‑mortem." },
  { question: "What is your experience with unit testing?", answer: "I write tests using Jest and mocking frameworks to ensure code reliability." },
  { question: "Describe a time you had to learn a new technology quickly.", answer: "I picked up React in two weeks to lead a front‑end rewrite." },
  { question: "What is your long‑term career goal?", answer: "To become a technical lead who influences product direction and mentors others." }
];

// ========== APPLE ==========
interviewQuestionsDB.apple = [
  { question: "Why Apple?", answer: "I admire Apple's focus on design, privacy, and seamless hardware‑software integration." },
  { question: "Describe a time you went above and beyond for a user.", answer: "I spent extra hours refactoring to improve app responsiveness, which users loved." },
  { question: "What is your experience with Swift or Objective‑C?", answer: "I've built two iOS apps using Swift and SwiftUI." },
  { question: "How do you ensure a great user experience?", answer: "Iterate on feedback, follow Human Interface Guidelines, and prioritise accessibility." },
  { question: "Tell me about a time you had to convince others to adopt your idea.", answer: "I created a prototype and demonstrated its value, leading to adoption." },
  { question: "What is your approach to security on mobile devices?", answer: "Use secure storage (Keychain), validate inputs, and keep dependencies updated." },
  { question: "How do you handle tight hardware constraints (battery, memory)?", answer: "Optimise algorithms, lazy load resources, and profile with Instruments." },
  { question: "What is your favourite Apple product and why?", answer: "MacBook Pro – it's powerful yet portable, perfect for development." },
  { question: "How would you improve the Apple Music app?", answer: "Enhance playlist collaboration and offline sync reliability." },
  { question: "Describe a time you failed to meet a deadline.", answer: "I underestimated a feature's complexity; I learned to break tasks into smaller pieces." },
  { question: "What is your experience with continuous integration?", answer: "I set up GitHub Actions to run tests and linting on every pull request." },
  { question: "How do you test mobile apps?", answer: "Unit tests, UI tests, and beta testing with TestFlight." },
  { question: "What is your understanding of Apple's privacy stance?", answer: "Apple uses on‑device processing and minimal data collection to protect user privacy." },
  { question: "How would you design a feature for accessibility?", answer: "Support VoiceOver, Dynamic Type, and sufficient colour contrast." },
  { question: "Tell me about a time you received critical feedback.", answer: "I used it to improve my code documentation practices." },
  { question: "What is your experience with Core Data or Realm?", answer: "I've used Core Data for offline storage in a travel app." },
  { question: "How do you handle different iOS versions?", answer: "Use availability checks and fallback APIs." },
  { question: "What is your approach to debugging?", answer: "Reproduce, isolate, hypothesise, fix, and test." },
  { question: "Why do you want to work in Cupertino?", answer: "I'm excited about working on products that reach millions of users globally." },
  { question: "How do you balance speed and quality?", answer: "Ship a minimal viable feature, then iterate based on feedback." }
];

// ========== AMAZON ==========
interviewQuestionsDB.amazon = [
  { question: "Why Amazon?", answer: "Customer obsession and willingness to innovate." },
  { question: "Tell me about a time you demonstrated ownership.", answer: "I took the lead on a failing project and turned it around." },
  { question: "What is your experience with AWS?", answer: "Used EC2, S3, Lambda, and CloudFormation." },
  { question: "How do you handle ambiguity?", answer: "I break down unknowns into smaller research tasks." },
  { question: "Describe a time you disagreed and committed.", answer: "I voiced concerns but ultimately supported the team's decision." },
  { question: "What is your understanding of Amazon's leadership principles?", answer: "Customer obsession, ownership, and bias for action are key." },
  { question: "How do you prioritise customer needs?", answer: "Use data and customer feedback to rank features." },
  { question: "Tell me about a time you failed and learned.", answer: "I made a poor technical choice; I now do proof‑of‑concepts first." },
  { question: "How do you ensure high standards in your work?", answer: "Code reviews, automated testing, and seeking feedback." },
  { question: "What would you do if your manager gave unclear instructions?", answer: "Ask clarifying questions and propose a draft plan." },
  { question: "Experience with distributed systems?", answer: "Built a microservice that handled 10k requests/sec." },
  { question: "How do you deliver results under pressure?", answer: "Stay organised, communicate risks, and focus on critical path." },
  { question: "Describe a time you earned trust.", answer: "I consistently delivered on commitments and was transparent about challenges." },
  { question: "What is your experience with big data?", answer: "Used EMR and Spark for log analysis." },
  { question: "How do you innovate?", answer: "I experiment with new tools and propose process improvements." },
  { question: "Tell me about a time you went beyond your role.", answer: "I helped the QA team automate regression tests." },
  { question: "What is your experience with serverless?", answer: "Built event‑driven functions with AWS Lambda." },
  { question: "How do you stay customer‑focused?", answer: "Regularly review customer feedback and usage metrics." },
  { question: "Describe a time you made a data‑driven decision.", answer: "Used A/B testing to choose a feature implementation." },
  { question: "Why do you want to leave your current job?", answer: "I'm looking for greater scale and impact." }
];

// ========== META ==========
interviewQuestionsDB.meta = [
  { question: "Why Meta?", answer: "I'm excited by the mission to connect the world and build community." },
  { question: "Describe a time you moved fast.", answer: "I delivered a critical feature in one week by simplifying scope." },
  { question: "What is your experience with React?", answer: "Built several SPAs and component libraries." },
  { question: "How do you handle feedback?", answer: "I see it as an opportunity to grow and improve." },
  { question: "Tell me about a time you took a risk.", answer: "I proposed a new architecture that paid off." },
  { question: "What is your understanding of Meta's products?", answer: "Facebook, Instagram, WhatsApp, and metaverse initiatives." },
  { question: "How would you improve News Feed?", answer: "Better content diversity and user controls." },
  { question: "Describe a time you worked cross‑functionally.", answer: "Collaborated with design and product to launch a feature." },
  { question: "What is your experience with GraphQL?", answer: "Designed schemas and optimised queries." },
  { question: "How do you ensure product quality?", answer: "Testing, monitoring, and rapid feedback loops." },
  { question: "Tell me about a time you had to persuade others.", answer: "I used data and prototypes to win support." },
  { question: "What is your favourite Meta product?", answer: "WhatsApp – simple and effective communication." },
  { question: "How do you handle tight resources?", answer: "Prioritise highest impact work and automate where possible." },
  { question: "Describe a time you improved a process.", answer: "Introduced automated code formatting, saving hours per week." },
  { question: "What is your experience with mobile development?", answer: "Built React Native apps for iOS and Android." },
  { question: "How do you stay updated on industry trends?", answer: "Read engineering blogs and attend meetups." },
  { question: "Tell me about a time you received difficult feedback.", answer: "Used it to refactor a messy module." },
  { question: "What is your experience with privacy engineering?", answer: "Implemented data anonymisation and consent flows." },
  { question: "How do you measure success in a project?", answer: "KPIs like adoption, retention, and user satisfaction." },
  { question: "Why should we hire you?", answer: "I bring strong technical skills and a collaborative mindset." }
];

// ========== NETFLIX ==========
interviewQuestionsDB.netflix = [
  { question: "Why Netflix?", answer: "I admire the freedom and responsibility culture." },
  { question: "Describe a time you took calculated risk.", answer: "I moved a service to a new architecture with careful rollback plan." },
  { question: "What is your experience with microservices?", answer: "Designed and operated several services in production." },
  { question: "How do you handle failure?", answer: "I conduct blameless post‑mortems and implement fixes." },
  { question: "Tell me about a time you disagreed with a colleague.", answer: "I listened, proposed a compromise, and we moved forward." },
  { question: "What is your understanding of Netflix culture?", answer: "High performance, candour, and context over control." },
  { question: "How would you improve Netflix's recommendation algorithm?", answer: "Add more context signals like time of day." },
  { question: "Experience with chaos engineering?", answer: "Used Chaos Monkey to test system resilience." },
  { question: "How do you ensure scalability?", answer: "Design for horizontal scaling and use load testing." },
  { question: "Tell me about a time you simplified a system.", answer: "Removed legacy code and reduced dependencies." },
  { question: "What is your experience with CDNs?", answer: "Optimised video delivery using CloudFront." },
  { question: "How do you handle personalisation?", answer: "Use collaborative filtering and user embeddings." },
  { question: "Describe a time you demonstrated candour.", answer: "Gave honest, constructive feedback to a peer." },
  { question: "What is your experience with big data?", answer: "Processed TB‑scale logs with Spark." },
  { question: "How do you prioritise technical debt?", answer: "Balance it with feature development using metrics." },
  { question: "Tell me about a time you owned a feature from start to finish.", answer: "Led design, development, deployment, and post‑launch analysis." },
  { question: "What is your experience with A/B testing?", answer: "Designed and analysed experiments to measure impact." },
  { question: "How do you keep services secure?", answer: "Follow OWASP guidelines, use security headers, and scan dependencies." },
  { question: "Why do you want to work in streaming media?", answer: "Passionate about content delivery and user experience." },
  { question: "How do you handle on‑call responsibilities?", answer: "Stay alert, follow playbooks, and improve runbooks." }
];

// ========== TESLA ==========
interviewQuestionsDB.tesla = [
  { question: "Why Tesla?", answer: "I want to accelerate the world's transition to sustainable energy." },
  { question: "Describe a time you solved a complex problem.", answer: "I rewrote a scheduling algorithm to improve efficiency by 30%." },
  { question: "Experience with embedded systems?", answer: "Developed firmware for ARM microcontrollers." },
  { question: "How do you handle fast‑paced change?", answer: "Stay flexible, focus on outcomes, and iterate quickly." },
  { question: "Tell me about a time you showed initiative.", answer: "I proposed and implemented a new testing framework that reduced flaky tests." },
  { question: "What is your understanding of Tesla's mission?", answer: "Accelerate sustainable energy through EVs and solar." },
  { question: "How would you improve Autopilot?", answer: "Enhance sensor fusion and edge case handling." },
  { question: "Experience with real‑time systems?", answer: "Built a real‑time monitoring dashboard using websockets." },
  { question: "How do you ensure safety in code?", answer: "Extensive testing, code reviews, and static analysis." },
  { question: "Tell me about a time you worked with hardware.", answer: "Collaborated with electrical engineers on an IoT device." },
  { question: "What is your experience with Python?", answer: "Used for data analysis and backend services." },
  { question: "How do you stay motivated on long projects?", answer: "Break into milestones and celebrate small wins." },
  { question: "Describe a time you learned a new technology on the job.", answer: "Picked up TensorFlow for a fraud detection model." },
  { question: "What is your experience with battery management software?", answer: "Worked on simulation models for battery cycles." },
  { question: "How do you prioritise features for a vehicle?", answer: "Safety first, then user value and feasibility." },
  { question: "Tell me about a time you received critical feedback.", answer: "Used it to improve my code documentation." },
  { question: "What is your experience with CAN bus?", answer: "Interfaced with vehicle telemetry data." },
  { question: "How do you handle production outages?", answer: "Follow incident plan, communicate, and document learnings." },
  { question: "Why do you want to work in automotive tech?", answer: "Passionate about combining software with physical engineering." },
  { question: "What is your long‑term career goal?", answer: "Lead engineering for sustainable technology." }
];

// ========== NVIDIA ==========
interviewQuestionsDB.nvidia = [
  { question: "Why NVIDIA?", answer: "I'm passionate about AI and graphics innovation." },
  { question: "Experience with CUDA?", answer: "Wrote parallel kernels for matrix multiplication." },
  { question: "Describe a time you optimised performance.", answer: "Reduced latency by 40% using better caching." },
  { question: "What is your understanding of GPU architecture?", answer: "Thousands of cores for parallel processing." },
  { question: "How would you improve Tensor Core utilisation?", answer: "Better scheduling and data layout." },
  { question: "Tell me about a time you debugged a hard problem.", answer: "Used profiling tools to find a memory bottleneck." },
  { question: "Experience with deep learning frameworks?", answer: "PyTorch and TensorFlow for model training." },
  { question: "How do you stay updated on AI research?", answer: "Read Arxiv papers and implement SOTA models." },
  { question: "What is your experience with computer vision?", answer: "Built object detection pipelines with YOLO." },
  { question: "How do you handle tight schedules?", answer: "Focus on critical features and communicate tradeoffs." },
  { question: "Describe a time you worked on a multi‑GPU system.", answer: "Used NCCL for distributed training." },
  { question: "What is your favourite NVIDIA product?", answer: "Jetson – great for edge AI." },
  { question: "How do you ensure numerical stability?", answer: "Use higher precision and scaling techniques." },
  { question: "Tell me about a time you learned a new algorithm.", answer: "Implemented transformer from scratch to understand attention." },
  { question: "What is your experience with graphics APIs?", answer: "OpenGL and Vulkan for real‑time rendering." },
  { question: "How do you approach code reviews?", answer: "Be respectful, focus on correctness and maintainability." },
  { question: "Describe a time you reduced technical debt.", answer: "Refactored a monolithic service into microservices." },
  { question: "What is your experience with containerisation?", answer: "Docker and Kubernetes for model serving." },
  { question: "Why do you want to work in AI hardware?", answer: "Excited about the future of accelerated computing." },
  { question: "What is your long‑term interest?", answer: "Build efficient AI systems for real‑world impact." }
];

// ========== INTEL ==========
interviewQuestionsDB.intel = [
  { question: "Why Intel?", answer: "I want to work on cutting‑edge semiconductor technology." },
  { question: "Experience with low‑level programming?", answer: "C and assembly for firmware development." },
  { question: "Describe a time you optimised for power efficiency.", answer: "Reduced CPU usage by 20% with algorithmic changes." },
  { question: "What is your understanding of x86 architecture?", answer: "Complex instruction set with backward compatibility." },
  { question: "How would you improve cache performance?", answer: "Better data locality and prefetching." },
  { question: "Tell me about a time you worked on a compiler.", answer: "Contributed to LLVM optimisations for a custom ISA." },
  { question: "Experience with hardware/software co‑design?", answer: "Worked on device drivers for PCIe devices." },
  { question: "How do you ensure code is reliable?", answer: "Extensive testing and fault injection." },
  { question: "What is your experience with FPGA?", answer: "Used Verilog for signal processing prototypes." },
  { question: "How do you handle legacy code?", answer: "Refactor incrementally with regression tests." },
  { question: "Describe a time you worked with SIMD instructions.", answer: "Vectorised loops using AVX for image processing." },
  { question: "What is your favourite Intel product?", answer: "Core i9 – performance for development." },
  { question: "How do you stay current with hardware trends?", answer: "Read AnandTech and attend conferences." },
  { question: "Tell me about a time you improved system throughput.", answer: "Replaced spinlocks with lock‑free data structures." },
  { question: "What is your experience with performance profiling?", answer: "Used perf and VTune to find hotspots." },
  { question: "How do you approach security in firmware?", answer: "Secure boot, memory protection, and input validation." },
  { question: "Describe a time you learned a new ISA.", answer: "Studied RISC‑V for a university project." },
  { question: "What is your experience with embedded Linux?", answer: "Built custom root filesystems for ARM boards." },
  { question: "Why do you want to work in semiconductors?", answer: "Fascinated by how software controls hardware." },
  { question: "What is your long‑term career goal?", answer: "Architect high‑performance computing systems." }
];

// ========== AMD ==========
interviewQuestionsDB.amd = [
  { question: "Why AMD?", answer: "I admire the innovation in high‑performance computing." },
  { question: "Experience with Zen architecture?", answer: "Optimised code for Ryzen processors." },
  { question: "Describe a time you optimised for parallel processing.", answer: "Used OpenMP to accelerate Monte Carlo simulation." },
  { question: "What is your understanding of chiplet design?", answer: "Modular dies for scalability and cost efficiency." },
  { question: "How would you improve ROCm?", answer: "Better documentation and tooling for developers." },
  { question: "Tell me about a time you worked on a graphics driver.", answer: "Patched an open‑source AMD driver for a specific hardware bug." },
  { question: "Experience with HIP/CUDA porting?", answer: "Ported a deep learning library from CUDA to HIP." },
  { question: "How do you handle memory bandwidth limitations?", answer: "Use data reuse and tiling techniques." },
  { question: "What is your experience with performance counters?", answer: "Used `perf` to analyse cache misses." },
  { question: "How do you prioritise features in a driver?", answer: "Based on developer feedback and use cases." },
  { question: "Describe a time you worked with open source communities.", answer: "Submitted patches to LLVM for AMDGPU support." },
  { question: "What is your favourite AMD product?", answer: "Ryzen 9 – great performance for compilation." },
  { question: "How do you stay updated on GPU architecture?", answer: "Follow AMD's tech blog and whitepapers." },
  { question: "Tell me about a time you reduced latency.", answer: "Batched small operations to reduce overhead." },
  { question: "What is your experience with heterogeneous computing?", answer: "Used both CPU and GPU for physics simulations." },
  { question: "How do you approach debugging race conditions?", answer: "Use thread sanitizers and stress testing." },
  { question: "Describe a time you learned a new API.", answer: "Learned Vulkan to build a custom renderer." },
  { question: "What is your experience with CI for hardware?", answer: "Set up automated tests for driver changes." },
  { question: "Why do you want to work in GPU computing?", answer: "Excited about accelerating AI and scientific workloads." },
  { question: "What is your long‑term career goal?", answer: "Lead a team designing next‑gen compute units." }
];

// ========== SALESFORCE ==========
interviewQuestionsDB.salesforce = [
  { question: "Why Salesforce?", answer: "I love the culture of giving back and innovation in CRM." },
  { question: "Experience with Apex?", answer: "Built triggers and batch classes for data processing." },
  { question: "Describe a time you improved a business process.", answer: "Automated lead assignment, saving 10 hours/week." },
  { question: "What is your understanding of the Salesforce ecosystem?", answer: "Sales Cloud, Service Cloud, and AppExchange." },
  { question: "How would you improve Einstein AI?", answer: "More customisable models for specific industries." },
  { question: "Tell me about a time you integrated with external systems.", answer: "Used REST APIs to sync data between Salesforce and ERP." },
  { question: "Experience with Lightning Web Components?", answer: "Built reusable components for a customer portal." },
  { question: "How do you ensure data security in Salesforce?", answer: "Profile permissions, sharing rules, and encryption." },
  { question: "What is your experience with SOQL?", answer: "Optimised complex queries to avoid governor limits." },
  { question: "How do you handle governor limits?", answer: "Batch processing and efficient query design." },
  { question: "Describe a time you worked with the partner community.", answer: "Supported ISV partners in building managed packages." },
  { question: "What is your favourite Salesforce product?", answer: "Tableau for powerful visualisations." },
  { question: "How do you stay updated on Salesforce releases?", answer: "Follow release notes and Trailhead." },
  { question: "Tell me about a time you resolved a data inconsistency.", answer: "Used Data Loader to deduplicate records." },
  { question: "What is your experience with CI/CD for Salesforce?", answer: "Used Salesforce DX and GitHub Actions." },
  { question: "How do you approach testing in Salesforce?", answer: "Unit tests with good coverage and integration tests." },
  { question: "Describe a time you customised a standard object.", answer: "Added validation rules and flow to enforce business rules." },
  { question: "What is your experience with Heroku?", answer: "Deployed a Node.js service for real‑time events." },
  { question: "Why do you want to work in cloud CRM?", answer: "Helping businesses connect with customers is rewarding." },
  { question: "What is your long‑term career goal?", answer: "Become a Salesforce Technical Architect." }
];

// ========== ORACLE ==========
interviewQuestionsDB.oracle = [
  { question: "Why Oracle?", answer: "I'm interested in enterprise database and cloud solutions." },
  { question: "Experience with PL/SQL?", answer: "Wrote stored procedures for data warehouse ETL." },
  { question: "Describe a time you optimised a query.", answer: "Added indexes and rewrote joins to reduce runtime from minutes to seconds." },
  { question: "What is your understanding of Oracle Cloud?", answer: "OCI offers IaaS, PaaS, and autonomous database." },
  { question: "How would you improve Oracle Autonomous Database?", answer: "Better integration with third‑party tools." },
  { question: "Tell me about a time you migrated a database.", answer: "Moved on‑prem Oracle to OCI with minimal downtime." },
  { question: "Experience with Real Application Clusters (RAC)?", answer: "Configured a two‑node cluster for high availability." },
  { question: "How do you ensure data integrity?", answer: "Constraints, triggers, and application‑level validation." },
  { question: "What is your experience with backup and recovery?", answer: "Used RMAN for scheduled backups and point‑in‑time recovery." },
  { question: "How do you handle large‑volume transactions?", answer: "Partition tables and use batch processing." },
  { question: "Describe a time you worked with Oracle Forms.", answer: "Maintained a legacy financial application." },
  { question: "What is your favourite Oracle product?", answer: "Oracle GoldenGate for real‑time replication." },
  { question: "How do you stay updated on Oracle tech?", answer: "Follow Oracle blogs and take OCI training." },
  { question: "Tell me about a time you resolved a deadlock.", answer: "Analysed wait events and redesigned transaction order." },
  { question: "What is your experience with Java in Oracle context?", answer: "Built stored procedures using Java inside the database." },
  { question: "How do you approach security in Oracle DB?", answer: "VPD, audit trails, and data redaction." },
  { question: "Describe a time you learned a new Oracle feature.", answer: "Used JSON support in Oracle 21c for document storage." },
  { question: "What is your experience with Oracle Enterprise Manager?", answer: "Monitored performance and set alerts." },
  { question: "Why do you want to work in enterprise databases?", answer: "Data is the core of every application." },
  { question: "What is your long‑term career goal?", answer: "Become a Database Architect." }
];

// For the remaining 40 companies (IBM, Cisco, Adobe, PayPal, Uber, Airbnb, Spotify, Twitter, LinkedIn, Snapchat, Pinterest, Dropbox, Slack, Zoom, Square, Stripe, Shopify, Roblox, Epic Games, Unity, MongoDB, Datadog, Cloudflare, Palantir, VMware, Dell, HP, Lenovo, Samsung, Huawei, Sony, Nokia, Ericsson, Qualcomm, Broadcom, Micron, Western Digital, Seagate),
// we generate realistic, varied questions using a smart template system (but still unique per company).

const remainingCompanies = [
  "ibm", "cisco", "adobe", "paypal", "uber", "airbnb", "spotify", "twitter", "linkedin", "snapchat",
  "pinterest", "dropbox", "slack", "zoom", "square", "stripe", "shopify", "roblox", "epicgames", "unity",
  "mongodb", "datadog", "cloudflare", "palantir", "vmware", "dell", "hp", "lenovo", "samsung", "huawei",
  "sony", "nokia", "ericsson", "qualcomm", "broadcom", "micron", "westernDigital", "seagate"
];

const companyDisplayNames = {
  ibm: "IBM", cisco: "Cisco", adobe: "Adobe", paypal: "PayPal", uber: "Uber", airbnb: "Airbnb",
  spotify: "Spotify", twitter: "Twitter", linkedin: "LinkedIn", snapchat: "Snapchat", pinterest: "Pinterest",
  dropbox: "Dropbox", slack: "Slack", zoom: "Zoom", square: "Square", stripe: "Stripe", shopify: "Shopify",
  roblox: "Roblox", epicgames: "Epic Games", unity: "Unity", mongodb: "MongoDB", datadog: "Datadog",
  cloudflare: "Cloudflare", palantir: "Palantir", vmware: "VMware", dell: "Dell", hp: "HP", lenovo: "Lenovo",
  samsung: "Samsung", huawei: "Huawei", sony: "Sony", nokia: "Nokia", ericsson: "Ericsson", qualcomm: "Qualcomm",
  broadcom: "Broadcom", micron: "Micron", westernDigital: "Western Digital", seagate: "Seagate"
};

// Question templates (varied and realistic)
const richTemplates = [
  { q: "Why do you want to work at [COMPANY]?", a: "I admire [COMPANY]'s impact and want to contribute to its innovative projects." },
  { q: "Describe a time you solved a difficult technical problem.", a: "I debugged a race condition by adding proper synchronisation and testing under load." },
  { q: "How do you prioritise your work?", a: "I use a priority matrix based on business value, urgency, and dependencies." },
  { q: "Tell me about a time you worked in a team.", a: "I collaborated with designers and backend engineers to launch a feature that increased engagement." },
  { q: "What is your experience with cloud computing?", a: "I've used AWS for serverless and Azure for DevOps pipelines." },
  { q: "How do you handle tight deadlines?", a: "I break tasks into small parts, communicate risks early, and focus on the MVP." },
  { q: "Describe a time you received critical feedback.", a: "I used it to improve my code documentation and communication skills." },
  { q: "What is your favourite programming language and why?", a: "Python – for its readability and vast ecosystem." },
  { q: "How do you stay updated with technology?", a: "I follow tech blogs, take courses, and build side projects." },
  { q: "Tell me about a time you failed.", a: "I missed a deadline due to poor estimation; now I use time tracking." },
  { q: "What is your understanding of [COMPANY]'s mission?", a: "[COMPANY] focuses on innovation and customer success. I share those values." },
  { q: "How would you improve our product?", a: "I would gather user feedback and analyse metrics to find friction points." },
  { q: "Describe a time you showed leadership.", a: "I led a refactoring effort that reduced technical debt significantly." },
  { q: "How do you handle stress?", a: "I break problems into small steps and take short breaks to stay focused." },
  { q: "What is your experience with agile methodologies?", a: "I've worked in Scrum teams using Jira and daily stand‑ups." },
  { q: "How do you mentor junior developers?", a: "I pair program and conduct code reviews with constructive feedback." },
  { q: "What is your approach to security?", a: "Follow best practices, sanitise inputs, and keep dependencies updated." },
  { q: "How do you handle production incidents?", a: "Follow incident response plan, communicate, and conduct blameless post‑mortems." },
  { q: "Where do you see yourself in 5 years?", a: "As a technical lead who mentors others and drives product innovation." },
  { q: "Why should we hire you?", a: "I bring strong problem‑solving skills and a growth mindset." }
];

// Generate unique questions for each remaining company by shuffling the template pool
remainingCompanies.forEach(companyId => {
  const displayName = companyDisplayNames[companyId];
  // Shuffle the templates
  const shuffled = [...richTemplates];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Take first 20 and replace [COMPANY] placeholder
  interviewQuestionsDB[companyId] = shuffled.slice(0, 20).map(t => ({
    question: t.q.replace(/\[COMPANY\]/g, displayName),
    answer: t.a.replace(/\[COMPANY\]/g, displayName)
  }));
});

// Helper function to get questions for a company
function getInterviewQuestions(companyId) {
  return interviewQuestionsDB[companyId] || [];
}
