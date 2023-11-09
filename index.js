let popupLink = document.getElementById("popup-link");
let overlay = document.getElementById("overlay");
let popupWindow = document.getElementById("fancybox-content");
let closeButton = document.getElementById("close-btn");
popupLink.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.style.display = "block";
  popupWindow.style.display = "block";
});
closeButton.addEventListener("click", function() {
  overlay.style.display = "none";
  popupWindow.style.display = "none";
});



document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");
  let originalBackgroundColor = header.style.backgroundColor;
  window.addEventListener("scroll", function () {
    if (window.scrollY > 2) {
      header.style.backgroundColor="rgba(40,40,40,0.9)";
    }
    else {
      header.style.backgroundColor = originalBackgroundColor;
    }
  });
});




window.addEventListener('load', function() {
  var loginButton = document.getElementById('login_form_button');

  if (loginButton) {
    loginButton.addEventListener('click', function() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var registeredUsername = localStorage.getItem('registeredUsername');
      var registeredPassword = localStorage.getItem('registeredPassword');
      var isLoggedIn = localStorage.getItem('isLoggedIn');
      
      if (isLoggedIn === 'true') {
        alert('Welcome back! You are already logged in.');
      } 
      else if (username === registeredUsername && password === registeredPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        document.getElementById('login_response').innerHTML = 'Login successful';
        alert('Successfully logged in!');
      } 
      else {
        localStorage.setItem('isLoggedIn', 'false');
        document.getElementById('login_response').innerHTML = 'Login failed';
        alert('Login failed! Please check your credentials.');
      }
    });
  }

  var registerButton = document.getElementById('register_button');

  if (registerButton) {
    registerButton.addEventListener('click', function() {
      var regUsername = document.getElementById('reg_username').value;
      var regPassword = document.getElementById('reg_password').value;
      var isLoggedIn = localStorage.getItem('isLoggedIn');

      if (isLoggedIn === 'true') {
        alert('You are already logged in. Please logout before registering with different credentials.');
      } 
      else if (regUsername.trim() === '' || regPassword.trim() === '') {
        alert('Please enter both username and password for registration.');
      } 
      else {
        localStorage.setItem('registeredUsername', regUsername);
        localStorage.setItem('registeredPassword', regPassword);
        alert('Registration successful! You can now log in with your new credentials.');
      }
    });
  }
});
