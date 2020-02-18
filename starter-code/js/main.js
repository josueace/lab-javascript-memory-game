const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);









 $(document).ready( ()=>{
   memoryGame.shuffleCards();
   
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function

var count=0;
  $("#memory_board > div").click(function(){

      $(this).addClass('turned');

      if(count <2){

      memoryGame.pickedCards[count] =this;
      count++;
    
   
      } else{
       
        count =0;
             if(memoryGame.checkIfPair($(memoryGame.pickedCards[0]).attr('data-card-name'),$(memoryGame.pickedCards[1]).attr('data-card-name'))){
             
             } else{
               
              $(memoryGame.pickedCards).toggleClass('turned');

             }
             
             memoryGame.pickedCards[count] =this;
             count++;

             
          }
   
    if(memoryGame.isFinished()){
      alert("end of game");
    }
    score();
    });
    
  });

function score(){
  var clicked= document.getElementById("pairs_clicked");
  clicked.innerHTML=memoryGame.pairsClicked;
  var guessed= document.getElementById("pairs_guessed");
  guessed.innerHTML=memoryGame.pairsGuessed;
  
}
