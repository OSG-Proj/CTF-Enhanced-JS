class GameObject
{
    constructor(posX, posY, sizeX, sizeY, color, hidden)
    {
        this.position = {x: posX, y: posY}
        this.size = {x: sizeX, y: sizeY}
        this.color = color;
        this.hasObject = false;
        this.hidden = hidden;

        this.grabbedObject;

        
        

    }

    move(x, y)
    {
        this.position.x += x;
        this.position.y += y;
    }
    grab(obj)
    {
        this.grabbedObject = obj;
        this.hasObject = true;
        
    }
    hold(inHand)
    {   
        if(!inHand)
        {
            this.grabbedObject.position.x = this.position.x;
            this.grabbedObject.position.y = this.position.y;
        }
        else
        {
            this.grabbedObject.size.x = 10;
            this.grabbedObject.size.y = 10;
            this.grabbedObject.position.x = this.position.x - 10;
            this.grabbedObject.position.y = this.position.y - 10;
        }
        
    }
    drop(func)
    {
        this.grabbedObject = null;
        this.hasObject = false;
        func();

    }
    

    collide(obj)
    {
        if(this.position.x == obj.position.x && this.position.y == obj.position.y && !obj.hidden)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    
}


class Game
{
     
    constructor(canvasID, sizeX, sizeY, style)
    {
        this.height = sizeY;
        this.width = sizeX;
        this.canvas = document.createElement('canvas');
        this.canvas.id = canvasID;
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.canvas.style = style;
        
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");
       
        this.gameObjects = []

        this.endAction = null;
    }
    /**
 * @param {GameObject} obj 
 
 */
    add(obj)
    {

        this.gameObjects.push(obj);
    }
    load()
    {
        for(var i = 0; i < this.gameObjects.length; i++)
        {
            if(!this.gameObjects[i].hidden)
            {
                this.ctx.fillStyle = this.gameObjects[i].color;
                this.ctx.fillRect(this.gameObjects[i].position.x, this.gameObjects[i].position.y, this.gameObjects[i].size.x, this.gameObjects[i].size.y);
            }
            
        }
    }
    update()
    {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.load();
    }
    bind(key, obj, action)
    {
        var keypressed;
        document.addEventListener('keydown', function(e){
            keypressed = e.key;
            if(keypressed == key)
            {
                action(obj);
                
            }
            
        })
    }

    
}
