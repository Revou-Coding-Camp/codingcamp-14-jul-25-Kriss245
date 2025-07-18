document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const userNameSpan = document.getElementById("userName");

// Real-time greeting update
nameInput.addEventListener("input", function () {
  userNameSpan.textContent = nameInput.value.trim() || "Guest";
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been received.`);

  form.reset();
  userNameSpan.textContent = "Guest";
  });
});
