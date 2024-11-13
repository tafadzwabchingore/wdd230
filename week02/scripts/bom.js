/*const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() { 
    //This example just checks if the input is not blank with no else branch. 
    //It just does not do anything the field is blank.
    if (input.value != '')
    
    //create a li element
    const li = document.createElement('li');

    //create a delete button
    const deleteButton = document.createElement('button');

    //populate the li elements textContent or innerHTML with the input value
    li.textContent = input.value;

    //populate the button textContent with a ❌
    deleteButton.textContent = '❌';

    //append the li element with the delete button
    li.append(deleteButton);

    //append the li element to the unordered list in your HTML
    list.append(li);

    //add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
});
    //send the focus to the input element
    input.focus();

    //change the input value to nothing or the empty string to clean up the interface for the user
    input.value = '';
 });


button.addEventListener('click', () => { ... });*/

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (input.value !== "") {
    const myItem = input.value;
    if (validChapters.includes(myItem)) {
      const listItem = document.createElement('li');
      const listText = document.createElement('span');
      const listBtn = document.createElement('button');

      listItem.appendChild(listText);
      listText.textContent = myItem;
      listItem.appendChild(listBtn);
      listBtn.textContent = '✖︎';
      list.appendChild(listItem);

      listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
      });
      input.value = '';
      input.focus();
    }
    else {
      alert("Invalid Chapter. Please enter a chapter from the Book of Mormon.")
      input.focus();
    } 
  }
  else {
    alert("Please enter a chapter.");
    input.focus();
  }
});
