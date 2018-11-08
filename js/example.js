// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul');
var newItem = document.createElement('LI');
var newText = document.createTextNode('cream');
newItem.appendChild(newText);
list[0].appendChild(newItem);


// ADD NEW ITEM START OF LIST
var newItem2 = document.createElement('LI');
var newText2 = document.createTextNode('kale');
newItem2.appendChild(newText2);
list[0].insertBefore(newItem2, list[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName('li');
var i = 0;
for(i; i < listItems.length; i++) {
  listItems[i].setAttribute('class', 'cool');
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var newEl = document.createElement('p');
var newText3 = document.createTextNode(' ' + listItems.length + ' ');
var header = document.getElementsByTagName('h2');
newEl.setAttribute('style', 'display: inline; border-radius:10px; padding: 0; font-size: 14px; border-radius: 10px; background-color: black; color: white; padding-right: 4px; margin-left: 5px;');
newEl.appendChild(newText3);
header[0].insertAdjacentElement('beforeend', newEl);
