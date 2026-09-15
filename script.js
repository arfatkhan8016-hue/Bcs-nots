const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const dashboardContainer = document.getElementById('dashboard-container');
const displayUser = document.getElementById('display-user');
const logoutBtn = document.getElementById('logout-btn');

// Handle Login Form Submit
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    
    if(username !== "") {
        // Show Welcome name
        displayUser.textContent = `Welcome, ${username}`;
        
        // Switch views (Hide login, show dashboard)
        loginContainer.classList.add('hidden');
        dashboardContainer.classList.remove('hidden');
    }
});

// Handle Logout
logoutBtn.addEventListener('click', function() {
    dashboardContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    loginForm.reset();
});
