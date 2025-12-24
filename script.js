document.addEventListener('DOMContentLoaded', () => {

  const typingText = document.getElementById("typing-text");

  const roles = [
    "Full Stack Developer",
    "MERN",
    "Frontend Developer",
    "DevOps Engineer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      typingText.textContent = currentRole.substring(0, charIndex);
      charIndex++;

      if (charIndex > currentRole.length) {
        deleting = true;
        setTimeout(typeLoop, 1200);
        return;
      }

      setTimeout(typeLoop, 120);
    } 
    else {
      typingText.textContent = currentRole.substring(0, charIndex);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, 200);
        return;
      }

      setTimeout(typeLoop, 60);
    }
  }

  typeLoop();
});
