let btn = document.getElementById('addbtn');
let titleEle = document.getElementById('title');
let workEle = document.getElementById('work');
let lists=document.getElementById('lists');
let search=document.getElementById('search');

showItems();
function remove(index){
   
    
    let list=localStorage.getItem('list');
    list=JSON.parse(list);
    let items=[]
    if(list!=null){
       items=list;
    }
    items.splice(index,1);
    localStorage.setItem('list',JSON.stringify(items));
    showItems();
}
function showItems(){
    
    let html=""
    let list=localStorage.getItem('list');
    list=JSON.parse(list);
    let items=[]
    if(list!=null){
       items=list;
    }
    for(let i=0;i<items.length;i++){
         html+=`<div class="card notecard mx-2 my-3" style="width: 18rem;">
         <div class="card-body" >
             <h5 class="card-title">${items[i].title}</h5>
             <p class="card-text">${items[i].work}</p>
             <button id="${i}" onclick="remove(this.id)" class="btn btn-primary">remove</a>
         </div>
     </div>
         `


    }
    lists.innerHTML=html;



}

btn.addEventListener('click', function (e) {
  
    let title = titleEle.value;
    let work = workEle.value;
   
    let item={title,work};
   
    let list=localStorage.getItem('list');
    list=JSON.parse(list);
    let items=[]
    if(list!=null){
       items=list;
    }
    items.push(item);
    localStorage.setItem('list',JSON.stringify(items));
    showItems();
});
search.addEventListener('input',function(){
    let value=search.value.toLowerCase();
    let x=document.getElementsByClassName('notecard');
     Array.from(x).forEach(function(element){
        let txt=element.getElementsByTagName("p")[0].innerText;

        if(!txt.includes(value)){
            element.style.display="none";
        }
        

     });
})