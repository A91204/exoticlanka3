document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Read JSON data
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Find user with matching credentials
        var user = data.users.find(u => u.username === username && u.password === password);

        if (user) {
            // Redirect user based on role
            if (user.role === "admin") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "index.html";
            }
        } else {
            alert("Invalid username or password");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
