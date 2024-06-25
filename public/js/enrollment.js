// document.getElementById('business-membership-form').addEventListener('submit', async (event) => {
//     event.preventDefault();
    
//     const companyName = document.getElementById('company-name').value;
//     const companyEmail = document.getElementById('company-email').value;
//     const planType = document.getElementById('plan-type').value;
//     const numberOfEmployees = parseInt(document.getElementById('number-of-employees').value, 10);
    
//     const pricePerEmployee = {
//       gold: 10999,
//       silver: 7999,
//       normal: 4999
//     }[planType];
  
//     let totalAmount = numberOfEmployees * pricePerEmployee;
//     if (numberOfEmployees > 20) {
//       totalAmount *= 0.9; // Apply 10% discount
//     }
  
//     try {
//       const response = await fetch('/enroll', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ companyName, companyEmail, planType, numberOfEmployees, totalAmount })
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         alert(`Enrollment successful! Your company code is ${result.companyCode}`);
//       } else {
//         alert(`Enrollment failed: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error during enrollment process:', error);
//       alert('An error occurred. Please try again.');
//     }
//   });
  

document.getElementById('business-membership-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const companyName = document.getElementById('company-name').value;
  const companyEmail = document.getElementById('company-email').value;
  const planType = document.getElementById('plan-type').value;
  const numberOfEmployees = parseInt(document.getElementById('number-of-employees').value, 10);

  const pricePerEmployee = {
    gold: 10999,
    silver: 7999,
    normal: 4999
  }[planType];

  let totalAmount = numberOfEmployees * pricePerEmployee;
  if (numberOfEmployees > 20) {
    totalAmount *= 0.9; // Apply 10% discount
  }

  // Redirect to the payment page with the necessary parameters
  window.location.href = `/payment.html?amount=${totalAmount}&type=enrollment&product_name=${encodeURIComponent(companyName)}&company_email=${encodeURIComponent(companyEmail)}&plan_type=${encodeURIComponent(planType)}&number_of_employees=${numberOfEmployees}`;
});
