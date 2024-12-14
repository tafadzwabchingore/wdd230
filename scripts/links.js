const baseURL = "https://tafadzwabchingore.github.io/wdd230/";

const linksURL = "https://tafadzwabchingore.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } 
  
  getLinks();

  const displayLinks = (data) => {
    const cards = document.querySelector('#links-list'); // Assuming you have a div with id 'links-list' to append links
    data.forEach((week) => {
        let card = document.createElement('div');
        let weeks = document.createElement('ul');

        weeks.textContent = `Week ${week.week}: `;

        week.links.forEach((link, index) => {
            let listItem = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            if (index < week.links.length - 1) {
                // Add pipe character between links, except for the last one
                listItem.appendChild(document.createTextNode(' | '));
            }
            weeks.appendChild(listItem);
        });

        card.appendChild(weeks);
        cards.appendChild(card);
    });
}