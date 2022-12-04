//ParentNode & parentElement
var itemList=document.querySelector('#items');
//undefined
console.log(itemList.parentNode);
//VM876:1 <div id=​"main" class=​"card card-body">​…​</div>​flex   
//undefined
itemList.parentNode.style.backgroundColor='#f4f4f4';
//'#f4f4f4'
itemList.parentElement.style.backgroundColor='red';
//'red'
//childNode & children
console.log(itemList.childNodes);//nodelist
console.log(itemlist.children);//HTML collection
var itemList=document.querySelector('#items');
console.log(itemList.children[1]);
//VM1879:1 <li class=​"list-group-item">​Item 2​</li>​
itemList.children[1].style.backgroundColor='yellow';
//'yellow'
console.log(itemList.firstChild);
//VM2175:1 #text
console.log(itemList.firstElementChild);
//VM2294:1 <li class=​"list-group-item">​Item 1​</li>​
itemList.firstElementChild.textContent='Hello';
//'Hello'
itemList.lastElementChild.textContent='Regards';
//'Regards'
console.log(itemList.lastChild);
//VM2632:1 #text
//siblings
var itemList=document.querySelector('#items');
console.log(itemList.nextSibling);
//VM2794:1 #text
console.log(itemList.nextElementSibling);
//VM2989:1 null
console.log(itemList.previousSibling);
//VM3112:1 #text
console.log(itemList.previousElementSibling)
//VM3264:1 <h2 class=​"title">​Items​</h2>​
itemList.previousElementSibling.style.fontWeight='bold';
//'bold'
var newDiv = document.createElement('div');
console.log(newDiv);
//VM3618:1 <div>​</div>​
newDiv.className='hello';
//'hello'
console.log(newDiv);
//VM3761:1 <div class=​"hello">​</div>​
newDiv.id='hello1';
//'hello1'
console.log(newDiv);
//VM3893:1 <div class=​"hello" id=​"hello1">​</div>​
newDiv.setAttribute('title','hello title');
console.log(newDiv);
//VM4104:1 <div class=​"hello" id=​"hello1" title=​"hello title">​</div>​
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
//"Hello World"
console.log(newDiv);
//VM4396:1 <div class=​"hello" id=​"hello1" title=​"hello title">​Hello World​</div>​
var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
//<div class=​"hello" id=​"hello1" title=​"hello title">​Hello World​</div>​
newDiv.style.fontSize='30px';
//'30px'