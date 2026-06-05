const companies = [
  { id: "google", name: "Google", logo: "🔍", domains: ["Cybersecurity", "Software Development", "Data Analytics", "Cloud Engineering"] },
  { id: "microsoft", name: "Microsoft", logo: "🪟", domains: ["Software Development", "Cloud Engineering", "Data Analytics", "Database", "Artificial Intelligence"] },
  { id: "aws", name: "Amazon Web Services", logo: "☁️", domains: ["Cybersecurity", "Cloud Engineering", "Database", "Networking"] },
  { id: "meta", name: "Meta", logo: "📱", domains: ["Software Development", "Web Design", "Data Analytics", "Cybersecurity"] },
  { id: "tesla", name: "Tesla", logo: "🚗", domains: ["Software Development", "Artificial Intelligence", "Cybersecurity", "Data Analytics"] },
  { id: "jpmc", name: "JPMorgan Chase", logo: "🏦", domains: ["Software Development", "Data Analytics", "Cybersecurity", "IT Infrastructure"] },
  { id: "ibm", name: "IBM", logo: "🧠", domains: ["Artificial Intelligence", "Cybersecurity", "Database", "Cloud Engineering"] }
];

const questionBank = {
  "Cybersecurity": [
    { text: "What is the primary purpose of a firewall?", options: ["To detect viruses", "To monitor and filter network traffic", "To encrypt data", "To manage passwords"], correct: 1 },
    { text: "Which of these is a strong password?", options: ["password123", "qwerty", "@rm0rA1_2025!", "admin"], correct: 2 },
    { text: "What does VPN stand for?", options: ["Virtual Private Network", "Very Private Network", "Virtual Protected Node", "Verified Personal Network"], correct: 0 },
    { text: "What is a zero-day vulnerability?", options: ["A vulnerability that has been known for zero days", "A patched vulnerability", "A vulnerability with no available fix", "A vulnerability in zero-day software"], correct: 2 },
    { text: "Which protocol is used for secure web browsing?", options: ["HTTP", "FTP", "HTTPS", "SSH"], correct: 2 },
    { text: "What is the main goal of a DDoS attack?", options: ["Data theft", "Disrupt service availability", "Gain unauthorized access", "Encrypt files"], correct: 1 },
    { text: "Which of the following is a form of social engineering?", options: ["Phishing", "SQL injection", "Buffer overflow", "Man-in-the-middle"], correct: 0 },
    { text: "What is the function of an IDS?", options: ["Prevent all attacks", "Detect and alert on suspicious activity", "Block malicious IPs", "Encrypt network traffic"], correct: 1 },
    { text: "Which encryption algorithm is currently considered strong?", options: ["DES", "RSA-2048", "MD5", "RC4"], correct: 1 },
    { text: "What is a common indicator of a phishing email?", options: ["Spelling errors", "Unknown sender", "Urgent request", "All of the above"], correct: 3 }
  ],
  "Software Development": [
    { text: "Which data structure uses LIFO?", options: ["Queue", "Array", "Stack", "Linked List"], correct: 2 },
    { text: "What does 'git commit' do?", options: ["Saves changes locally", "Uploads to remote", "Shows status", "Creates a branch"], correct: 0 },
    { text: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Integration", "Application Protocol Interface", "Automated Program Interface"], correct: 0 },
    { text: "Which language is primarily used for Android development?", options: ["Swift", "Kotlin", "C#", "PHP"], correct: 1 },
    { text: "What is the purpose of a constructor?", options: ["To destroy an object", "To initialize an object", "To define methods", "To create a class"], correct: 1 },
    { text: "Which is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], correct: 2 },
    { text: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1 },
    { text: "What does CSS stand for?", options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], correct: 2 },
    { text: "Which keyword defines a constant in JavaScript?", options: ["let", "var", "const", "static"], correct: 2 },
    { text: "What is a closure?", options: ["A function with access to outer scope", "A loop construct", "A built-in object", "A type of variable"], correct: 0 }
  ],
  "Data Analytics": [
    { text: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], correct: 0 },
    { text: "Which Python library is for data visualization?", options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], correct: 2 },
    { text: "What is data cleaning?", options: ["Removing outliers", "Handling missing values", "Correcting inconsistencies", "All of the above"], correct: 3 },
    { text: "Which measure of central tendency is affected by outliers?", options: ["Mean", "Median", "Mode", "Range"], correct: 0 },
    { text: "Which tool is for BI and data visualization?", options: ["Tableau", "Power BI", "Looker", "All of the above"], correct: 3 }
  ],
  "Cloud Engineering": [
    { text: "What does IaaS stand for?", options: ["Infrastructure as a Service", "Integration as a Service", "Internet as a Service", "Information as a Service"], correct: 0 },
    { text: "Which AWS service is for object storage?", options: ["EC2", "S3", "Lambda", "RDS"], correct: 1 },
    { text: "What is serverless?", options: ["No server management", "Lower cost", "Automatic scaling", "All of the above"], correct: 3 },
    { text: "Which cloud model is for a single organization?", options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"], correct: 1 }
  ],
  "Database": [
    { text: "What is a primary key?", options: ["Unique identifier", "Foreign key", "Index", "Query"], correct: 0 },
    { text: "Which SQL statement retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], correct: 2 },
    { text: "What is the difference between SQL and NoSQL?", options: ["SQL is relational, NoSQL is non‑relational", "SQL is faster", "NoSQL is more secure", "No difference"], correct: 0 }
  ],
  "Artificial Intelligence": [
    { text: "What is machine learning?", options: ["A subset of AI", "A type of database", "A programming language", "A hardware component"], correct: 0 },
    { text: "Which algorithm is for classification?", options: ["Linear regression", "K‑means", "Decision tree", "PCA"], correct: 2 },
    { text: "What is the purpose of a neural network?", options: ["Simulate human brain", "Store data", "Create graphics", "Compile code"], correct: 0 },
    { text: "What is overfitting?", options: ["Model works well on training data but poorly on new data", "Model is too simple", "Too few features", "Uses too much memory"], correct: 0 }
  ],
  "Web Design": [
    { text: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
    { text: "Which CSS property changes background color?", options: ["color", "background-color", "bgcolor", "background"], correct: 1 },
    { text: "What is the CSS box model?", options: ["Margin, border, padding, content", "Width, height, margin, padding", "Border, outline, margin, padding", "Content, margin, padding, border"], correct: 0 },
    { text: "Which framework is for responsive design?", options: ["Bootstrap", "React", "Angular", "Vue"], correct: 0 }
  ],
  "IT Infrastructure": [
    { text: "What does DNS stand for?", options: ["Domain Name System", "Digital Network Service", "Data Name System", "Domain Network Service"], correct: 0 },
    { text: "What is the purpose of a load balancer?", options: ["Distribute traffic", "Encrypt data", "Store backups", "Monitor network"], correct: 0 },
    { text: "Which protocol is for remote access?", options: ["SSH", "HTTP", "FTP", "SMTP"], correct: 0 },
    { text: "What is virtualization?", options: ["Multiple OS on one physical machine", "Virtual reality", "Simulating hardware", "Cloud computing"], correct: 0 }
  ],
  "Networking": [
    { text: "What is the OSI model?", options: ["Conceptual network model", "Cable type", "Security protocol", "Programming language"], correct: 0 },
    { text: "What does IP stand for?", options: ["Internet Protocol", "Internal Protocol", "International Protocol", "Integrated Protocol"], correct: 0 },
    { text: "Which device connects different networks?", options: ["Switch", "Router", "Hub", "Modem"], correct: 1 },
    { text: "What is a subnet mask for?", options: ["Divide an IP network", "Encrypt data", "Assign IP addresses", "Route packets"], correct: 0 }
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
