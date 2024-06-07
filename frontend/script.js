document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!usernameInput.value.trim()) {
            alert('Please enter a username.');
            return;
        }

        if (!passwordInput.value.trim()) {
            alert('Please enter a password.');
            return;
        }

        form.submit();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.admin-dashboard .sidebar');
  
    sidebar.addEventListener('mouseover', function() {
      document.body.classList.add('show-sidebar');
    });
  
    sidebar.addEventListener('mouseout', function() {
      document.body.classList.remove('show-sidebar');
    });
  });
  // Show the new user registration form
function showNewUserForm() {
  document.getElementById("popupForm").style.display = "flex";
}

// Close the new user registration form
function closeNewUserForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Handle form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Add your form submission logic here

  // Close the form after submission
  closeNewUserForm();
});
// Show the new user registration form
function showNewUserForm() {
  document.getElementById("popupForm").style.display = "flex";
}

// Close the new user registration form
function closeNewUserForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Handle form submission
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Add your form submission logic here

  // Close the form after submission
  closeNewUserForm();
});

// Close the form when clicking outside of the form content
window.addEventListener("click", function(event) {
  var popupForm = document.getElementById("popupForm");
  var popupFormContent = document.querySelector(".popup-form-content");
  if (event.target === popupForm && !popupFormContent.contains(event.target)) {
      closeNewUserForm();
  }
});
