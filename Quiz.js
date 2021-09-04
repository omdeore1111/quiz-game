class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }

    play(){
      //write code here to hide question elements
      question.hide();
      //write code to change the background color here
      background('yellow');
      //write code to show a heading for showing the result of Quiz
      fill("black");
      textSize(20);
      text("Result of the quiz" , 200 ,20);
      //call getContestantInfo( ) here 
      Contestant.getPlayerInfo();
      if(allContestants !== undefined){
      fill("blue");
      textSize(20);
    text("*NOTE Contestant who gave the correct answer are highlighted in green color", 130 , 230 );
      for(var plr in allContestants){
      var correctAnswers = "2";
      if(correctAnswers === allContestants[plr].answer ){
      fill('green');
      text(allContestants[plr].name , 250,40);
      }
      else
     fill('red');
     text(allContestants[plr].name , 230,20);
      



      }
      }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
