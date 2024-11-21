const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function displayList(item){
    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = 'X';

    // Event listener for the delete button 
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
}

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"))
}
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((chap) => chap !== chapter);
    setChapterList();
}

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});