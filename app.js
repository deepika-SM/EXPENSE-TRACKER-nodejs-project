window.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('signup-form');
  
    // Check if the form element exists
    if (form) {
      // Add event listener for form submission
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from being submitted
  
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Create an object to store the form data
        const formData = {
          name: name,
          email: email,
          password: password
        };
  
        // Store the form data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));
  
        // Redirect the user to a success page or perform any other actions
        window.location.href = 'index.html';
      });
    }
  });
  