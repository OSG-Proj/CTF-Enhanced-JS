var game = new Game('gameCanvas', 600, 400, 'border: 1px solid black;');

game.endAction = function(){
    //Check for collisions
    if(player.collide(flagP2))
    {
        player.grab(flagP2);
        
        game.update();
        
    }

    if(player.hasObject)
    {
        player.hold(true);
        game.update();
        if(player.collide(flagP1))
        {
            player.drop(function(){
                alert("you win!");
                flagP2.hidden = true;
            });
            game.update();
        }
    }
}
var player = new GameObject(40, game.height / 2 - 10, 20, 20, 'blue', false);
var opponent = new GameObject(game.width - 60, game.height / 2 - 10, 20, 20, 'red', false);
var flagP1 = new GameObject(0, game.height / 2 - 10, 20, 20, 'blue', false);
var flagP2 = new GameObject(game.width - 20, game.height / 2 - 10, 20, 20, 'red', false);

game.add(player);
game.add(opponent);
game.add(flagP1);
game.add(flagP2);

//load all the objets
game.load();



//Player controls



//bind keys

//game.endaction is the property treated as a function that is run after the function bound to the key.
game.bind('w', player, function(obj){
    obj.move(0, -10);
    game.update();
    game.endAction();
});

game.bind('a', player, function(obj) {
    obj.move(-10, 0);
    game.update();
    game.endAction();
})

game.bind('s', player, function(obj){
    obj.move(0, 10);
    game.update();
    game.endAction();
    
})

game.bind('d', player, function(obj){
    obj.move(10, 0);
    game.update();
    game.endAction();
})




