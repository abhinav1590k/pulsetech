document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (validateLogin(username, password, role)) {
        if (role === 'admin') {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('admin-dashboard').style.display = 'block';
        } else {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('employee-dashboard').style.display = 'block';
        }
    } 
});

function validateLogin(username, password, role) {
    // Simulated database check for login credentials
    const validAdmin = { username: 'admin', password: 'admin' };
    const validEmployee = { username: 'leader', password: 'leader' };

    if (role === 'admin' && username === validAdmin.username && password === validAdmin.password) {
        window.location.href = 'admin.html';
    }
    
    else if (role === 'employee' && username === validEmployee.username && password === validEmployee.password) {
        window.location.href = 'team.html';;
    }
    
    
}


document.querySelector('.contact-link').addEventListener('click', function() {
    document.getElementById('contact-popup').classList.add('active');
});

function closeContactPopup() {
    document.getElementById('contact-popup').classList.remove('active');
}