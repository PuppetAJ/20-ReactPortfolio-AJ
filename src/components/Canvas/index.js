import React from 'react';

function Canvas() {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    widht: window.innerWidth
  });

  React.useEffect(() => {
    
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }

  });

  React.useEffect(() => {

    const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext('2d');
  
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    const winWidth = window.innerWidth;
    let dotCount;
    winWidth > 1600 ? dotCount = 350 :
      winWidth > 1300 ? dotCount = 300 :
      winWidth > 1100 ? dotCount = 200 :
      winWidth > 800 ? dotCount = 250 : 
      winWidth > 600 ? dotCount = 100 : 
      dotCount = 100;
  
    const stars = [], // Array that contains the stars
      FPS = 60, // Frames per second
      dots = dotCount, // Number of stars
      mouse = {
        x: (30 * canvas.width) / 100,
        y: (30 * canvas.height) / 100
      };  // mouse location
  
    // Push stars to array
    for (let i = 0; i < dots; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }
  
    // Draw the scene
    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      
      ctx.globalCompositeOperation = "lighter";
      
      // Draw stars
      for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i];
      
        ctx.fillStyle = "#4D87F4";
        ctx.beginPath();
        // Create cricle shape
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
      
      ctx.beginPath();
      for (let i = 0, x = stars.length; i < x; i++) {
        let starI = stars[i];
        // start line
        ctx.moveTo(starI.x,starI.y); 

        // if mouse is within distance to star, create line
        if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);

        // Nested loop for second star
        // If second star is within distance of first star, draw a line between them
        for (let j = 0, x = stars.length; j < x; j++) {
          let starII = stars[j];
          if(distance(starI, starII) < 150) {
            ctx.lineTo(starII.x,starII.y); 
          }
        }
      }

      // Line styles
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = '#AE93F4';
      ctx.stroke();
    }
  
    // 2D distance calculation formula
    function distance( point1, point2 ){
      let xs = 0;
      let ys = 0;
  
      xs = point2.x - point1.x;
      xs = xs * xs;
  
      ys = point2.y - point1.y;
      ys = ys * ys;
  
      return Math.sqrt( xs + ys );
    }
  
    // Update star locations
    function update() {
      for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i];
        
        // Updates dots movement
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;
        
        // Reverses direction of dots when hitting screen boundaries
        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    const moveFunc = (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }
  
    window.addEventListener('mousemove', moveFunc);

    let req;
    // Animate loop, update / draw
    // Update updates the animation while draw redraws it
    function tick() {
      draw();
      update();
      req = requestAnimationFrame(tick);
    }
    
    tick();



    // Prevents preformance issues
    const cancelFrame = () => {
      cancelAnimationFrame(req);
    }

    // Cancel frame on resize
    window.addEventListener('resize', cancelFrame);

    // Remove existing event listener on component redraw
    return _ => {
      window.removeEventListener('mousemove', moveFunc)
    }
  
  });

  return (
    <canvas id='canvas'></canvas>
  )
}

export default Canvas;
