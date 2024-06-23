// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const amount = urlParams.get('amount');
//     const type = urlParams.get('type');
//     const userId = urlParams.get('user_id');
    
//     if (!amount || !type || !userId) {
//       alert('Missing payment information.');
//       return;
//     }
    
//     document.getElementById('payment-amount').textContent = `Amount: $${amount} ETB/month`;

//     document.getElementById('pay-now').addEventListener('click', () => {
//       fetch('/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ amount, type, userId })
//       })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           alert('Payment successful!');
//         } else {
//           alert('Payment failed. Please try again.');
//         }
//       });
//     });
//   });

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const amount = urlParams.get('amount');
  const type = urlParams.get('type');
  
  if (!amount || !type) {
    alert('Missing payment information.');
    return;
  }

  document.getElementById('payment-amount').textContent = `Amount: $${amount} ETB/month`;

  document.getElementById('pay-now').addEventListener('click', () => {
    fetch('/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, type })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Payment successful!');
      } else {
        alert('Payment failed. Please try again.');
      }
    });
  });
});
