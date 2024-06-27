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
      const classButtons = document.querySelectorAll('.join-class');
    
      classButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          const classCard = event.target.closest('.class');
          const price = classCard.getAttribute('data-price');
          const type = classCard.getAttribute('data-type');
          const classId = classCard.querySelector('.class-title').textContent.trim().toLowerCase();
          const productName = classCard.querySelector('.class-title').textContent.trim();
    
          window.location.href = `/payment.html?amount=${price}&type=${type}&product_name=${encodeURIComponent(productName)}&class_id=${classId}`;
        });
      });
    });
    
    
    
      