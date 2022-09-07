class Hair{
    constructor(){

    }
    draw(ref,ctx){

        
        ctx.save();

        

        
        ctx.beginPath();
        ctx.moveTo(-0.40,-0.2);
        ctx.quadraticCurveTo(-0.36, 0.4, -0.59,0.57);
        ctx.quadraticCurveTo(-0.7, .97, -0.6,1);
        ctx.lineTo(-0.4,1);
        ctx.quadraticCurveTo(-0.44, .91, -0.39,0.85);
        ctx.quadraticCurveTo(-0.5, .6, -0.35,0.53);
        ctx.lineTo(-0.07,0.44);
        ctx.quadraticCurveTo(-0.02, .33, -0.05,0.16);
        ctx.quadraticCurveTo(-0.24, .1, -0.33,-0.15);
        ctx.quadraticCurveTo(-0.3, -.07, -0.37,-0.09);
        ctx.lineTo(-0.34,-0.2);
        ctx.lineTo(-0.37,-0.2);
        ctx.quadraticCurveTo(-0.33, -.07, -0.4,0.05);

        

        // const scaleX=Math.max(0-ref.xOffset, ref.xOffset);
        // scaleY=ref.yOffset;
        // const verticalSquish=1-Math.abs(scaleY*0.9)
        // const horizontalSquish=1-scaleX*0.3
        // ctx.scale(horizontalSquish, verticalSquish);

        ctx.moveTo(0.34,-0.17);
        ctx.quadraticCurveTo(0.46, -.08, 0.46,0.08);
        ctx.quadraticCurveTo(0.45, 0.3, 0.63,0.40);
        ctx.quadraticCurveTo(0.75, 0.6, 0.69,0.81);
        ctx.quadraticCurveTo(0.65, 1, 0.77,1);
        ctx.lineTo(0.40,1.00);
        ctx.quadraticCurveTo(0.7, 0.4, 0.45,0.38);
        ctx.lineTo(0.12,0.43);
        ctx.quadraticCurveTo(0.05, 0.4, 0.09,0.16);
        ctx.quadraticCurveTo(0.3, 0.05, 0.34,-0.17);




        ctx.fillStyle="rgb(13, 102, 255)";
        ctx.fill();


        ctx.restore();
        ctx.stroke();



    }

}