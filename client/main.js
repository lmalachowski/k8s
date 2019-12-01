var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");

function deleteTodo(){
    for(let span of spans){
      span.addEventListener ("click",function (){
          //DELETE from API
        span.parentElement.remove();
      });
    }
  }

function loadTodo(){
    //GET from API
  }

input.addEventListener("keypress",function(keyPressed){
    if(keyPressed.which === 13){
      var li = document.createElement("li");
      var spanElement = document.createElement("span");
          
      var newTodo = this.value;
      this.value = " " ;
          
      spanElement.append('usun');
      ul.appendChild(li).append(spanElement,newTodo);
        //POST to API
      }
    deleteTodo();
  });