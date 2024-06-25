// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
// }
//     function personalPage() {
//         window.location.href = 'personal.html';
//     }
//     const stars = document.getElementsByClassName("star");
//     const output = document.getElementById("output");

//     function gfg(n) {

//         remove();

//         for (let i = 0; i < n; i++) {
//             let cls = ["one", "two", "three", "four", "five"][n - 1];
//             stars[i].className = "star " + cls;
//         }

//         output.innerText = "Rating is: " + n + "/5";
//     }

//     function remove() {
//         for (let i = 0; i < 5; i++) {
//             stars[i].className = "star";
//         }
//     }


async function fetchUserProfile() {
    try {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const response = await fetch('/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
        }

        const userData = await response.json();
        displayUserProfile(userData);

    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        alert('Error fetching user profile. Please try again.');
    }
}



function displayUserProfile(userData) {
    const fullNameElement = document.getElementById('user-fullname');
    const usernameElement = document.getElementById('user-username');

    fullNameElement.textContent = `${userData.firstName} ${userData.lastName}`;
    usernameElement.textContent = `@${userData.username}`;
}

function logout() {
    // Remove JWT cookie
    document.cookie = 'jwt=; Max-Age=0; path=/;';
    alert('You have successfully logged out.');
    window.location.href = '/login.html';
}

function init() {
    fetchUserProfile();

    const editProfileButton = document.getElementById('edit-profile-button');
    editProfileButton.addEventListener('click', function() {
        const newUsername = prompt('Enter new username:');
        if (newUsername) {
            const userId = getCurrentUserId(); // Function to get the current user's ID
            updateProfile({ id: userId, username: newUsername });
        }
    });

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', logout);
}

document.addEventListener('DOMContentLoaded', init);

