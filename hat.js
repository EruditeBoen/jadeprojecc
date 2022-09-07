class Hat{
    constructor(){

    }
    draw(ref,ctx){
        ctx.save();
        
        ctx.translate(ref.x, ref.y);

        this.#drawHat(Math.max(0, -ref.xOffset), -ref.yOffset,ctx);

        ctx.scale(-1, 1);

        this.#drawHat(Math.max(0, ref.xOffset), -ref.yOffset,ctx);

        ctx.restore();
    }

    #drawHat(scaleX, scaleY,ctx){
        ctx.save();

        const verticalSquish=1-Math.abs(scaleY*0.6)
        const horizontalSquish=1-scaleX*0.5
        ctx.scale(horizontalSquish,verticalSquish);
        ctx.beginPath();              
        ctx.moveTo(0.07,0.1);
        ctx.quadraticCurveTo(0.16, -0.1, 0.36,-0.01);
        ctx.quadraticCurveTo(0.3, 0.1, 0.21,0.09);
        ctx.lineTo(0.07,0.1);


        

        
        ctx.beginPath();
        ctx.moveTo(0.01,-0.57+.2);
        ctx.quadraticCurveTo(-0.4, -0.5+.2, -0.33,-0.1+.2);  
        // ctx.quadraticCurveTo(-0.25, 0.1+.2, -0.15,0.2+.2);   

        ctx.quadraticCurveTo(-0.5, 0.03+.2, -0.47,-0.02+.2);               
        ctx.lineTo(-0.51,-0.04);
        ctx.quadraticCurveTo(-0.4, -0.05+.2, -0.53,-0.1+.2);
        ctx.quadraticCurveTo(-0.55, -0.15+.2, -0.53,-0.17+.2);
        ctx.lineTo(-0.59,-0.21+.2);
        ctx.lineTo(-0.55,-0.23+.2);
        ctx.lineTo(-0.55,-0.29+.2);
        ctx.lineTo(-0.58,-0.29+.2);
        ctx.lineTo(-0.55,-0.34+.2);
        ctx.lineTo(-0.59,-0.35+.2);
        ctx.lineTo(-0.55,-0.36+.2);
        ctx.lineTo(-0.55,-0.41+.2);
        ctx.lineTo(-0.59,-0.44+.2);
        ctx.lineTo(-0.55,-0.43+.2);
        ctx.quadraticCurveTo(-0.5, -0.45+.2, -0.55,-0.51+.2);
        ctx.lineTo(-0.49,-0.56+.2);
        ctx.lineTo(-0.53,-0.59+.2);
        ctx.lineTo(-0.47,-0.63+.2);
        ctx.lineTo(-0.45,-0.70+.2);
        ctx.lineTo(-0.41,-0.71+.2);
        ctx.lineTo(-0.31,-0.79+.2);
        ctx.lineTo(-0.31,-0.79+.2);
        ctx.lineTo(-0.31,-0.83+.2);
        ctx.lineTo(-0.21,-0.82+.2);
        ctx.lineTo(-0.09,-0.85+.2);
        ctx.lineTo(-0.10,-0.89+.2);
        ctx.lineTo(-0.05,-0.85+.2);
        ctx.lineTo(0.00,-0.85+.2);
        
        
        

        ctx.stroke();
        ctx.fillStyle='black';
        ctx.fill();
        ctx.restore();

    }

}