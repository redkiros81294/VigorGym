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
function businessForm() {
        window.location.href = 'bm-form.html';
}
    
//enrollment handling
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gold, .silver, .normal').forEach(card => {
    card.addEventListener('click', () => {
      const price = card.getAttribute('data-price');
      const type = card.getAttribute('data-type');
      const userId = card.getAttribute('data-user-id');
      const productName = card.querySelector('h2').textContent.trim();
      if (!price || !type || !userId || !productName) {
        console.error('Missing membership information:', { price, type, userId, productName });
        alert('Missing membership information.');
        return;
      }
      window.location.href = `/payment.html?amount=${price}&type=membership&user_id=${userId}&product_name=${encodeURIComponent(productName)}`;
    });
  });
});

//membership perchase
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gold, .silver, .normal').forEach(card => {
    card.addEventListener('click', () => {
      const price = card.getAttribute('data-price');
      const type = card.getAttribute('data-type');
      const userId = card.getAttribute('data-user-id');
      const productName = card.querySelector('h2').textContent.trim();
      if (!price || !type || !userId || !productName) {
        console.error('Missing membership information:', { price, type, userId, productName });
        alert('Missing membership information.');
        return;
      }
      window.location.href = `/payment.html?amount=${price}&type=membership&user_id=${userId}&product_name=${encodeURIComponent(productName)}`;
    });
  });
});

  