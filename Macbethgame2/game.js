function startGame() {
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
  }
  
  function goLeft() {
    document.getElementById("game").style.display = "none";
    document.getElementById("page2").style.display = "block";
  }
  
  function goRight() {
    document.getElementById("game").style.display = "none";
    document.getElementById("page3").style.display = "block";
  }
  
  function fight() {
    alert("You join the battle and fight bravely, but you are outnumbered and soon overwhelmed. You die a hero's death.");
    location.reload();
  }
  
  function sneak() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page4").style.display = "block";
  }
  
  function killBanquo() {
    alert("You order the murder of Banquo, but his son Fleance manages to escape. You are haunted by guilt and fear for the rest of your days.");
    location.reload();
  }
  
  function frameMalcolm() {
    alert("You frame Malcolm for treason and have him executed. Your subjects are outraged by this injustice and rise up against you. You are defeated and killed.");
    location.reload();
  }
  
  function apparitionOne() {
    alert("The apparition warns you to beware of Macduff. You realize that Macduff is your greatest threat and begin to plan his downfall.");
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
  }
  
  function apparitionTwo() {
    alert("The apparition tells you that no man born of a woman can harm you. You are relieved, but still wary.");
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
  }
  
  function apparitionThree() {
    alert("The apparition tells you that you will not be defeated until Birnam Wood comes to Dunsinane. You scoff at this prophecy, thinking it impossible.");
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
  }
  
  function defend() {
    alert("You gather your troops and prepare for battle. The enemy army is strong, but you are determined to defend your kingdom. After a long and grueling fight, you emerge victorious.");
    location.reload();
  }
  
  function surrender() {
    alert("You realize that you cannot win this battle and decide to surrender. Your enemies show you no mercy and execute you on the spot.");
    location.reload();
  }
  
