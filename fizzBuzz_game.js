/* This is simple fizzBuzz game. In this game, when ther's multiple of 3 it will give output "Fizz",when ther's multiple of 5 it will give output "Buzz",and when there's
multiple of both 3 and 5 it will give output "BuzzFizz" */

var container = []
count = 1;

function game() {
  
  for(count=1; count <50 ;count++){
    if(count % 5 ==0 && count % 3==0){
    container.push("BuzzFizz");
  }
  else if(count % 5 ==0 ){
    container.push("Buzz");
  }
  else if(count % 3 ==0 ){
    container.push("Fizz");
  }
  else {
    container.push(count);
  }
  }
  console.log(container);
}
game();
