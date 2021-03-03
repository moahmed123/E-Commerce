//$(function(){
    var lastTime = 0;
    var prefixes = 'webkit moz ms o'.split(' ');
    // get unprefixed rAF and cAF, if present
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    // loop through vendor prefixes and get prefixed rAF and cAF
    var prefix;
    for( var i = 0; i < prefixes.length; i++ ) {
        if ( requestAnimationFrame && cancelAnimationFrame ) {
            break;
        }
        prefix = prefixes[i];
        requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
        cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
                                  window[ prefix + 'CancelRequestAnimationFrame' ];
    }
    // fallback to setTimeout and clearTimeout if either request/cancel is not supported
    if ( !requestAnimationFrame || !cancelAnimationFrame ) {
        requestAnimationFrame = function( callback, element ) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
            var id = window.setTimeout( function() {
                callback( currTime + timeToCall );
            }, timeToCall );
            lastTime = currTime + timeToCall;
            return id;
        };
        cancelAnimationFrame = function( id ) {
            window.clearTimeout( id );
        };
    }
    // put in global namespace
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
    //END OF requestAnimationFrame polyfill
    
    var stage = document.getElementById('stage'), stageCtx = stage.getContext('2d');//Save canvas stage to variable
    stage.width = window.innerWidth, stage.height = window.innerHeight;
    
    var setStage = function() {
    	var particleTotal = 3, particles = {}, counter = 0, joinRange = 60;
    	var speed = 0.8,
    		maxX = stage.width,
    		maxY = stage.height,
    		size = 400;
		function randomInt(min, max) {
			return Math.random() * (max - min) + min;
		}
    	var manageParticles = {
    		init: function() {
    			for (var i = 0; i < particleTotal; i++) {
					var moveX = true, moveY = true, movePos;
    				if (Math.round(randomInt(0, 1)) == 0) {
						moveX = false;
					}
					if (Math.round(randomInt(0, 1)) == 0) {
						moveY = false;
					}
    				var partX = randomInt(0, maxX);
    					partY = randomInt(0, maxY);
    					partSpeed = randomInt(0, speed);
    					partSize = randomInt(size - 100, size);
    				particles[i] = {'x': partX, 'y': partY, 'speed': partSpeed, 'size': partSize, 'moveX': moveX, 'moveY': moveY};
    			}
    			manageParticles.render();
    		},
    		render: function() {
    			for (var i = 0; i < particleTotal; i++) {
    				stageCtx.beginPath();
    				stageCtx.arc(particles[i].x, particles[i].y, particles[i].size, 0, 2 * Math.PI, true);
    				stageCtx.closePath();
    				stageCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    				stageCtx.fill();
    			}
    			manageParticles.move(particles);
    		},
    		move: function(particles) {
    			function animate() {
    				stage.width = stage.width;
    				for (var i = 0; i < particleTotal; i++) {
    					if (particles[i].moveX == true) {
    						particles[i].x += particles[i].speed;
    						if (particles[i].x > stage.width + particles[i].size)
    							particles[i].x = 1 - particles[i].size;
    					} else {
    						particles[i].x -= particles[i].speed;
    						if (particles[i].x < 0 - particles[i].size)
    							particles[i].x = (stage.width - 1) + particles[i].size;
    					}
    					if (particles[i].moveY == true) {
    						particles[i].y += particles[i].speed;
    						if (particles[i].y > stage.height + particles[i].size)
    							particles[i] = 1 - particles[i].size;
    					} else {
    						particles[i].y -= particles[i].speed;
    						if (particles[i].y < 0 - particles[i].size)
    							particles[i].y = (stage.height - 1) + particles[i].size;
    					}
    					stageCtx.beginPath();
    					stageCtx.arc(particles[i].x, particles[i].y, particles[i].size, 0, 2 * Math.PI, true);
    					stageCtx.closePath();
    					stageCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    					stageCtx.fill();
    					stageCtx.closePath();
	    			}
					movePos = requestAnimationFrame(animate);
				}
				animate();
    		}
    	};
    	manageParticles.init();
    };
    setStage();
//});