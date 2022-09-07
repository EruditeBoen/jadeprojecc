class Eye{
    constructor(){

    }
    
    draw(scaleX, scaleY,ctx){
        ctx.save();

        const verticalSquish=1-Math.abs(scaleY*0.6)
        const horizontalSquish=1-scaleX*0.6
        ctx.scale(horizontalSquish,verticalSquish);
        ctx.beginPath();              
        ctx.moveTo(0.07,0.1);
        ctx.quadraticCurveTo(0.16, -0.1, 0.36,-0.01);
        ctx.quadraticCurveTo(0.3, 0.1, 0.21,0.09);
        ctx.lineTo(0.07,0.1);
    
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.moveTo(0.07,0.1);
        ctx.quadraticCurveTo(0.1, -0.08, 0.36,-0.03);
        ctx.quadraticCurveTo(0.4,-0.05,0.35,0.01);
        ctx.quadraticCurveTo(0.15, -0.03,0.1,0.05);
        ctx.fill()

        ctx.beginPath();
        ctx.moveTo(0.09,-0.16);
        ctx.quadraticCurveTo(0.25,-0.2, 0.34,-0.10);
        ctx.lineTo(0.26,-0.2);
        ctx.quadraticCurveTo(0.21,-0.23, 0.08,-0.21);
        ctx.quadraticCurveTo(0.05,-0.19, 0.09,-0.16);
        ctx.fillStyle="black";
        ctx.fill()
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0.21,-0.02);
        ctx.quadraticCurveTo( 0.17, 0.3, 0.18,-0.02);

        //ctx.arc(0.18,-0.02, 0.105, 0.09, Math.PI*-1.1);
        ctx.fill();

        ctx.restore();

        
    }
}
