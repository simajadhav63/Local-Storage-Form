document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userDataContainer = document.getElementById('userData');
    const themeSelector = document.getElementById('theme');
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      themeSelector.value = savedTheme;
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
  
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
  
      userDataContainer.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;
    });
  
    themeSelector.addEventListener('change', () => {
      const selectedTheme = themeSelector.value;
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });
  
});