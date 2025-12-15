function login() {
  const email = document.getElementById('email').value;

  if (!email) {
    alert('Please enter email');
    return;
  }

  localStorage.setItem('userEmail', email);
  window.location.href = 'dashboard.html';
}
