document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("loggedIn", "true"); // login no localstorage
  window.location.href = "index.html";
});
