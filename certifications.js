// ========== CERTIFICATIONS.JS – 20 COMPANIES WITH REAL LOGOS & TASKS ==========
const companies = [
  { id: "google", name: "Google", logo: "fab fa-google", domains: ["Cybersecurity", "Software Development", "Data Analytics", "Cloud Engineering"] },
  { id: "microsoft", name: "Microsoft", logo: "fab fa-microsoft", domains: ["Software Development", "Cloud Engineering", "Data Analytics", "Artificial Intelligence"] },
  { id: "aws", name: "Amazon Web Services", logo: "fab fa-aws", domains: ["Cloud Engineering", "Cybersecurity", "Database", "Networking"] },
  { id: "meta", name: "Meta", logo: "fab fa-meta", domains: ["Software Development", "Data Analytics", "Cybersecurity", "Web Design"] },
  { id: "tesla", name: "Tesla", logo: "fab fa-tesla", domains: ["Artificial Intelligence", "Software Development", "Cybersecurity"] },
  { id: "apple", name: "Apple", logo: "fab fa-apple", domains: ["Software Development", "Cybersecurity", "Data Analytics"] },
  { id: "ibm", name: "IBM", logo: "fab fa-ibm", domains: ["Artificial Intelligence", "Cybersecurity", "Cloud Engineering"] },
  { id: "oracle", name: "Oracle", logo: "fab fa-oracle", domains: ["Database", "Cloud Engineering", "Cybersecurity"] },
  { id: "salesforce", name: "Salesforce", logo: "fab fa-salesforce", domains: ["Data Analytics", "Cloud Engineering", "Software Development"] },
  { id: "adobe", name: "Adobe", logo: "fab fa-adobe", domains: ["Web Design", "Software Development", "Data Analytics"] },
  { id: "netflix", name: "Netflix", logo: "fab fa-netflix", domains: ["Data Analytics", "Cybersecurity", "Software Development"] },
  { id: "spotify", name: "Spotify", logo: "fab fa-spotify", domains: ["Data Analytics", "Software Development", "Artificial Intelligence"] },
  { id: "intel", name: "Intel", logo: "fab fa-intel", domains: ["Cybersecurity", "Cloud Engineering", "Artificial Intelligence"] },
  { id: "cisco", name: "Cisco", logo: "fab fa-cisco", domains: ["Networking", "Cybersecurity", "Cloud Engineering"] },
  { id: "vmware", name: "VMware", logo: "fab fa-vmware", domains: ["Cloud Engineering", "Cybersecurity", "Virtualization"] },
  { id: "paypal", name: "PayPal", logo: "fab fa-paypal", domains: ["Cybersecurity", "Data Analytics", "Software Development"] },
  { id: "jpmc", name: "JPMorgan Chase", logo: "fas fa-building", domains: ["Cybersecurity", "Data Analytics", "Software Development"] },
  { id: "goldman", name: "Goldman Sachs", logo: "fas fa-chart-line", domains: ["Data Analytics", "Cybersecurity", "Software Development"] },
  { id: "visa", name: "Visa", logo: "fab fa-cc-visa", domains: ["Cybersecurity", "Data Analytics", "Software Development"] },
  { id: "mastercard", name: "Mastercard", logo: "fab fa-cc-mastercard", domains: ["Cybersecurity", "Data Analytics", "Software Development"] }
];

// Domain-specific practical tasks (used in certificate)
const domainTasks = {
  "Cybersecurity": [
    "Threat intelligence analysis and risk profiling",
    "Predicting attack vectors with AI",
    "Incident response and data storytelling for security strategy",
    "Implementing an AI-driven autonomous defense strategy"
  ],
  "Software Development": [
    "Agile software development lifecycle simulation",
    "Building scalable microservices with cloud APIs",
    "Code review and security best practices",
    "CI/CD pipeline implementation"
  ],
  "Data Analytics": [
    "Exploratory data analysis and risk profiling",
    "Predicting delinquency with AI",
    "Business report and data storytelling",
    "Implementing an AI-driven collections strategy"
  ],
  "Cloud Engineering": [
    "Infrastructure as Code (IaC) with Terraform",
    "Deploying serverless applications",
    "Cloud cost optimization and security",
    "Multi-cloud architecture design"
  ],
  "Artificial Intelligence": [
    "Building and training neural networks",
    "Natural language processing for threat detection",
    "Computer vision for security monitoring",
    "Reinforcement learning for autonomous response"
  ],
  "Database": [
    "SQL query optimization and indexing",
    "Database security and encryption",
    "NoSQL data modeling",
    "Data replication and backup strategies"
  ],
  "Networking": [
    "TCP/IP stack analysis and troubleshooting",
    "Designing secure VPNs and firewalls",
    "Network performance monitoring",
    "Zero-trust network architecture"
  ],
  "Web Design": [
    "Responsive UI/UX design principles",
    "Accessibility and inclusive design",
    "Front-end performance optimization",
    "Design systems and component libraries"
  ],
  "Virtualization": [
    "VMware vSphere deployment",
    "Virtual machine lifecycle management",
    "Hypervisor security best practices",
    "Disaster recovery and snapshots"
  ]
};

// Fallback tasks if domain not found
const defaultTasks = [
  "Core technical assessment",
  "Problem-solving and critical thinking",
  "Collaboration and communication simulation",
  "Final project evaluation"
];

function getTasksForDomain(domain) {
  return domainTasks[domain] || defaultTasks;
}

// Question bank (keep as before, expand as needed)
const questionBank = {
  "Cybersecurity": [
    { text: "What is the primary purpose of a firewall?", options: ["To detect viruses", "To monitor and filter network traffic", "To encrypt data", "To manage passwords"], correct: 1, explanation: "Firewalls monitor and filter incoming/outgoing network traffic based on security rules." },
    { text: "Which of these is a strong password?", options: ["password123", "qwerty", "@rm0rA1_2025!", "admin"], correct: 2, explanation: "Strong passwords include mixed case, numbers, and special characters, avoiding common words." },
    { text: "What does VPN stand for?", options: ["Virtual Private Network", "Very Private Network", "Virtual Protected Node", "Verified Personal Network"], correct: 0, explanation: "VPN creates a secure, encrypted connection over a less secure network." },
    { text: "What is a zero-day vulnerability?", options: ["A vulnerability that has been known for zero days", "A patched vulnerability", "A vulnerability with no available fix", "A vulnerability in zero-day software"], correct: 2, explanation: "Zero‑day means the vendor has had zero days to patch it." },
    { text: "Which protocol is used for secure web browsing?", options: ["HTTP", "FTP", "HTTPS", "SSH"], correct: 2, explanation: "HTTPS (HTTP Secure) encrypts data between browser and server." },
    { text: "What is the main goal of a DDoS attack?", options: ["Data theft", "Disrupt service availability", "Gain unauthorized access", "Encrypt files"], correct: 1, explanation: "DDoS aims to overwhelm a service, making it unavailable." },
    { text: "Which of the following is a form of social engineering?", options: ["Phishing", "SQL injection", "Buffer overflow", "Man-in-the-middle"], correct: 0, explanation: "Phishing manipulates users into revealing confidential information." },
    { text: "What is the function of an IDS?", options: ["Prevent all attacks", "Detect and alert on suspicious activity", "Block malicious IPs", "Encrypt network traffic"], correct: 1, explanation: "Intrusion Detection Systems (IDS) monitor and alert on suspicious activity." },
    { text: "Which encryption algorithm is currently considered strong?", options: ["DES", "RSA-2048", "MD5", "RC4"], correct: 1, explanation: "RSA‑2048 is widely used and considered secure for asymmetric encryption." },
    { text: "What is a common indicator of a phishing email?", options: ["Spelling errors", "Unknown sender", "Urgent request", "All of the above"], correct: 3, explanation: "Phishing emails often contain multiple red flags." }
  ],
  "Software Development": [
    { text: "Which data structure uses LIFO?", options: ["Queue", "Array", "Stack", "Linked List"], correct: 2, explanation: "LIFO = Last In, First Out, characteristic of a stack." },
    { text: "What does 'git commit' do?", options: ["Saves changes locally", "Uploads to remote", "Shows status", "Creates a branch"], correct: 0, explanation: "git commit saves staged changes to the local repository." },
    { text: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Integration", "Application Protocol Interface", "Automated Program Interface"], correct: 0, explanation: "API defines how software components interact." },
    { text: "Which language is primarily used for Android development?", options: ["Swift", "Kotlin", "C#", "PHP"], correct: 1, explanation: "Kotlin is Google's preferred language for Android." },
    { text: "What is the purpose of a constructor?", options: ["To destroy an object", "To initialize an object", "To define methods", "To create a class"], correct: 1, explanation: "A constructor initializes a new instance of a class." },
    { text: "Which is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], correct: 2, explanation: "MongoDB is a document-oriented NoSQL database." },
    { text: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1, explanation: "Binary search runs in logarithmic time." },
    { text: "What does CSS stand for?", options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2, explanation: "CSS styles HTML elements." },
    { text: "Which keyword defines a constant in JavaScript?", options: ["let", "var", "const", "static"], correct: 2, explanation: "const declares a constant (unchangeable) variable." },
    { text: "What is a closure?", options: ["A function with access to outer scope", "A loop construct", "A built-in object", "A type of variable"], correct: 0, explanation: "A closure is a function that retains access to its outer lexical scope." }
  ],
  "Data Analytics": [
    { text: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], correct: 0, explanation: "SQL is used to manage relational databases." },
    { text: "Which Python library is for data visualization?", options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], correct: 2, explanation: "Matplotlib is the foundational plotting library." },
    { text: "What is data cleaning?", options: ["Removing outliers", "Handling missing values", "Correcting inconsistencies", "All of the above"], correct: 3, explanation: "Data cleaning involves all these steps." },
    { text: "Which measure of central tendency is affected by outliers?", options: ["Mean", "Median", "Mode", "Range"], correct: 0, explanation: "Mean is sensitive to extreme values." },
    { text: "Which tool is for BI and data visualization?", options: ["Tableau", "Power BI", "Looker", "All of the above"], correct: 3, explanation: "All are popular BI tools." }
  ],
  "Cloud Engineering": [
    { text: "What does IaaS stand for?", options: ["Infrastructure as a Service", "Integration as a Service", "Internet as a Service", "Information as a Service"], correct: 0, explanation: "IaaS provides virtualized computing resources." },
    { text: "Which AWS service is for object storage?", options: ["EC2", "S3", "Lambda", "RDS"], correct: 1, explanation: "S3 is Simple Storage Service." },
    { text: "What is serverless?", options: ["No server management", "Lower cost", "Automatic scaling", "All of the above"], correct: 3, explanation: "Serverless offers all these benefits." },
    { text: "Which cloud model is for a single organization?", options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"], correct: 1, explanation: "Private cloud is dedicated to one organization." }
  ],
  "Database": [
    { text: "What is a primary key?", options: ["Unique identifier", "Foreign key", "Index", "Query"], correct: 0, explanation: "Primary key uniquely identifies each record." },
    { text: "Which SQL statement retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], correct: 2, explanation: "SELECT is used for queries." },
    { text: "What is the difference between SQL and NoSQL?", options: ["SQL is relational, NoSQL is non‑relational", "SQL is faster", "NoSQL is more secure", "No difference"], correct: 0, explanation: "SQL databases are table-based, NoSQL are document/graph/key-value." }
  ],
  "Artificial Intelligence": [
    { text: "What is machine learning?", options: ["A subset of AI", "A type of database", "A programming language", "A hardware component"], correct: 0, explanation: "ML is a branch of AI." },
    { text: "Which algorithm is for classification?", options: ["Linear regression", "K‑means", "Decision tree", "PCA"], correct: 2, explanation: "Decision trees are used for classification." },
    { text: "What is the purpose of a neural network?", options: ["Simulate human brain", "Store data", "Create graphics", "Compile code"], correct: 0, explanation: "Neural networks mimic brain function to recognize patterns." },
    { text: "What is overfitting?", options: ["Model works well on training data but poorly on new data", "Model is too simple", "Too few features", "Uses too much memory"], correct: 0, explanation: "Overfitting is when a model learns noise instead of signal." }
  ],
  "Web Design": [
    { text: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0, explanation: "HTML is the standard markup language for web pages." },
    { text: "Which CSS property changes background color?", options: ["color", "background-color", "bgcolor", "background"], correct: 1, explanation: "background-color sets the background." },
    { text: "What is the CSS box model?", options: ["Margin, border, padding, content", "Width, height, margin, padding", "Border, outline, margin, padding", "Content, margin, padding, border"], correct: 0, explanation: "The box model describes the space around an element." },
    { text: "Which framework is for responsive design?", options: ["Bootstrap", "React", "Angular", "Vue"], correct: 0, explanation: "Bootstrap provides responsive grid and components." }
  ],
  "Networking": [
    { text: "What is the OSI model?", options: ["Conceptual network model", "Cable type", "Security protocol", "Programming language"], correct: 0, explanation: "The OSI model standardizes network communication." },
    { text: "What does IP stand for?", options: ["Internet Protocol", "Internal Protocol", "International Protocol", "Integrated Protocol"], correct: 0, explanation: "IP is the principal communications protocol." },
    { text: "Which device connects different networks?", options: ["Switch", "Router", "Hub", "Modem"], correct: 1, explanation: "Routers forward packets between networks." },
    { text: "What is a subnet mask for?", options: ["Divide an IP network", "Encrypt data", "Assign IP addresses", "Route packets"], correct: 0, explanation: "Subnet masks separate network and host portions of an IP." }
  ]
};

function getRandomQuestions(domain, num = 10) {
  const bank = questionBank[domain];
  if (!bank) return [];
  const shuffled = [...bank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, num);
}
