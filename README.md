# CTF-Enhanced-JS
An enhanced version of CTF(Capture the flag) made with NodeJS SSJS using express and the webgl API, also with sockets.



## Getting started
Make sure you have NodeJS LTS installed on Windows, MacOS, or Linux. 

https://nodejs.org/en/download/

1. On the CMD prompt, or the terminal type node index.
2. Enter localhost:8080 in the web browser
3. The basic project is working.





## Usage

in the public folder, there is index.html and 2 other JS files in the js folder. 1 is the Client Side script. Don't make any changes in Game.js, as that contains the classes.


```javascript
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




```
Try to add something to this code. The only thing that works is player movement. Try to add multiplayer functionality by activating the opponent for the other client(socket).

