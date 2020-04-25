var allHeroes = ["Ana", "Bastion", "Brigette", "Doomfist", "D.va", "Genji", "Hanzo", "Junkrat", "Lucio", "McCree", "Mei",
          "Mercy", "Moira", "Orisa", "Pharah", "Reaper", "Reinhardt", "Roadhog", "Soldier: 76", "Sombra", "Symmetra",
          "Torbjorn", "Tracer", "Widowmaker", "Winston", "Zarya", "Zenyatta", "Wrecking Ball"];

var damageList = ["Doomfist", "Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "Symmetra"]

var tankList = ["D.va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Wrecking Ball"];

var supportList = ["Ana", "Brigette", "Lucio", "Mercy", "Moira", "Zenyatta"];

var heroList = [];

var includeDamage = true;
var includeTank = true;
var includeSupport = true;

var heroImg = 0;

function pickHero(){
  heroList = [];
  checkFilters();
  var value = Math.floor(Math.random() * heroList.length);
  if(heroList[value] == allHeroes[heroImg]){
    pickHero();
    return;
  }
  for(i = 0; i < allHeroes.length; i++){
    if(allHeroes[i] == heroList[value]){
      heroImg = i;
    }
  }
  if(heroList.length > 0){
    $("#heroName").html(heroList[value]);
    $("#heroImg").html("<img src='images/heroes/" + heroImg + ".png'/>");
  }
  else{
    $("#heroName").html("-");
    $("#heroImg").html("");
  }
}

function toggleCategory(category){
  if(category == "tank"){
    includeTank = !includeTank;
  }
  if(category == "support"){
    includeSupport = !includeSupport;
  }
  if(category == "damage"){
    includeDamage = !includeDamage;
  }
}

function checkFilters(){
    if(includeTank){
      heroList = heroList.concat(tankList);
    }
    if(includeSupport){
      heroList = heroList.concat(supportList);
    }
    if(includeDamage){
      heroList = heroList.concat(damageList);
    }
}
