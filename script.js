var addtext     = document.getElementById("addtext");
var enterbutton = document.getElementById("enterbutton");
var ullist      = document.querySelector('ul');
var li          = document.querySelectorAll('li');
var close       = document.getElementsByClassName('close');

///adding close buton to the list items
for(var i=0;i<li.length;i++){
    var x                   = document.createTextNode('X');
    var closespan           = document.createElement('span');
        closespan.className = 'close';
    closespan.appendChild(x);
    li[i].appendChild(closespan);
}

//adding items to the existing list
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
   
    var textnode   = document.createTextNode(addtext.value);
    var litextnode = document.createElement('li');
    litextnode.appendChild(textnode);
    ullist.appendChild(litextnode);
            addtext.value       = '';
        var x                   = document.createTextNode('X');
        var closespan           = document.createElement('span');
            closespan.className = 'close';
    closespan.appendChild(x);
    litextnode.appendChild(closespan);
      
}


enterbutton.addEventListener('click', buttonclick);
addtext.addEventListener('keypress', keyclick);

//clicking close button to delete the item from the list

for(var i=0;i<close.length;i++){
    function deletelist(){
        debugger;
        var div=this.parentElement;
        div.style.display='none';
    }
    close[i].addEventListener('click', deletelist);
}