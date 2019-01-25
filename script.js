var del='&#10008';
var check='&#10004';

////////////////////////////////////////////////////////////////////////
var itemtext=document.getElementById('itemtext');
var addbutton=document.getElementById('addbutton');
var todolist=document.getElementById('todo');
var completedlist=document.getElementById('completed');
////////////////////////////////////////////////////////////////////////

//removing items from the todolist
function removeitemfunc(){
    var linode=this.parentNode.parentNode;
    var parent=linode.parentNode;
    parent.removeChild(linode);
}
///////////////////////////////////////////////////////////////////////

//completed item shifted to new ul
function completeitemfunc(){
    var linode=this.parentNode.parentNode;
    var parent=linode.parentNode;
    var id=parent.id;
    parent.removeChild(linode);
    if(id==='todo'){
        completedlist.insertBefore(linode,completedlist.childNodes[0]);

    }
    else{
        todolist.insertBefore(linode,todolist.childNodes[0]);
    }    
} 


//adding items to the todolist
function addtexttolist(){
   var itemtextnode=document.createTextNode(itemtext.value);
   var itemli=document.createElement('li');

   var itemdiv=document.createElement('div');
   itemdiv.classList.add('buttons');

   var itemremove=document.createElement('button');
   itemremove.classList.add('remove');
   itemremove.innerHTML=del;

   itemremove.addEventListener('click',removeitemfunc);

   var itemcomplete=document.createElement('button');
   itemcomplete.classList.add('complete');
   itemcomplete.innerHTML=check;

   itemcomplete.addEventListener('click',completeitemfunc);
   
   itemdiv.appendChild(itemremove);
   itemdiv.appendChild(itemcomplete);
   itemli.appendChild(itemtextnode);
   itemli.appendChild(itemdiv);
   todolist.insertBefore(itemli,todolist.childNodes[0]);

   itemtext.value='';
}

function mouseclickadd(){
    if(itemtext.value.length>0){
        addtexttolist();
    }
}
function keyenteradd(e){
    if(itemtext.value.length>0 && e.keyCode===13){
        addtexttolist();
    }
}
addbutton.addEventListener('click',mouseclickadd);
itemtext.addEventListener('keypress',keyenteradd);

