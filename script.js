// Function to update greeting based on time
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = 'Good Morning!';
    } else if (hour < 18) {
        greetingElement.textContent = 'Good Afternoon!';
    } else {
        greetingElement.textContent = 'Good Evening!';
    }
}

// Function to toggle light/dark theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

// Function to toggle team visibility
function toggleTeam() {
    const teamContainer = document.getElementById('teamContainer');
    if (teamContainer.style.display === 'none' || teamContainer.style.display === '') {
        teamContainer.style.display = 'flex';
    } else {
        teamContainer.style.display = 'none';
    }
}

// Event listeners
document.getElementById('changeTheme').addEventListener('click', toggleTheme);
document.getElementById('toggleTeam').addEventListener('click', toggleTeam);

// Initial setup
document.body.classList.add('light-theme'); // Default theme
updateGreeting(); // Set initial greeting
