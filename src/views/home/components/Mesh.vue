<style lang="scss" scoped>
  #canvas{
    position: absolute;
  	top: 0;
  	left: 0;
  	z-index: -1;
  }
</style>

<template>
  <canvas id="canvas"></canvas>
</template>

<script>
  export default{
    created(){
      window.addEventListener("resize", ()=>{
      	this.deBouncer();
      });
    },
    mounted(){
      this.canvasBody = document.getElementById("canvas");
      this.drawArea = this.canvasBody.getContext("2d");
      this.resizeReset();
      this.setup();
    },
    data(){
      return {
        canvasBody: null,
        drawArea: null,
        rgb: null,
        particles: [],
        w: null,
        h: null,
        tid: null,
        particleColor: "rgb(245,245,245)",
      	lineColor: "245",
        lineWidth: 5,
      	particleAmount: 14,
      	defaultSpeed: 0.1,
      	variantSpeed: 0.2,
      	defaultRadius: 9,
      	variantRadius: 0.5,
      	linkRadius: 180,
        delay: 200,
      }
    },
    methods: {
      setup(){
      	this.resizeReset();
      	for (let i = 0; i < this.particleAmount; i++){
      		this.particles.push(this.newParticle());
      	}
      	window.requestAnimationFrame(this.loop);
      },
      newParticle(){
        var particle = {
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          speed: this.defaultSpeed + Math.random() * this.variantSpeed,
          directionAngle: Math.floor(Math.random() * 360),
          color: this.particleColor,
          radius: this.defaultRadius + Math.random() * this.variantRadius,
        }
        particle.vector = {
          x: Math.cos(particle.directionAngle) * particle.speed,
          y: Math.sin(particle.directionAngle) * particle.speed
        }
        return particle;
      },
      loop(){
      	window.requestAnimationFrame(this.loop);
      	this.drawArea.clearRect(0,0,this.w,this.h);
      	for (let i = 0; i < this.particles.length; i++){
      		this.updateParticle(this.particles[i]);
          this.drawParticle(this.particles[i]);
      	}
      	for (let i = 0; i < this.particles.length; i++){
      		this.linkPoints(this.particles[i], this.particles);
      	}
      },
      updateParticle(particle){
        this.border(particle);
        particle.x += particle.vector.x;
        particle.y += particle.vector.y;
      },
      border(particle){
        if(particle.x >= this.w || particle.x <= 0){
          particle.vector.x *= -1;
        }
        if(particle.y >= this.h || particle.y <= 0){
          particle.vector.y *= -1;
        }
        if(particle.x > this.w) particle.x = this.w;
        if(particle.y > this.h) particle.y = this.h;
        if(particle.x < 0) particle.x = 0;
        if(particle.y < 0) particle.y = 0;
      },
      drawParticle(particle){
        this.drawArea.beginPath();
        this.drawArea.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2);
        this.drawArea.closePath();
        this.drawArea.fillStyle = particle.color;
        this.drawArea.fill();
      },
      resizeReset(){
      	this.w = this.canvasBody.width = window.innerWidth;
      	this.h = this.canvasBody.height = window.innerHeight;
      },
      deBouncer(){
        clearTimeout(this.tid);
        this.tid = setTimeout(()=>{
          this.resizeReset();
        }, this.delay);
      },
      checkDistance(x1, y1, x2, y2){
      	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      },
      linkPoints(point1, hubs){
      	for(let i = 0; i < hubs.length; i++) {
      		let distance = this.checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
      		let opacity = 1 - (distance / this.linkRadius) + 0.99;
          if(opacity > 1){
            opacity = 1;
          }
      		if(opacity > 0){
      			this.drawArea.lineWidth = this.lineWidth;
      			this.drawArea.strokeStyle = `rgba(${this.lineColor}, ${this.lineColor}, ${this.lineColor}, ${opacity})`;
      			this.drawArea.beginPath();
      			this.drawArea.moveTo(point1.x, point1.y);
      			this.drawArea.lineTo(hubs[i].x, hubs[i].y);
      			this.drawArea.closePath();
      			this.drawArea.stroke();
      		}
      	}
      }
    }
  }
</script>
