// Star rain effect
const starContainer = document.querySelector(".star-rain");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerHTML = "★";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  star.style.fontSize = 8 + Math.random() * 4 + "px";
  star.style.color = "#fff9bd";
  star.style.opacity = Math.random();
  star.style.animationDelay = Math.random() * 5 + "s";
  starContainer.appendChild(star);
}

// Add particle animation
const particleStyle = document.createElement("style");
particleStyle.textContent = `
            @keyframes particleFloat {
                0% {
                    opacity: 0;
                    transform: translateY(30px) scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: translateY(-20px) scale(1) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-80px) scale(0) rotate(360deg);
                }
            }
        `;
document.head.appendChild(particleStyle);

// Enhanced hover effects
document.querySelectorAll(".location-card, .name-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.filter = "brightness(1.1) saturate(1.2)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.filter = "brightness(1) saturate(1)";
  });
});

// Advanced ripple effect
document.querySelectorAll(".location-card, .name-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background =
      "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "advancedRipple 0.8s ease-out";
    ripple.style.pointerEvents = "none";
    ripple.style.zIndex = "1000";

    this.appendChild(ripple);
    createParticle();

    setTimeout(() => ripple.remove(), 800);
  });
});

// Add advanced ripple animation
const advancedRippleStyle = document.createElement("style");
advancedRippleStyle.textContent = `
            @keyframes advancedRipple {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                50% {
                    transform: scale(0.5);
                    opacity: 0.5;
                }
                100% {
                    transform: scale(1);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(advancedRippleStyle);
