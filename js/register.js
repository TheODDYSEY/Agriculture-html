// Register form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add registration logic if needed
    alert("Registered successfully!");
    window.location.href = 'index.html';  // Redirect to the landing page after registration
});