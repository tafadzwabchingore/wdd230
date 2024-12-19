document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch('data/members.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Filter members with silver or gold membership levels
        var qualifiedMembers = data.companies.filter(function(member) {
            return member.membership_level === "Silver" || member.membership_level === "Gold";
        });

        // Randomly select two to three members
        var randomMembers = selectRandomMembers(qualifiedMembers, 2, 3);

        // Display selected members on the home page
        displayMembers(randomMembers);
    })
    .catch(function(error) {
        console.error('Error fetching JSON data:', error);
    });
});

// Function to select random members from the qualified list
function selectRandomMembers(members, minCount, maxCount) {
    const randomCount = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    const randomMembers = [];
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    for (let i = 0; i < randomCount; i++) {
        randomMembers.push(shuffledMembers[i]);
    }
    return randomMembers;
}

// Function to display selected members on the home page
function displayMembers(members) {
    const container = document.querySelector('.members-container');
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        memberDiv.innerHTML = `
            <div class="member-info">
            <img class="member-image" src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>Industry: ${member.industry}</p>
            </div>
        `;
        container.appendChild(memberDiv);
    });
}