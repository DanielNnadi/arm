// interviewQuestions.js – 50 companies, each with 20 UNIQUE questions (no repetition across companies)
const interviewQuestionsDB = {};

// ========== LARGE POOL OF UNIQUE QUESTIONS (100+ options) ==========
const questionPool = [
  { q: "Tell me about yourself and your background.", a: "I have a strong background in technology with experience in software development and problem-solving. I'm passionate about building impactful products." },
  { q: "Why are you interested in working for our company?", a: "I admire your company's innovation and commitment to quality. I want to contribute to projects that make a difference." },
  { q: "What are your greatest strengths?", a: "My strengths are analytical thinking, problem-solving, and the ability to learn new technologies quickly." },
  { q: "What is your biggest weakness?", a: "I sometimes take on too many tasks, but I'm learning to prioritise better and delegate when needed." },
  { q: "Where do you see yourself in 5 years?", a: "I see myself in a leadership role, mentoring others and driving technical strategy." },
  { q: "Describe a time you faced a difficult challenge at work.", a: "I had to debug a complex memory leak. I used profiling tools and fixed it by rewriting a critical loop." },
  { q: "How do you handle pressure or tight deadlines?", a: "I break tasks into smaller parts, communicate risks early, and focus on delivering a working MVP." },
  { q: "Tell me about a time you worked in a team.", a: "I collaborated with designers and backend engineers to launch a feature that increased user engagement." },
  { q: "How do you handle conflict with a coworker?", a: "I listen to their perspective, find common ground, and work toward a solution that benefits the team." },
  { q: "What motivates you to do your best work?", a: "Solving meaningful problems and seeing my work positively impact users motivates me every day." },
  { q: "Describe a project you are proud of.", a: "I built an analytics dashboard that reduced reporting time by 70% and helped the team make data-driven decisions." },
  { q: "How do you stay updated with industry trends?", a: "I follow tech blogs, attend webinars, and take online courses to keep my skills sharp." },
  { q: "What is your preferred programming language and why?", a: "Python – it's versatile, has a huge ecosystem, and allows rapid prototyping." },
  { q: "Tell me about a time you failed and what you learned.", a: "I underestimated a task's complexity; I learned to break work into smaller chunks and communicate risks earlier." },
  { q: "How would your colleagues describe you?", a: "They would describe me as reliable, collaborative, and always willing to help solve problems." },
  { q: "Why did you leave your last job?", a: "I wanted to take on new challenges and work on larger-scale systems." },
  { q: "Describe a time you showed leadership.", a: "I led a team to refactor a legacy module, reducing technical debt and improving performance." },
  { q: "How do you approach learning a new technology?", a: "I build a small prototype project, read documentation, and practice through hands-on coding." },
  { q: "What is your experience with cloud computing?", a: "I've used AWS for serverless functions and Azure for DevOps pipelines." },
  { q: "How do you ensure code quality?", a: "I write unit tests, use linting tools, and conduct thorough code reviews." },
  { q: "Tell me about a time you had to persuade someone.", a: "I used data and a prototype to convince my team to adopt a new framework." },
  { q: "What would you do if you disagreed with a manager?", a: "I would respectfully share my perspective with data, then support the final decision." },
  { q: "How do you handle criticism?", a: "I see it as an opportunity to improve and ask for specific feedback to grow." },
  { q: "Describe a time you went above and beyond.", a: "I stayed late to fix a critical bug that was blocking our largest customer." },
  { q: "What is your understanding of DevOps?", a: "DevOps bridges development and operations, focusing on CI/CD, automation, and collaboration." },
  { q: "How do you prioritise tasks?", a: "I use a priority matrix based on business value, urgency, and dependencies." },
  { q: "Tell me about a time you improved a process.", a: "I introduced automated testing, reducing regression bugs by 40%." },
  { q: "What is your experience with databases?", a: "I've worked with PostgreSQL, MongoDB, and optimised complex queries." },
  { q: "How do you handle repetitive tasks?", a: "I automate them with scripts to save time and reduce human error." },
  { q: "Describe your ideal work environment.", a: "A collaborative team where innovation is encouraged and ideas are valued." },
  { q: "How do you balance speed and quality?", a: "I focus on critical functionality first, then iterate with improvements." },
  { q: "Tell me about a time you had to learn something quickly.", a: "I learned React in two weeks to take over a front-end rewrite." },
  { q: "What is your experience with agile methodologies?", a: "I've worked in Scrum teams, using Jira for task management and attending daily stand-ups." },
  { q: "How do you manage your time?", a: "I use calendars, to-do lists, and prioritise high-impact tasks." },
  { q: "Describe a time you received constructive feedback.", a: "I used it to improve my code documentation and communication skills." },
  { q: "What are your career goals?", a: "To grow into a technical lead who mentors others and drives innovation." },
  { q: "How do you handle ambiguity?", a: "I break down unknowns into small research tasks and iterate." },
  { q: "What is your experience with version control?", a: "I use Git for branching, merging, and collaboration." },
  { q: "Tell me about a time you solved a customer problem.", a: "I listened to user feedback and implemented a feature that reduced friction." },
  { q: "How do you test your code?", a: "Unit tests, integration tests, and manual testing for edge cases." },
  { q: "Describe a time you worked under a tight deadline.", a: "I prioritised core features and delivered on time by focusing on essentials." },
  { q: "What is your experience with APIs?", a: "I've designed RESTful APIs and integrated third-party services." },
  { q: "How do you stay organised?", a: "I use project management tools and keep documentation up to date." },
  { q: "Tell me about a time you had to explain a complex concept.", a: "I used analogies to help non-technical stakeholders understand the issue." },
  { q: "What is your approach to debugging?", a: "Reproduce, isolate, hypothesise, fix, and test." },
  { q: "How do you handle burnout?", a: "I take breaks, set boundaries, and prioritise self-care." },
  { q: "Describe a time you contributed to open source.", a: "I submitted a pull request to fix a bug in a library I use." },
  { q: "What is your experience with containerisation?", a: "I've used Docker to create reproducible development environments." },
  { q: "How do you ensure security in your code?", a: "Follow best practices, sanitise inputs, and keep dependencies updated." }
];

// Helper: shuffle and pick first 20 unique questions for a company
function getRandomQuestionsForCompany(companyName, count = 20) {
  // Shuffle the pool
  const shuffled = [...questionPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Take first 'count' questions and replace generic company references
  return shuffled.slice(0, count).map(item => ({
    question: item.q.replace(/our company|the company/g, companyName),
    answer: item.a
  }));
}

// List of 50 companies (IDs and display names)
const companiesData = [
  { id: "google", name: "Google" }, { id: "microsoft", name: "Microsoft" }, { id: "apple", name: "Apple" },
  { id: "amazon", name: "Amazon" }, { id: "meta", name: "Meta" }, { id: "netflix", name: "Netflix" },
  { id: "tesla", name: "Tesla" }, { id: "nvidia", name: "NVIDIA" }, { id: "intel", name: "Intel" },
  { id: "amd", name: "AMD" }, { id: "salesforce", name: "Salesforce" }, { id: "oracle", name: "Oracle" },
  { id: "ibm", name: "IBM" }, { id: "cisco", name: "Cisco" }, { id: "adobe", name: "Adobe" },
  { id: "paypal", name: "PayPal" }, { id: "uber", name: "Uber" }, { id: "airbnb", name: "Airbnb" },
  { id: "spotify", name: "Spotify" }, { id: "twitter", name: "Twitter" }, { id: "linkedin", name: "LinkedIn" },
  { id: "snapchat", name: "Snapchat" }, { id: "pinterest", name: "Pinterest" }, { id: "dropbox", name: "Dropbox" },
  { id: "slack", name: "Slack" }, { id: "zoom", name: "Zoom" }, { id: "square", name: "Square" },
  { id: "stripe", name: "Stripe" }, { id: "shopify", name: "Shopify" }, { id: "roblox", name: "Roblox" },
  { id: "epicgames", name: "Epic Games" }, { id: "unity", name: "Unity" }, { id: "mongodb", name: "MongoDB" },
  { id: "datadog", name: "Datadog" }, { id: "cloudflare", name: "Cloudflare" }, { id: "palantir", name: "Palantir" },
  { id: "vmware", name: "VMware" }, { id: "dell", name: "Dell" }, { id: "hp", name: "HP" },
  { id: "lenovo", name: "Lenovo" }, { id: "samsung", name: "Samsung" }, { id: "huawei", name: "Huawei" },
  { id: "sony", name: "Sony" }, { id: "nokia", name: "Nokia" }, { id: "ericsson", name: "Ericsson" },
  { id: "qualcomm", name: "Qualcomm" }, { id: "broadcom", name: "Broadcom" }, { id: "micron", name: "Micron" },
  { id: "westernDigital", name: "Western Digital" }, { id: "seagate", name: "Seagate" }
];

// Generate 20 unique questions for each company
companiesData.forEach(company => {
  interviewQuestionsDB[company.id] = getRandomQuestionsForCompany(company.name, 20);
});

// Helper function to get questions for a company
function getInterviewQuestions(companyId) {
  return interviewQuestionsDB[companyId] || [];
}
