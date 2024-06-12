function flipCard() {
    var card = document.querySelector('.flip-card');
    card.classList.toggle('flipped');
}
    const checkbox = document.getElementById('check-box');
  const inputContainer = document.getElementById('company-code');
  const inputContainer1 = document.getElementById('company_code');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      inputContainer.classList.remove('hidden');
      inputContainer1.classList.remove('hidden');
      inputContainer.required = this.checked;
    } else {
      inputContainer.classList.add('hidden');
      inputContainer1.classList.add('hidden');
    }
  });

    document.getElementById("signup-form").addEventListener("submit", function(event) {
            var password = document.getElementById("password").value;
           var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
                document.getElementById("message").textContent = "Passwords do not match";
                event.preventDefault();
                document.getElementById("lengthMessage").textContent = "";

            }

            else {
             if (password.length < 8) {
             document.getElementById("message").textContent = "";
                document.getElementById("lengthMessage").textContent = "Password should be at least 8 characters long";
                event.preventDefault();
            }
            else{
                event.target.submit();
                }
            }
        });

        document.querySelector('form[action="/auth/login"]').addEventListener('submit', async (e) => {
          e.preventDefault();
          const response = await fetch('/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  email: document.getElementById('login-email').value,
                  password: document.getElementById('login-password').value,
              })
          });
          const result = await response.json();
          alert(result.message);
      });
      
      document.querySelector('form[action="/auth/signup"]').addEventListener('submit', async (e) => {
          e.preventDefault();
          const response = await fetch('/auth/signup', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  email: document.getElementById('signup-email').value,
                  firstName: document.getElementById('first_name').value,
                  lastName: document.getElementById('last_name').value,
                  username: document.getElementById('username').value,
                  password: document.getElementById('password').value,
                  confirmPassword: document.getElementById('confirmPassword').value,
              })
          });
          const result = await response.json();
          alert(result.message);
      });
      