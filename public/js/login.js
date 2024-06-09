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
