var addtext     = document.getElementById("addtext");
var enterbutton = document.getElementById("enterbutton");
var ullist      = document.querySelector('ul');


function addtextlength(){
    return addtext.value.length;
}
function buttonclick(){
    if(addtextlength()>0){
        addinglist();
    }
}

function keyclick(event){
    if(addtextlength()>0 && event.keyCode === 13){
        addinglist();
    }
}

function addinglist(){
    console.log(addtext.value);
    var textnode   = document.createTextNode(addtext.value);
    var litextnode = document.createElement('li');
    litextnode.appendChild(textnode);
    ullist.appendChild(litextnode);
    addtext.value = '';
}


enterbutton.addEventListener('click', buttonclick);
addtext.addEventListener('keypress', keyclick);
