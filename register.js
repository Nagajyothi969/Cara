document.addEventListener("DOMContentLoaded", () => {

    // Particles Background
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 70
            },
            color: {
                value: "#00d4ff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 3
            },
            move: {
                enable: true,
                speed: 2
            },
            line_linked: {
                enable: true,
                color: "#00d4ff",
                opacity: 0.3
            }
        }
    });

    // Register Form
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const username = document
            .getElementById("registerUsername")
            .value
            .trim();

        const email = document
            .getElementById("registerEmail")
            .value
            .trim();

        const password = document
            .getElementById("registerPassword")
            .value;

        const confirmPassword = document
            .getElementById("registerConfirmPassword")
            .value;

        // Validation
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert("Email already registered");
            return;
        }

        // Save user
        users.push({
            username,
            email,
            password
        });

        localStorage.setItem("users", JSON.stringify(users));

        // Login session
        localStorage.setItem("loggedInUser", email);

        alert("Registration Successful!");

        // Redirect
        window.location.href = "index.html";

    });

});
