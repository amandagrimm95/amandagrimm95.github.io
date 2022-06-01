import React, { useEffect, useRef } from "react";
import './header.css';

export function HeaderCanvas (props: any) {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const NUM_CONFETTI = 100;
        const COLORS = ['rgb(69,69,238, 0.5)', 'rgb(102, 100, 200, 0.5)', 'rgb(69, 184, 238, 0.5)', 'rgb(148, 235, 184)'];

        function Circle(x) {
            this.x = x;
            this.y = Math.random() * (window.innerHeight + 100);
            this.radius = (Math.random() * 10) + 5;
            this.dx = 0;
            this.dy = (Math.random() * 2) + 0.25;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        
            this.draw = function() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                context.strokeStyle = this.color;
                context.stroke();
                context.fillStyle = this.color;
                context.fill();
            }

        
            this.update = function() {

                // this.dx = (this.mouseX - (canvas.width/2) / (canvas.width)/2);
            
                this.x += this.dx;
                this.y += this.dy;

                if (this.y > window.innerHeight + 200) {
                    this.y = -50;
                }
        
                this.draw();
            }
        }
        
        let circleArray = [];
        
        for (let i = 0; i < NUM_CONFETTI; i++) {
            let x = Math.random() * canvas.width;
            circleArray.push(new Circle(x));
        }
         
        function animateCircle() {
            requestAnimationFrame(animateCircle);
        
            context.clearRect(0, 0, canvas.width, canvas.height);

            // context.onMouseMove = (e: MouseEvent) => {
            //     this.mouseX = e.pageX;
            //     console.log('this.mouseX = ' + this.mouseX)
            // }
        
            circleArray.forEach(circle => circle.update());  

        }
        
        animateCircle();
        
    }, [])

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight + 100}></canvas>


}
