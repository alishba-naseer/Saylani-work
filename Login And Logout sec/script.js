document.addEventListener("DOMContentLoaded", function() {
   const loginBtn = document.getElementById("login-btn");
   const logoutBtn = document.getElementById("logout-btn");
   const loginFormContainer = document.getElementById("login-form-container");
   const loginForm = document.getElementById("login-form");

   loginBtn.addEventListener("click", function(event) {
       event.preventDefault();
       loginFormContainer.style.display = "block";
   });

   loginForm.addEventListener("submit", function(event) {
       event.preventDefault();
       
       loginFormContainer.style.display = "none";
       loginBtn.style.display = "none";
       logoutBtn.style.display = "inline-block";
   });

   logoutBtn.addEventListener("click", function(event) {
       event.preventDefault();

       loginBtn.style.display = "inline-block";
       logoutBtn.style.display = "none";
       loginForm.reset();
   });
});
