const listQuery = document.querySelectorAll('li');
listQuery.innerHTML = "";

//putting nodeList into an Array
const contacts = Array.from(listQuery);

var current_page = 1;
const rows = 10;

//to get the extra 4contacts as a whole numbers
var page_no = Math.ceil(contacts.length/rows);
console.log(page_no);

//number of contacts
console.log(contacts.length);

//creating id to ul
const element = document.getElementsByTagName('ul')[0];
element.id = "contactList";
var contactID = document.getElementById('contactList');

function DisplayContacts(items, wrapper, rows_per_page, page){
    // wrapper.innerHTML = "";
    page--;
    //start = 0;
    let start = rows_per_page * page;
    // end = 10;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    //emptying the ul
    wrapper.innerHTML = "";
    for(let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];
        contactID.innerHTML +='<li class = "contact-item cf">'+  item.innerHTML     + '</li>';
    }
}
const div = document.createElement('div');
div.id = 'pagination';
div.className = 'pagination';
document.getElementsByClassName('page')[0].id = "page";
document.getElementById('page').appendChild(div);

const pages = document.getElementById('pagination');
DisplayContacts(contacts, contactID, rows, current_page); 
// const link = document.createElement('a');  
// console.log(link.innerHTML);
// document.getElementById('btn').appendChild(link);
function SetupPages (wrapper){
    wrapper.innerHTML = "";
    let list = document.createElement('li');   
    list.id = 'list';  
    let button = document.createElement('button'); 
    button.id ='btn';  
    button.className = 'btn';   
    button.style.cssText ='border: none; padding: 0; background: none'  
    document.getElementById('pagination').appendChild(list);    
    document.getElementById('list').appendChild(button);
    for(i = 1; i <page_no+1; i++){
        DisplayButtons(i);
    }
}

function DisplayButtons(page){      
const link = document.createElement('a');  
console.log(link.innerHTML);
document.getElementById('btn').appendChild(link);
    link.innerText = page;
    if(current_page == page) {link.classList.add('active')};
    link.addEventListener('click', function(){ 
        if(current_page == page) {link.classList.add('active')};
        current_page = page;
        DisplayContacts(contacts, contactID, rows, current_page); 
        let current_btn = document.querySelector('li a.active');
        current_btn.classList.remove('active');
        link.classList.add('active');
    });
  return link;

}

SetupPages(pages);

