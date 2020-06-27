var canvas, bImg;
var gameState = 0;
var database, form, player, game;
var playerCount, allPlayers;
var distance = 0;
function setup(){
  canvas = createCanvas(1300,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}
function draw(){
  if(playerCount === 4){
    gameState = 1;
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}