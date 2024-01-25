let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

 let store= arr.sort((a,b)=>{
     return (split(a)>split(b)?1:-1);
 });
 function split(name){
     let reg = new RegExp('^(a|an|the)','i');
     return name.replace(reg,'').trim();
 }

let ul = document.getElememtById("band");
ul.innerHTML = store.map((item)=>{`<li>${item}</li>`});


//your code here

