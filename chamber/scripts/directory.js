document.addEventListener("DOMContentLoaded", switchDir);

function switchDir() {
    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");
    const memberGrid = document.getElementById("memberGrid");
    const memberList = document.getElementById("memberList");

    gridButton.addEventListener("click", function() {
        gridButton.classList.add("active");
        listButton.classList.remove("active");
        memberGrid.style.display = "grid";
        memberList.style.display = "none";
    });

    listButton.addEventListener("click", function() {
        listButton.classList.add("active");
        gridButton.classList.remove("active");
        memberList.style.display = "block";
        memberGrid.style.display = "none";
    });
}

/*member-cards*/

document.addEventListener("DOMContentLoaded", function() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const memberGrid = document.getElementById("memberGrid");
            data.companies.forEach(company => {
                const card = createMemberCard(company);
                memberGrid.appendChild(card);

            });
        })
        .catch(error => console.error("Error fetching data:", error));

    function createMemberCard(company) {
        const section = document.createElement("section");

        // Add logo
        const logo = document.createElement("img");
        logo.src = company.image;
        section.appendChild(logo);

        // Add name
        const name = document.createElement("h4");
        name.textContent = company.name;
        section.appendChild(name);

        //add memebership type
        const membershipType = document.createElement("p");
        membershipType.innerHTML = "<strong>Membership Type:</strong> " + company.membership_level;
        section.appendChild(membershipType);

        // Add address
        const address = document.createElement("p");
        address.innerHTML = "<strong>Address:</strong> " + company.address;
        section.appendChild(address);

        // Add phone number
        const phone = document.createElement("p");
        phone.innerHTML = "<strong>Phone:</strong> " + company.phone;
        section.appendChild(phone);

        // Add website link
        const websiteLink = document.createElement("a");
        websiteLink.href = company.website;
        websiteLink.textContent = company.website;
        websiteLink.setAttribute("target", "_blank"); // Optional: Opens the link in a new tab

        // Create paragraph element
        const websiteParagraph = document.createElement("p");
        websiteParagraph.innerHTML = "<strong>Website: </strong>"; // Strong tag for the label
        websiteParagraph.appendChild(websiteLink); // Append the link to the paragraph

        // Append the paragraph to the section
        section.appendChild(websiteParagraph);


        const article = document.createElement("article");
        article.appendChild(section);

        return article;
    }
});

/*ge-directory*/
document.addEventListener("DOMContentLoaded", function() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const memberList = document.getElementById("memberList");
            data.companies.forEach(company => {
                const listItem = createMemberListItem(company);
                memberList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));

    function createMemberListItem(company) {
        const listItem = document.createElement("li");
        listItem.classList.add("member-item"); // Add a class for styling

        // Add name
        const name = document.createElement("h3");
        name.textContent = company.name;
        listItem.appendChild(name);

        // Add address
        const address = document.createElement("p");
        address.textContent = "Address: " + company.address;
        listItem.appendChild(address);

        // Add phone number
        const phone = document.createElement("p");
        phone.textContent = "Phone: " + company.phone;
        listItem.appendChild(phone);

        // Add website
        const website = document.createElement("p");
        website.textContent = "Website: " + company.website;
        listItem.appendChild(website);

        return listItem;
    }
});

/*member-data*/
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