// document.addEventListener('DOMContentLoaded', async () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const amount = urlParams.get('amount');
//   const type = urlParams.get('type');
//   const productName = urlParams.get('product_name');

//   if (!amount || !type || !productName) {
//     console.error('Missing payment information:', { amount, type, productName });
//     alert('Missing payment information.');
//     return;
//   }

//   const productType = type === 'class' ? 'Class' : 'Membership';

//   document.getElementById('payment-amount').textContent = `Amount: ${amount} ETB/month`;
//   document.getElementById('payment-product-name').textContent = `${productType}: ${decodeURIComponent(productName)}`;

//   document.getElementById('pay-now').addEventListener('click', async () => {
//     try {
//       const cookie = document.cookie.split('; ').find(row => row.startsWith('token='));
//       if (!cookie) {
//         alert('User not authenticated. Please log in.');
//         return;
//       }
//       const token = cookie.split('=')[1];

//       const response = await fetch('/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` // Assuming JWT is stored in cookies
//         },
//         body: JSON.stringify({ amount, type, productName })
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('Payment successful!');
//       } else {
//         console.error('Payment failed:', data);
//         alert('Payment failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during payment process:', error);
//       alert('An error occurred. Please try again.');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const amount = urlParams.get('amount');
  const type = urlParams.get('type');
  const productName = urlParams.get('product_name');
  const companyEmail = urlParams.get('company_email');
  const planType = urlParams.get('plan_type');
  const numberOfEmployees = urlParams.get('number_of_employees');

  if (!amount || !type || !productName || (type === 'enrollment' && (!companyEmail || !planType || !numberOfEmployees))) {
    console.error('Missing payment information:', { amount, type, productName, companyEmail, planType, numberOfEmployees });
    alert('Missing payment information.');
    return;
  }

  const productType = type === 'class' ? 'Class' : 'Membership';
  document.getElementById('payment-amount').textContent = `Amount: ${amount} ETB`;
  document.getElementById('payment-product-name').textContent = `${productType}: ${decodeURIComponent(productName)}`;

  document.getElementById('pay-now').addEventListener('click', async () => {
    try {
      const cookie = document.cookie.split('; ').find(row => row.startsWith('token='));
      if (!cookie) {
        alert('User not authenticated. Please log in.');
        return;
      }
      const token = cookie.split('=')[1];

      const paymentPayload = { amount, type, productName };
      if (type === 'enrollment') {
        paymentPayload['companyEmail'] = companyEmail;
        paymentPayload['planType'] = planType;
        paymentPayload['numberOfEmployees'] = numberOfEmployees;
      }

      const paymentResponse = await fetch('/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Assuming JWT is stored in cookies
        },
        body: JSON.stringify(paymentPayload)
      });

      const paymentData = await paymentResponse.json();
      if (paymentData.success) {
        if (type === 'enrollment') {
          alert(`Payment successful! Your company code is ${paymentData.companyCode}`);
        } else {
          alert('Payment successful!');
        }
      } else {
        console.error('Payment failed:', paymentData);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during payment process:', error);
      alert('An error occurred. Please try again.');
    }
  });
});
