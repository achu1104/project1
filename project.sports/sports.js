// Scroll to Section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle Registration Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let sport = document.getElementById('sport').value;

    if (!name || !email || !sport) {
        alert("Please fill all fields.");
        return;
    }

    let student = { name, email, sport };
    let registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    registrations.push(student);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    alert("Registration Successful!");
    document.getElementById('registrationForm').reset();
});
