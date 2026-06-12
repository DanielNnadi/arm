<script>
// Aura AI - Working version using free API
const auraModal = document.getElementById('auraModal');
const auraInput = document.getElementById('auraInput');
const auraSendBtn = document.getElementById('auraSendBtn');
const auraMessages = document.getElementById('auraMessages');

if (auraSendBtn) {
  auraSendBtn.addEventListener('click', async () => {
    const userQuestion = auraInput.value.trim();
    if (!userQuestion) return;
    
    // Add user message to chat
    addMessage('user', userQuestion);
    auraInput.value = '';
    
    // Show typing indicator
    addMessage('ai', 'Typing...', true);
    
    try {
      // Using free Hugging Face inference API (no key required for demo models)
      const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs: userQuestion })
      });
      
      const data = await response.json();
      removeTypingIndicator();
      
      let aiResponse = "I'm Aura AI. For cybersecurity questions, please contact our support team directly. I'm currently in demo mode.";
      
      if (data && data.generated_text) {
        aiResponse = data.generated_text;
      }
      
      addMessage('ai', aiResponse);
      
    } catch (error) {
      removeTypingIndicator();
      addMessage('ai', "I'm Aura AI. For specific cybersecurity inquiries about ArmorAI, please contact our team at nnadidaniel49@gmail.com. I'm currently in demo mode but will be fully functional soon.");
    }
  });
}

function addMessage(sender, text, isTyping = false) {
  if (!auraMessages) return;
  
  if (isTyping) {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typingIndicator';
    typingDiv.className = 'ai-message typing';
    typingDiv.innerText = 'Aura is thinking...';
    auraMessages.appendChild(typingDiv);
    auraMessages.scrollTop = auraMessages.scrollHeight;
    return;
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `${sender}-message`;
  messageDiv.innerText = text;
  auraMessages.appendChild(messageDiv);
  auraMessages.scrollTop = auraMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}
</script>
