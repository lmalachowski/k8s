var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var backend = "http://iii.mzylowski.pl";

(function loadTodo(){
  axios.get(backend + '/api/all')
})();

function deleteTodo(){
    for(let span of spans){
      span.addEventListener ("click",function (){
        axios.delete(backend + '/api/todos', {
          todo: span.parentElement.lastChild.nodeValue.trimLeft(),
        })
        span.parentElement.remove();
      });
    }
  }

input.addEventListener("keypress",function(keyPressed){
    if(keyPressed.which === 13){
      var li = document.createElement("li");
      var spanElement = document.createElement("span");

      var newTodo = this.value;
      this.value = " " ;

      spanElement.append('X ');
      spanElement.className = "button";
      ul.appendChild(li).append(spanElement,newTodo);

      axios.post(backend + '/api/todos', {
        todo: newTodo,
      })

    }
    deleteTodo();
  });

