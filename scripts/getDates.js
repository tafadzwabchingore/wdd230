const date = new Date();
const year = date.getFullYear();
const author = `Devun Fox Durst`
const country = `USA`

document.getElementById('dateTime').innerHTML
=`&copy${year}`;
document.getElementById('author').innerHTML=`Devun Fox Durst`;
document.getElementById('country').innerHTML=`USA`;

// javaScript for last Modified
const LastModif = document.lastModified;
document.getElementById('modifiedTime').innerHTML
=`Last modified: ${LastModif}`;