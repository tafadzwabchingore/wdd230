fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const membersContainer = document.getElementById('#members-container');
        const gridViewButton = document.getElementById('grid-view');
        const listViewButton = document.getElementById('list-view');

        gridViewButton.addEventListener('click', () => {
            membersContainer.innerHTML = '';
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('#member-card');
                memberCard.innerHTML = `
                            <img src="${member.image}" alt="${member.name}">
                            <h2>${member.name}</h2>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}" target="_blank">Visit Website</a>
                            <p>${member.membershipLevel}</p>
                            <p>${member.otherInfo}</p>
                        `;
                membersContainer.appendChild(memberCard);
            });
        });

        listViewButton.addEventListener('click', () => {
            membersContainer.innerHTML = '';
            data.forEach(member => {
                const listItem = document.createElement('div');
                listItem.classList.add('list-item');
                listItem.innerHTML = `
                            <h2>${member.name}</h2>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}" target="_blank">Visit Website</a>
                            <p>${member.membershipLevel}</p>
                            <p>${member.otherInfo}</p>
                        `;
                membersContainer.appendChild(listItem);
            });
        });

        gridViewButton.click();
    });