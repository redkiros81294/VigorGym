
// async function submitBlogForm(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     const response = await fetch('/api/blogs', {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//         },
//         body: formData
//     });

//     if (response.ok) {
//         const data = await response.json();
//         alert('Blog submitted successfully');
//     } else {
//         console.error('Failed to submit blog form');
//     }
// }

// function addFeature() {
//     const container = document.getElementById('features-container');
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.className = 'membership-feature';
//     input.name = 'features';
//     input.placeholder = 'Feature';
//     input.required = true;
//     container.appendChild(input);
// }

// async function submitMembershipForm(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     const features = Array.from(document.querySelectorAll('.membership-feature'))
//         .map(input => input.value);

//     const data = {
//         type: formData.get('type'),
//         features: features,
//         price: formData.get('price')
//     };

//     const response = await fetch('/api/memberships', {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });

//     if (response.ok) {
//         const result = await response.json();
//         alert('Membership submitted successfully');
//     } else {
//         console.error('Failed to submit membership form');
//     }
// }

// async function submitClassForm(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     const response = await fetch('/api/classes', {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//         },
//         body: formData
//     });

//     if (response.ok) {
//         const data = await response.json();
//         alert('Class submitted successfully');
//     } else {
//         console.error('Failed to submit class form');
//     }
// }

// async function fetchDatabaseData() {
//     const response = await fetch('/api/users', {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//         }
//     });

//     if (response.ok) {
//         const data = await response.json();
//         populateDatabaseTable(data);
//     } else {
//         console.error('Failed to fetch database data');
//     }
// }

// function populateDatabaseTable(users) {
//     const tableBody = document.querySelector('#database-table tbody');
//     tableBody.innerHTML = '';

//     users.forEach(user => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${user._id}</td>
//             <td>${user.status}</td>
//             <td>${new Date(user.registrationDate).toLocaleDateString()}</td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     fetchDatabaseData();
// });
// function addFeature() {
//     const container = document.getElementById('features-container');
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.className = 'membership-feature';
//     input.name = 'features';
//     input.placeholder = 'Feature';
//     container.appendChild(input);
// }






// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
// }

// function personalPage() {
//     window.location.href = 'personal.html';
// }

// function loginPage() {
//     window.location.href = 'login.html';
// }

// const stars = document.getElementsByClassName("star");
// const output = document.getElementById("output");

// function gfg(n) {
//     remove();
//     for (let i = 0; i < n; i++) {
//         let cls = ["one", "two", "three", "four", "five"][n - 1];
//         stars[i].className = "star " + cls;
//     }
//     output.innerText = "Rating is: " + n + "/5";
// }

// function remove() {
//     for (let i = 0; i < 5; i++) {
//         stars[i].className = "star";
//     }
// }

// async function login() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const response = await fetch('/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const result = await response.json();

//     if (response.status === 200) {
//       window.location.href = result.redirectUrl;
//     } else {
//       alert(result.message);
//     }
//   }


async function submitBlogForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        displayPostedBlog(data);
        alert('Blog submitted successfully');
    } else {
        console.error('Failed to submit blog form');
    }
}

function displayPostedBlog(blog) {
    document.getElementById('posted-title').innerText = blog.title;
    document.getElementById('posted-description').innerText = blog.description;
    document.getElementById('posted-background').style.backgroundImage = `url(${blog.backgroundImage})`;
    if (blog.voice) {
        const audio = document.createElement('audio');
        audio.src = blog.voice;
        audio.controls = true;
        document.getElementById('posted-voice').appendChild(audio);
    }
    document.getElementById('posted-blog').style.display = 'block';
}

function addFeature() {
    const container = document.getElementById('features-container');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'membership-feature';
    input.name = 'features';
    input.placeholder = 'Feature';
    container.appendChild(input);
}

async function submitMembershipForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch('/api/memberships', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        displayMembershipCard(data);
        alert('Membership submitted successfully');
    } else {
        console.error('Failed to submit membership form');
    }
}

function displayMembershipCard(membership) {
    const container = document.getElementById('membership-cards');
    const card = document.createElement('div');
    card.className = 'membership-card';
    card.innerHTML = `
        <h3>${membership.type}</h3>
        <ul>${membership.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
        <p>${membership.price} ETB/month</p>
    `;
    container.appendChild(card);
}

async function submitClassForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch('/api/classes', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        displayPostedClass(data);
        alert('Class submitted successfully');
    } else {
        console.error('Failed to submit class form');
    }
}

function displayPostedClass(classData) {
    document.getElementById('posted-class-image').src = classData.image;
    document.getElementById('posted-class-name').innerText = classData.name;
    document.getElementById('posted-class-description').innerText = classData.description;
    document.getElementById('posted-class-schedule').innerHTML = classData.schedule.map(item => `<li>${item}</li>`).join('');
    document.getElementById('posted-class-rate').innerText = classData.rate;
    document.getElementById('posted-class').style.display = 'block';
}

async function fetchDatabase() {
    const response = await fetch('/api/database', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        populateDatabaseTable(data);
    } else {
        console.error('Failed to fetch database');
    }
}

function populateDatabaseTable(data) {
    const tableBody = document.getElementById('database-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.userId}</td>
            <td>${row.status}</td>
            <td>${row.registrationDate}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Fetch database data on page load
document.addEventListener('DOMContentLoaded', fetchDatabase);
