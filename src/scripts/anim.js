// Function to check if animations should play
const animCheck = async () => {
  let observed = false;
  // Observes intersections on element with class .content-format
  // Once a proper intersection is detected (intersection ratio > 1) the observed var is triggered)
  // Animations play once observed
  const observer = new IntersectionObserver(intersections => {
    if (observed === false) {
      intersections.forEach((el) => {
        if (el.intersectionRatio > 0) {
          observed = true;
          animate();
        } else {
          return;
        }
      })
    }
  }, {
    // 10% of component must be visible before triggers
    threshold: 0.1
  });
  
  // Animation function
  async function animate() {
    // Timer function
    const timer = ms => new Promise(res => setTimeout(res, ms));
    // Elements NodeList
    let all = document.querySelectorAll('.ease-anim');
    
    // For each element, set these settings and wait 200ms
    for (const el of all) {
        el.style.opacity = '100%'
        el.style.transition = 'all 0.4s'
      await timer(200);
    }
  }

  // Initialize observer
  const el = document.querySelector('.content-format');
  observer.observe(el);

}

// Export function
export default animCheck;
