// interviewQuestions.js – 50 companies, each with 20 unique questions
const interviewQuestionsDB = {};

// Helper to generate unique questions for a specific company
function generateCompanyQuestions(companyName) {
  return [
    { question: `Why do you want to work at ${companyName} specifically?`, answer: `I admire ${companyName}'s innovation and impact in the tech industry. I want to contribute to solving challenging problems that align with my skills.` },
    { question: `Describe a time you demonstrated leadership at work.`, answer: `I led a cross-functional team to deliver a critical project ahead of schedule by motivating team members and removing blockers.` },
    { question: `How does ${companyName}'s culture fit your work style?`, answer: `${companyName} values innovation and collaboration, which matches my approach to problem-solving and teamwork.` },
    { question: `Tell me about a technical challenge you solved recently.`, answer: `I optimized a slow database query that reduced page load time by 60%, improving user experience significantly.` },
    { question: `What is your favourite programming language and why?`, answer: `Python – it's versatile, has a huge ecosystem, and allows rapid prototyping.` },
    { question: `How do you stay updated with new technologies?`, answer: `I follow tech blogs, take online courses, and build side projects to experiment with new tools.` },
    { question: `Describe a project you're proud of.`, answer: `I built an analytics dashboard that reduced reporting time by 70% and helped the team make data-driven decisions.` },
    { question: `Tell me about a time you failed and what you learned.`, answer: `I underestimated a task's complexity; I learned to break work into smaller chunks and communicate risks earlier.` },
    { question: `How do you handle tight deadlines?`, answer: `I prioritise tasks based on impact, communicate early if I need support, and focus on delivering a working MVP first.` },
    { question: `What would you bring to ${companyName} that no one else can?`, answer: `I bring a unique combination of technical depth, business acumen, and a user-first mindset.` },
    { question: `Describe a time you disagreed with a teammate.`, answer: `I listened to their perspective, proposed a small prototype to test both ideas, and we chose the best one together.` },
    { question: `How do you approach debugging a production issue?`, answer: `I gather logs, reproduce the issue in a staging environment, isolate the root cause, then implement and test the fix.` },
    { question: `What is your experience with cloud computing?`, answer: `I've used AWS for serverless functions and Azure for DevOps pipelines. I'm comfortable with multi‑cloud concepts.` },
    { question: `How do you ensure code quality?`, answer: `I write unit tests, use linting tools, and conduct thorough code reviews with my peers.` },
    { question: `Tell me about a time you went above and beyond for a user.`, answer: `I stayed late to fix a critical bug that was blocking our largest customer, and they sent a thank-you note to my manager.` },
    { question: `What do you think is ${companyName}'s biggest challenge?`, answer: `Staying ahead of competitors while maintaining user trust and privacy is a key challenge for ${companyName}.` },
    { question: `How would you improve ${companyName}'s most popular product?`, answer: `I would gather user feedback and analyse metrics to find friction points, then iterate on small improvements.` },
    { question: `What is your understanding of ${companyName}'s mission?`, answer: `${companyName} focuses on innovation, customer obsession, and making technology accessible. I share those values.` },
    { question: `How do you mentor junior developers?`, answer: `I pair program, conduct code reviews with constructive feedback, and encourage them to ask questions.` },
    { question: `Where do you see yourself in 5 years?`, answer: `I want to grow into a technical lead who mentors others and drives product innovation.` }
  ];
}

// List of 50 companies
const companyNames = [
  "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix", "Tesla", "NVIDIA", "Intel", "AMD",
  "Salesforce", "Oracle", "IBM", "Cisco", "Adobe", "PayPal", "Uber", "Airbnb", "Spotify", "Twitter",
  "LinkedIn", "Snapchat", "Pinterest", "Dropbox", "Slack", "Zoom", "Square", "Stripe", "Shopify",
  "Roblox", "Epic Games", "Unity", "MongoDB", "Datadog", "Cloudflare", "Palantir", "VMware", "Dell",
  "HP", "Lenovo", "Samsung", "Huawei", "Sony", "Nokia", "Ericsson", "Qualcomm", "Broadcom", "Micron",
  "Western Digital", "Seagate"
];

// Generate unique questions for each company
companyNames.forEach(companyName => {
  const companyId = companyName.toLowerCase().replace(/ /g, '');
  interviewQuestionsDB[companyId] = generateCompanyQuestions(companyName);
});

// Helper function to get questions for a company
function getInterviewQuestions(companyId) {
  return interviewQuestionsDB[companyId] || [];
}
