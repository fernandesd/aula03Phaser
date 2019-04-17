var game=new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {preload: preload, create: create, update: update});
var ramdom = Math.random('')

function preload(){
 game.load.spritesheet('frutas','assets/images/frutas.png',32,32);
 game.load.spritesheet('galinha','assets/images/chick.png',16,18);
}
function create(){   
    
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    for(var i=0;i<100;i++){
        posx = game.rnd.between(0, game.world.width-32);//gera valores aleatórios
        posy = game.rnd.between(0, game.world.width-32);//gera valores aleatórios

        indice = game.rnd.between(0,9);//gera valores aleatórios

        fruta = game.add.sprite(posx, posy, 'frutas', indice);///imprimir uma fruta        
        fruta.scale.set(1);//escala de tamanho        
       // fruta.frame= 9;
    }
    galinha = game.add.sprite(100, 100, 'galinha');///imprimir uma fruta 
    galinha.scale.set(1 );//escala de tamanho
    galinha.animations.add('anda', [0,1,2], 24, false);
    //galinha.ancor.set(5);
    
    cursors = game.input.keyboard.createCursorKeys();
    
    
}
function update(){

    
    
    if(cursors.right.isDown){
        galinha.animations.play('anda');
        galinha.scale.x=1;
        galinha.x +=1;    
    }
    else if(cursors.left.isDown){
        galinha.animations.play('anda');
        galinha.scale.x=-1;
        galinha.x -=1;
    }
    else
        galinha.frame=0;
}

