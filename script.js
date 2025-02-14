function createHeart() {
  for (let i = 0; i < 6; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "&#10084;";
      document.querySelector(".container").appendChild(heart);

      const size = Math.random() * 60 + 20;
      heart.style.fontSize = `${size}px`;
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      
      // Set random values for the horizontal and vertical movement
      const randomX = Math.random();
      const randomY = Math.random();

      heart.style.setProperty('--random-x', randomX);
      heart.style.setProperty('--random-y', randomY);
      
      // Apply a rotation based on the horizontal movement
      const rotation = randomX * 360; // Random rotation based on horizontal movement
      heart.style.transform += ` rotate(${rotation}deg)`;

      setTimeout(() => {
          heart.remove();
      }, 5000);
  }
}
