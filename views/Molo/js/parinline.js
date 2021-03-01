 var count_particles, stats, update;
          stats = new Stats;
          stats.setMode(0);
          stats.domElement.style.position = 'absolute';
          stats.domElement.style.left = '0px';
          stats.domElement.style.top = '0px';
          document.body.appendChild(stats.domElement);
          count_particles = document.querySelector('.js-count-particles');
          update = function() {
            stats.begin();
            stats.end();
            requestAnimationFrame(update);
          };
          requestAnimationFrame(update);