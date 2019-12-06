var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");

(function loadTodo(){
  axios.get('http://localhost:5000')
})();

function deleteTodo(){
    for(let span of spans){
      span.addEventListener ("click",function (){
        axios.delete('http://localhost:5000/todos', {
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

      spanElement.append('usun');
      ul.appendChild(li).append(spanElement,newTodo);

      axios.post('http://localhost:5000/todos', {
        todo: newTodo,
      })

    }
    deleteTodo();
  });
