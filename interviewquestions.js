// interviewQuestions.js – 50 companies, 20 unique questions each
const interviewQuestionsDB = {};

// List of 50 companies
const companyList = [
  "google", "microsoft", "apple", "amazon", "meta", "netflix", "tesla", "nvidia", "intel", "amd",
  "salesforce", "oracle", "ibm", "cisco", "adobe", "paypal", "uber", "airbnb", "spotify", "twitter",
  "linkedin", "snapchat", "pinterest", "dropbox", "slack", "zoom", "square", "stripe", "shopify",
  "roblox", "epicgames", "unity", "mongodb", "datadog", "cloudflare", "palantir", "vmware", "dell",
  "hp", "lenovo", "samsung", "huawei", "sony", "nokia", "ericsson", "qualcomm", "broadcom", "micron",
  "westernDigital", "seagate"
];

// Display name mapping
const displayNames = {
  google: "Google", microsoft: "Microsoft", apple: "Apple", amazon: "Amazon", meta: "Meta",
  netflix: "Netflix", tesla: "Tesla", nvidia: "NVIDIA", intel: "Intel", amd: "AMD",
  salesforce: "Salesforce", oracle: "Oracle", ibm: "IBM", cisco: "Cisco", adobe: "Adobe",
  paypal: "PayPal", uber: "Uber", airbnb: "Airbnb", spotify: "Spotify", twitter: "Twitter",
  linkedin: "LinkedIn", snapchat: "Snapchat", pinterest: "Pinterest", dropbox: "Dropbox",
  slack: "Slack", zoom: "Zoom", square: "Square", stripe: "Stripe", shopify: "Shopify",
  roblox: "Roblox", epicgames: "Epic Games", unity: "Unity", mongodb: "MongoDB",
  datadog: "Datadog", cloudflare: "Cloudflare", palantir: "Palantir", vmware: "VMware",
  dell: "Dell", hp: "HP", lenovo: "Lenovo", samsung: "Samsung", huawei: "Huawei",
  sony: "Sony", nokia: "Nokia", ericsson: "Ericsson", qualcomm: "Qualcomm",
  broadcom: "Broadcom", micron: "Micron", westernDigital: "Western Digital", seagate: "Seagate"
};

// Question templates (varied topics – leadership, technical, behavioural, situational)
const questionTemplates = [
  // Leadership & culture
  "Why do you want to work at [COMPANY]?",
  "Describe a time you demonstrated leadership without formal authority.",
  "How does [COMPANY]'s culture align with your values?",
  "What would you bring to [COMPANY] that no one else can?",
  "Tell me about a time you had to make a difficult decision with incomplete information.",
  "How do you handle failure? Give a specific example.",
  "Describe a situation where you had to influence a team without direct authority.",
  
  // Technical / role specific
  "What is your favourite programming language and why?",
  "Explain a technical concept you recently learned.",
  "Describe a project you're proud of and your role in it.",
  "How do you stay updated with new technologies?",
  "Tell me about a time you solved a complex technical problem.",
  "What is your approach to debugging a production issue?",
  "How do you ensure code quality in your projects?",
  "Describe a time you had to learn a new technology quickly.",
  "What is your experience with cloud computing (AWS/Azure/GCP)?",
  "How do you prioritise features in a project?",
  
  // Situational & behavioural
  "Tell me about a time you disagreed with a teammate. How did you resolve it?",
  "Describe a time you received constructive criticism and how you responded.",
  "How do you handle tight deadlines or pressure?",
  "Tell me about a time you went above and beyond for a customer or user.",
  "Describe a situation where you had to adapt to a significant change.",
  "How do you approach mentoring junior developers?",
  "Tell me about a time you failed and what you learned from it.",
  
  // Company specific (placeholder – will be replaced by company context)
  "What do you think is [COMPANY]'s biggest challenge right now?",
  "How would you improve [COMPANY]'s most popular product?",
  "What is your understanding of [COMPANY]'s mission and values?"
];

// Generate 20 unique questions for each company
companyList.forEach(company => {
  const displayName = displayNames[company];
  const shuffled = [...questionTemplates];
  // Shuffle the array to get random order
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Take first 20 questions and replace [COMPANY] placeholder
  const questions = shuffled.slice(0, 20).map(template => {
    let question = template.replace("[COMPANY]", displayName);
    // Add some variety to answers based on company context
    let answer = "";
    if (question.includes("Why do you want to work at")) {
      answer = `I admire ${displayName}'s innovation and impact. I want to contribute to solving challenging problems that align with my skills.`;
    } else if (question.includes("failure")) {
      answer = `I once misestimated a project timeline. I learned to break tasks into smaller chunks and communicate risks earlier.`;
    } else if (question.includes("tight deadlines")) {
      answer = `I prioritise tasks based on impact, communicate early if I need support, and focus on delivering a working MVP first.`;
    } else if (question.includes("disagreed")) {
      answer = `I listened to their perspective, proposed a small prototype to test both ideas, and we chose the best one together.`;
    } else if (question.includes("technical concept")) {
      answer = `I recently learned about event-driven architecture. It helps decouple services and improves scalability.`;
    } else if (question.includes("cloud computing")) {
      answer = `I've used AWS for serverless functions and Azure for DevOps pipelines. I'm comfortable with multi‑cloud concepts.`;
    } else if (question.includes("improve [COMPANY]'s most popular product")) {
      answer = `I would gather user feedback and analyse metrics to find friction points, then iterate on small improvements.`;
    } else if (question.includes("mission and values")) {
      answer = `${displayName} focuses on innovation, customer obsession, and making technology accessible. I share those values.`;
    } else {
      answer = `I have experience with this from my previous role, where I successfully delivered similar outcomes.`;
    }
    return { question, answer };
  });
  interviewQuestionsDB[company] = questions;
});

// Helper function to get questions for a company
function getInterviewQuestions(companyId) {
  return interviewQuestionsDB[companyId] || [];
}
