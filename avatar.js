class Pendulum{
    constructor(initLoc){
        this.initLoc=initLoc;
        //this.lookAt=lookAt;
        this.particles=[
            new Particle([initLoc.x,initLoc.y], true),
            new Particle([initLoc.x,initLoc.y+0.3])
        ]
        this.segments=[
            new Segment(this.particles[0], this.particles[1])
        ]
    }

    update(xTranslate, xScale){
        

        this.particles[0].location=[
            (this.initLoc.x+xTranslate)*xScale,
            this.initLoc.y
        ];
        Physics.updatePhysicsItems(this.particles);
        Physics.updatePhysicsItems(this.segments);

    }

    draw(ctx){
        Physics.drawPhysicsItems(this.particles, ctx);
        Physics.drawPhysicsItems(this.segments, ctx);
    }

}

class Avatar{
    constructor(lookAt){
        this.eye=new Eye();
        this.hat=new Hat();
        this.hair=new Hair();
        this.body=new Body();
        this.lookAt=lookAt;

        this.particles=[
            new Particle([this.lookAt.x, this.lookAt.y], true),
            new Particle([this.lookAt.x, this.lookAt.y+0.3])
        ];
        this.segments=[
            new Segment(this.particles[0], this.particles[1])
        ]

        this.particles2=[
            new Particle2([this.lookAt.x, this.lookAt.y], true),
            new Particle2([this.lookAt.x, this.lookAt.y+0.3])
        ];
        this.segments2=[
            new Segment2(this.particles2[0], this.particles2[1])
        ]

        this.frontHair=[
            new Pendulum({x:-0.27, y:-0.25}),
            new Pendulum({x:0.06, y:-0.33}),
            new Pendulum({x:0.27, y:-0.25})
        ]

    }

    updatePhysicsItems(items){
        items.forEach(i=>{
            i.update();
        });
    }

    drawPhysicsItems(items, ctx){
        items.forEach(i=>{
            i.draw(ctx);
        });
    }


    draw(ctx){

        const xTranslate=this.lookAt.xOffset*0.02;
        const xScale=1-Math.abs(this.lookAt.xOffset)*0.04;

        this.body.draw(ctx);
        ctx.fillstyle='brown';
        ctx.restore();
        this.#drawHead(ctx);

    

        // this.particles[0].location=[(this.lookAt.x-1)*.3, this.lookAt.y+.1];
        // this.updatePhysicsItems(this.particles);
        // this.drawPhysicsItems(this.particles, ctx);

        // this.updatePhysicsItems(this.segments);
        // this.drawPhysicsItems(this.segments, ctx);

        this.frontHair.forEach(p=>{
            p.update(xTranslate,1);
            p.draw(ctx);
        });

        
        if(DEBUG){
            drawPoint(this.lookAt, "A")
            // drawPoint(B, "B")
            // drawPoint(C, "C")
        }
    }

    
    
    #hairTop(ctx){
        ctx.beginPath();
        ctx.moveTo(-0.44,1.00);
        ctx.lineTo(-0.37,-0.45);
        ctx.quadraticCurveTo(0, -1, 0.43,-0.45);
        ctx.lineTo(0.43,1.00);
        ctx.lineTo(-0.44,1.00);
        ctx.stroke();
        ctx.fillStyle="rgb(13, 102, 255)";
        ctx.fill();


    }

    




    #drawHead(ctx){
        
        this.hair.draw(this.lookAt,ctx);

       
        
        
        ctx.strokeStyle="black";
        ctx.beginPath();
        const verticalSquish=1-Math.abs(this.lookAt.yOffset*0.6);
        const B={x:0, y:-0.6};
        const C={x:this.lookAt.x, y:this.lookAt.y+(0.37-Math.min(0,this.lookAt.yOffset)*0.4)*verticalSquish,}
        
        ctx.moveTo(0, -0.6);
        ctx.quadraticCurveTo(this.lookAt.x, this.lookAt.y, C.x, C.y);
        ctx.moveTo(-0.34, -0.190);
        ctx.quadraticCurveTo(this.lookAt.x, this.lookAt.y, 0.34, -0.190);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -0.6);
        ctx.quadraticCurveTo(-0.35, -0.55, -0.34, -0.190);
        ctx.quadraticCurveTo(-0.28, 0.15, C.x, C.y);
        ctx.quadraticCurveTo(0.28, 0.15, 0.34, -0.190);
        ctx.quadraticCurveTo(0.35, -0.55, 0, -0.6);


        
        ctx.stroke();
        ctx.fillStyle="rgb(225, 167, 108)";
        ctx.fill()
        ctx.stroke();
        

        ctx.strokeStyle="black";

        
        this.particles[0].location=[(this.lookAt.x-1.1)*.3, this.lookAt.y+.1];
        this.updatePhysicsItems(this.particles);
        this.drawPhysicsItems(this.particles, ctx);

        this.particles2[0].location=[(this.lookAt.x+1.1)*.3, this.lookAt.y+.1];
        this.updatePhysicsItems(this.particles2);
        this.drawPhysicsItems(this.particles2, ctx);

        this.updatePhysicsItems(this.segments);
        this.drawPhysicsItems(this.segments, ctx);

        this.updatePhysicsItems(this.segments2);
        this.drawPhysicsItems(this.segments2, ctx);
        

        ctx.strokeStyle='black';
        this.hat.draw(this.lookAt,ctx);

        this.#drawEyes(this.lookAt,ctx);

        this.#drawLips(this.lookAt,ctx);

        //this.#drawClothes(this.lookAt,ctx);

    


 

    }


    

    #drawLips(ref,ctx){
        ctx.save();
        ctx.translate(ref.x, ref.y);

        const scaleX=Math.max(0-ref.xOffset, ref.xOffset);
        const scaleY=ref.yOffset;
        const verticalSquish=1-Math.abs(scaleY*0.9)
        const horizontalSquish=1-scaleX*0.6
        ctx.scale(horizontalSquish, verticalSquish);

        ctx.beginPath();
        ctx.moveTo(-0.08,0.25);
        ctx.quadraticCurveTo(0.0, 0.1, 0.09,0.25);
        ctx.quadraticCurveTo(0.0, 0.38, -0.08,0.25);

        ctx.stroke();
        ctx.fillStyle="rgb(186, 12, 30)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0.0,0.25, 0.015, 0.09, Math.PI*2.1)
        ctx.fillStyle="white";
        ctx.fill();
        ctx.restore();
        ctx.stroke();



    }

    #drawEyes(ref,ctx){
        ctx.save();
        ctx.translate(ref.x, ref.y);

        this.eye.draw(Math.max(0, ref.xOffset), ref.yOffset,ctx);
        ctx.scale(-1, 1);
        this.eye.draw(Math.max(0, -ref.xOffset), ref.yOffset,ctx);

        ctx.restore();
    }

    

}
