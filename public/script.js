const form = document.getElementById('birthdayForm');
const msg = document.getElementById('msg');


form.addEventListener('submit', async (e) => {
e.preventDefault();
msg.textContent = '';
const payload = {
username: document.getElementById('username').value.trim(),
email: document.getElementById('email').value.trim(),
dateOfBirth: document.getElementById('dateOfBirth').value
};


try {
const res = await fetch('/api/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
const data = await res.json();
if (!res.ok) throw new Error(data.message || 'Error');
msg.textContent = 'Saved successfully.';
form.reset();
} catch (err) {
msg.textContent = 'Error: ' + err.message;
}
});