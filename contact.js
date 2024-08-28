document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Clear the form fields
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('Number').value = "";
  document.getElementById('message').value = "";

  // Show an alert
  alert("Form has been submitted successfully!");
  
  // Optionally, send the form data via EmailJS or handle further processing here
});
