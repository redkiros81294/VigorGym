document.addEventListener('DOMContentLoaded', () => {
    // Handle blog form submission
    document.getElementById('blog-form').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('blog-title').value;
        const description = document.getElementById('blog-description').value;
        const backgroundImageFile = document.getElementById('blog-background').files[0];
        const voiceFile = document.getElementById('blog-voice').files[0];
        
        if (backgroundImageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('posted-background').style.backgroundImage = `url(${e.target.result})`;
            }
            reader.readAsDataURL(backgroundImageFile);
        }
        
        document.getElementById('posted-title').textContent = title;
        document.getElementById('posted-description').textContent = description;
        
        if (voiceFile) {
            const voiceUrl = URL.createObjectURL(voiceFile);
            const downloadButton = document.createElement('a');
            downloadButton.href = voiceUrl;
            downloadButton.download = voiceFile.name;
            downloadButton.textContent = 'Download Voice';
            document.getElementById('posted-voice').innerHTML = '';
            document.getElementById('posted-voice').appendChild(downloadButton);
        } else {
            document.getElementById('posted-voice').innerHTML = '';
        }
        
        document.getElementById('posted-blog').style.display = 'block';
        
        // Add your API call or logic here to actually post the blog
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Membership cards data (dummy data for demonstration)
        const membershipCards = [
            {
                type: 'Gold',
                features: ['shower', 'locker(x large)', 'free weight', 'ice bath', 'full spa', 'aerobics', 'personal trainer', 'indoor pool', 'body scan', 'yoga'],
                price: 10999
            },
            {
                type: 'Silver',
                features: ['shower', 'locker', 'free weight', 'ice bath', 'steam', 'aerobics'],
                price: 7999
            },
            {
                type: 'Normal',
                features: ['shower', 'locker', 'free weight', 'ice bath'],
                price: 4999
            }
        ];
    
        // Function to render membership cards
        const renderMembershipCards = () => {
            const membershipCardsContainer = document.getElementById('membership-cards');
            membershipCardsContainer.innerHTML = '';
    
            membershipCards.forEach((card, index) => {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'membership-card';
                cardDiv.innerHTML = `
                    <h2>${card.type}</h2>
                    <ul class="lists">
                        ${card.features.map(feature => `<li class="list-item">${feature}</li>`).join('')}
                    </ul>
                    <p class="price"><b>${card.price}</b><small> ETB/month</small></p>
                    <button onclick="editMembership(${index})">Edit</button>
                    <button onclick="deleteMembership(${index})">Delete</button>
                `;
                membershipCardsContainer.appendChild(cardDiv);
            });
        };
    
        // Initial render of membership cards
        renderMembershipCards();
    
        // Add feature input
        document.getElementById('add-feature').addEventListener('click', () => {
            const featuresContainer = document.getElementById('features-container');
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'membership-feature';
            input.name = 'membership-feature';
            input.placeholder = 'Feature';
            input.required = true;
            featuresContainer.appendChild(input);
        });
    
        // Handle membership form submission
        document.getElementById('membership-form').addEventListener('submit', (event) => {
            event.preventDefault();
    
            const type = document.getElementById('membership-type').value;
            const features = Array.from(document.querySelectorAll('.membership-feature')).map(input => input.value);
            const price = document.getElementById('membership-price').value;
    
            const newMembership = { type, features, price };
            membershipCards.push(newMembership);
    
            renderMembershipCards();
            event.target.reset();
        });
    
        // Handle add new membership button click
        document.getElementById('add-membership').addEventListener('click', () => {
            document.getElementById('membership-form').reset();
            document.getElementById('features-container').innerHTML = `
                <input type="text" class="membership-feature" name="membership-feature" placeholder="Feature" required>
            `;
        });
    
        // Edit membership
        window.editMembership = (index) => {
            const card = membershipCards[index];
            document.getElementById('membership-type').value = card.type;
            document.getElementById('features-container').innerHTML = card.features.map(feature => `
                <input type="text" class="membership-feature" name="membership-feature" value="${feature}" required>
            `).join('');
            document.getElementById('membership-price').value = card.price;
    
            // Remove the old card from the list to update it after form submission
            membershipCards.splice(index, 1);
        };
    
        // Delete membership
        window.deleteMembership = (index) => {
            membershipCards.splice(index, 1);
            renderMembershipCards();
        };
    });
    
    // Handle about us form submission
    document.getElementById('about-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const content = document.getElementById('about-content').value;
        console.log(`Updating About Us with content: ${content}`);
        // Add your API call or logic here
    });

    // Handle class form submission
    document.getElementById('class-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('class-name').value;
        const description = document.getElementById('class-description').value;
        const imageFile = document.getElementById('class-image').files[0];
        const schedule = document.getElementById('class-schedule').value.split('\n');
        const rate = document.getElementById('class-rate').value;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('posted-class-image').src = e.target.result;
        }
        reader.readAsDataURL(imageFile);

        document.getElementById('posted-class-name').textContent = name;
        document.getElementById('posted-class-description').textContent = description;
        document.getElementById('posted-class-schedule').innerHTML = '';
        schedule.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            document.getElementById('posted-class-schedule').appendChild(li);
        });
        document.getElementById('posted-class-rate').textContent = rate;

        document.getElementById('posted-class').style.display = 'block';
        
        // Add your API call or logic here to actually post the class
    });

    // Load database data (dummy data for demonstration)
    const databaseData = [
        { userId: 1, status: 'Active', registrationDate: '2023-01-01' },
        { userId: 2, status: 'Inactive', registrationDate: '2023-02-15' },
        { userId: 3, status: 'Active', registrationDate: '2023-03-20' }
    ];

    const databaseTableBody = document.querySelector('#database-table tbody');
    databaseData.forEach(data => {
        const row = document.createElement('tr');
        Object.values(data).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        databaseTableBody.appendChild(row);
    });
});
