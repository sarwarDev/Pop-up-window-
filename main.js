let div = document.getElementById("div");
let btn = document.getElementById("btn");
let main= document.getElementById('main-container');
btn.addEventListener('click', function(){
  this.style.display = 'none';
  div.style.display = 'block'
});
div.addEventListener('click',function(){
 div.style.display = 'none';
 btn.style.display = 'block';
});
