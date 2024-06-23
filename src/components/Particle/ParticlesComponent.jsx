import React, { useEffect } from 'react';
import Stats from 'stats.js';
import * as particlesJS from 'particles.js'; // Import particlesJS as a namespace object

const ParticlesComponent = () => {
  useEffect(() => {
    // Initialize particles.js
    particlesJS.default('particles-js', { // Use the default export from the particlesJS namespace object
      // Paste the particles.js configuration here
    });

    // Initialize stats.js
    const stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    // Update stats.js
    const update = () => {
      stats.begin();
      stats.end();
      if (window.pJSDom && window.pJSDom[0].pJS.particles.array) {
        document.querySelector('.js-count-particles').innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

    return () => {
      // Clean up stats.js
      document.body.removeChild(stats.domElement);
      stats.domElement.remove();
    };
  }, []);

  return (
    <div>
      {/* particles.js container */}
      <div id="particles-js"></div>

      {/* stats - count particles */}
      <div className="count-particles">
        <span className="js-count-particles">--</span> particles
      </div>
    </div>
  );
};

export default ParticlesComponent;
