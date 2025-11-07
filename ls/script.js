// Eyeballs follow mouse
document.addEventListener("mousemove", (e) => {
  const eyeballs = document.querySelectorAll(".eyeball");

  eyeballs.forEach((ball) => {
    let x = (e.clientX * 10) / window.innerWidth;
    let y = (e.clientY * 10) / window.innerHeight;
    ball.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Hide eyes when typing password
const password = document.getElementById("password");
const leftHand = document.querySelector(".hand.left");
const rightHand = document.querySelector(".hand.right");

password.addEventListener("focus", () => {
  leftHand.style.top = "60px";
  rightHand.style.top = "60px";
});

password.addEventListener("blur", () => {
  leftHand.style.top = "130px";
  rightHand.style.top = "130px";
});
