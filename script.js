function showGift(person) {
    const homepage = document.getElementById('homepage');
    const giftPage = document.getElementById('gift-page');
    const giftMessage = document.getElementById('gift-message');
    const gifts = document.getElementById('gifts');
    const confettiDiv = document.getElementById('confetti');
  
    homepage.classList.add('hidden');
    giftPage.classList.remove('hidden');
  
    // Add celebration effect
    confettiDiv.innerHTML = '🎉🎉🎉🎉🎉🎉';
  
   
  }
  
  function goBack() {
    const homepage = document.getElementById('homepage');
    const giftPage = document.getElementById('gift-page');
  
    homepage.classList.remove('hidden');
    giftPage.classList.add('hidden');
  }
  