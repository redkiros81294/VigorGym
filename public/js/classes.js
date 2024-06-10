function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}
    function personalPage() {
        window.location.href = 'personal.html';
    }
    const stars = document.getElementsByClassName("star");
    const output = document.getElementById("output");

    function gfg(n) {

        remove();

        for (let i = 0; i < n; i++) {
            let cls = ["one", "two", "three", "four", "five"][n - 1];
            stars[i].className = "star " + cls;
        }

        output.innerText = "Rating is: " + n + "/5";
    }

    function remove() {
        for (let i = 0; i < 5; i++) {
            stars[i].className = "star";
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const classButtons = document.querySelectorAll('.card-button');
      
        classButtons.forEach(button => {
          button.addEventListener('click', async (event) => {
            const classCard = event.target.closest('.class');
            const classId = classCard.querySelector('.class-title').textContent.trim().toLowerCase();
            const amount = classCard.querySelector('.birr').textContent.trim();
            const email = prompt("Please enter your email:");
            const firstName = prompt("Please enter your first name:");
            const lastName = prompt("Please enter your last name:");
      
            if (email && firstName && lastName) {
              try {
                const response = await fetch('/class/payment', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    classId,
                    amount,
                    currency: 'ETB',
                    email,
                    first_name: firstName,
                    last_name: lastName
                  })
                });
                
                const paymentData = await response.json();
                if (paymentData.checkout_url) {
                  window.location.href = paymentData.checkout_url;
                } else {
                  alert('Error initializing payment');
                }
              } catch (error) {
                console.error('Error:', error);
                alert('Error initializing payment');
              }
            } else {
              alert('All fields are required');
            }
          });
        });
      });
      