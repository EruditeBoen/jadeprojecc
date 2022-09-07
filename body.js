class Body{
    constructor(){

    }
    draw(ctx){
                

        ctx.beginPath();
        ctx.moveTo(-0.06, 0.1);
        ctx.quadraticCurveTo(-0.03, 0.3, -0.06, 0.44);
        ctx.lineTo(-0.347, 0.53);
        ctx.quadraticCurveTo(-0.5, 0.6, -0.393, 0.86);
        ctx.moveTo(-0.287, 0.773);
        ctx.quadraticCurveTo(-0.45, 0.85, -0.393, 1.007);
        ctx.moveTo(0.093, 0.1);
        ctx.quadraticCurveTo(0.05, 0.3, 0.107, 0.43);
        ctx.lineTo(0.44, 0.38);
        ctx.quadraticCurveTo(0.7, 0.4, 0.4, 1.007);
        ctx.moveTo(0.32, 0.62);
        ctx.lineTo(0.153, 1.007);
        ctx.moveTo(0.28, 0.627);
        ctx.lineTo(0.3, 0.66);

        //arm
        
        ctx.moveTo(-0.06, 0.1);
        
        ctx.strokeStyle="black";
        ctx.stroke();
         ctx.strokeStyle="black";



        //Clothes on body

        ctx.beginPath();
        ctx.moveTo(-0.12,0.46);
        ctx.lineTo(-0.24,0.78);
        ctx.quadraticCurveTo(-0.1, 0.8, -0.11,0.95);
        ctx.quadraticCurveTo(-0.1, 0.8, 0.10,0.79);
        ctx.lineTo(0.25,0.41);
        ctx.lineTo(0.29,0.4);
        ctx.lineTo(0.14,0.80);
        ctx.lineTo(0.20,0.89);
        ctx.lineTo(0.16,1.00);
        ctx.lineTo(-0.39,1.00);
        ctx.quadraticCurveTo(-0.5, 0.85, -0.275,0.77);
        ctx.lineTo(-0.16,0.47);
        ctx.lineTo(-0.12,0.46);
        ctx.fillStyle="black";
        ctx.stroke();
        ctx.fill();
        
    }
}