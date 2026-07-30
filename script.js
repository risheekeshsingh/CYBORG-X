// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Cinematic Loading Screen ---
    const loader = document.getElementById('loader');
    const bootText = document.getElementById('boot-text');
    const loaderProgress = document.getElementById('loader-progress');
    const loaderPercentage = document.getElementById('loader-percentage');

    const bootMessages = [
        "Initializing quantum core...",
        "Establishing neural link connection...",
        "Bypassing mainframe security protocols...",
        "Loading cybernetic interface modules...",
        "Calibrating optical sensors...",
        "Synchronizing AI brain matrix...",
        "System ready."
    ];

    let progress = 0;
    let msgIndex = 0;

    const runBootSequence = () => {
        const bootInterval = setInterval(() => {
            // Append terminal text
            if(msgIndex < bootMessages.length && Math.random() > 0.2) {
                const p = document.createElement('div');
                p.className = 'boot-line';
                p.textContent = `> ${bootMessages[msgIndex]}`;
                if(bootText) bootText.appendChild(p);
                msgIndex++;
            }

            // Update Progress Bar
            progress += Math.floor(Math.random() * 12) + 4;
            if(progress > 100) progress = 100;
            
            if(loaderProgress && loaderPercentage) {
                loaderProgress.style.width = `${progress}%`;
                loaderPercentage.textContent = `${progress}%`;
            }

            // Finish Loading
            if(progress >= 100) {
                clearInterval(bootInterval);
                setTimeout(() => {
                    if(loader) {
                        loader.style.transform = 'scale(1.1)'; // Cinematic zoom out
                        loader.style.opacity = '0';
                        setTimeout(() => {
                            loader.style.display = 'none';
                            reveal(); // Start page animations
                        }, 800);
                    }
                }, 600);
            }
        }, 180);
    };

    if(loader && bootText) {
        runBootSequence();
    } else {
        reveal();
    }

    // --- 2. Custom Cursor & Glow Trail ---
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    let lastGlowTime = 0;
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Small delay for the follower
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);

        // Mouse Glow Trail Effect
        const now = Date.now();
        if(now - lastGlowTime > 40) { // Limit spawn rate
            lastGlowTime = now;
            const glow = document.createElement('div');
            glow.className = 'glow-point';
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            document.body.appendChild(glow);
            setTimeout(() => {
                if(glow.parentNode) glow.parentNode.removeChild(glow);
            }, 800);
        }
    });

    // Add hover effect to links and buttons
    const hoverElements = document.querySelectorAll('a, button, .feature-card, .tech-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

    // --- 2.5 Magnetic Buttons & Cinematic 3D Tilt ---
    const interactiveElements = document.querySelectorAll('.btn, .tech-item');
    
    interactiveElements.forEach(el => {
        // Magnetic effect for buttons and specific chips
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });

    // Premium Apple Vision Pro 3D Tilt for Glass Cards
    const glassCards = document.querySelectorAll('.glass');
    glassCards.forEach(card => {
        // Inject Iron Man HUD Brackets
        const hud = document.createElement('div');
        hud.className = 'hud-brackets';
        card.appendChild(hud);
        
        // Add micro text
        const microText = document.createElement('div');
        microText.className = 'hud-micro-text';
        microText.textContent = `SYS.VER.${Math.floor(Math.random()*9)}.${Math.floor(Math.random()*99)}`;
        card.appendChild(microText);

        // 3D Parallax Tilt Logic
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Spotlight Update
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // Parallax Calculation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4; // subtle max 4 deg
            const rotateY = ((x - centerX) / centerX) * 4;
            
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s linear';
        });
    });

    // --- 3. Navigation Bar Sticky Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 4. Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if(mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- 5. Typing Text Effect ---
    const textToType = "THE FUTURE OF HUMAN EVOLUTION";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Speed of typing
        }
    }
    
    // Start typing after loader
    setTimeout(typeText, 1600);

    // --- 5. Advanced Cinematic Scroll Reveal ---
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    let staggerDelay = 0;
    let staggerResetTimeout;

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Stagger logic for items entering view simultaneously
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, staggerDelay);
                
                staggerDelay += 150; // 150ms delay between elements
                
                clearTimeout(staggerResetTimeout);
                staggerResetTimeout = setTimeout(() => { staggerDelay = 0; }, 300);

                // Stop observing once revealed
                observer.unobserve(entry.target);
                
                // Trigger counter if this element is inside the statistics section
                if(entry.target.classList.contains('stat-item')) {
                    const counter = entry.target.querySelector('.counter');
                    if(counter && !counter.classList.contains('counted')) {
                        animateCounter(counter);
                        counter.classList.add('counted');
                    }
                }
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // --- 7. Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- 8. Animated Counters ---
    function animateCounter(counterElement) {
        const target = +counterElement.getAttribute('data-target');
        const duration = 2000; // ms
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            counterElement.textContent = current;
            if (current >= target) {
                clearInterval(timer);
                counterElement.textContent = target; // ensure exact match
            }
        }, stepTime);
    }

    // --- 9. Infinite Space Background (Three.js) ---
    const initSpaceBackground = () => {
        const canvas = document.getElementById('space-background');
        if (!canvas) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050816, 0.001); // Adds depth to infinite space

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 1000;
        camera.rotation.x = Math.PI/2; // look up at the stars

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // 1. Animated Galaxy / Starfield
        const starGeo = new THREE.BufferGeometry();
        const starCount = 8000;
        const starPositions = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            // Distribute stars in a vast cylindrical space
            const radius = 100 + Math.random() * 1500;
            const theta = Math.random() * 2 * Math.PI;
            const z = (Math.random() - 0.5) * 2000;
            
            starPositions[i*3] = radius * Math.cos(theta);
            starPositions[i*3+1] = z; // Map Z to Y for vertical travel
            starPositions[i*3+2] = radius * Math.sin(theta);
            
            // Subtle color variations (white, cyan, purple)
            const color = new THREE.Color();
            const randColor = Math.random();
            if (randColor > 0.8) {
                color.setHex(0x00F5FF); // Cyan
            } else if (randColor > 0.6) {
                color.setHex(0x8B5CF6); // Purple
            } else {
                color.setHex(0xFFFFFF); // White
            }
            starColors[i*3] = color.r;
            starColors[i*3+1] = color.g;
            starColors[i*3+2] = color.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

        // Create glowing dot texture
        const getStarTexture = () => {
            const c = document.createElement('canvas');
            c.width = 16; c.height = 16;
            const ctx = c.getContext('2d');
            const grad = ctx.createRadialGradient(8,8,0, 8,8,8);
            grad.addColorStop(0, 'rgba(255,255,255,1)');
            grad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,16,16);
            return new THREE.CanvasTexture(c);
        };

        const starMat = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            map: getStarTexture(),
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const stars = new THREE.Points(starGeo, starMat);
        scene.add(stars);

        // 2. Nebula Effects (Large fuzzy colored clouds)
        const nebulaGeo = new THREE.BufferGeometry();
        const nebulaCount = 50;
        const nebulaPositions = new Float32Array(nebulaCount * 3);
        const nebulaColors = new Float32Array(nebulaCount * 3);

        for (let i = 0; i < nebulaCount; i++) {
            nebulaPositions[i*3] = (Math.random() - 0.5) * 1000;
            nebulaPositions[i*3+1] = (Math.random() - 0.5) * 2000;
            nebulaPositions[i*3+2] = (Math.random() - 0.5) * 1000;

            const c = new THREE.Color();
            Math.random() > 0.5 ? c.setHex(0x00F5FF) : c.setHex(0x8B5CF6);
            nebulaColors[i*3] = c.r;
            nebulaColors[i*3+1] = c.g;
            nebulaColors[i*3+2] = c.b;
        }

        nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
        nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

        const getNebulaTexture = () => {
            const c = document.createElement('canvas');
            c.width = 64; c.height = 64;
            const ctx = c.getContext('2d');
            const grad = ctx.createRadialGradient(32,32,0, 32,32,32);
            grad.addColorStop(0, 'rgba(255,255,255,0.15)');
            grad.addColorStop(0.5, 'rgba(255,255,255,0.05)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,64,64);
            return new THREE.CanvasTexture(c);
        };

        const nebulaMat = new THREE.PointsMaterial({
            size: 400,
            vertexColors: true,
            map: getNebulaTexture(),
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const nebulas = new THREE.Points(nebulaGeo, nebulaMat);
        scene.add(nebulas);

        // 3. Shooting Stars
        const shootingStarGeo = new THREE.BufferGeometry();
        const shootingStarPositions = new Float32Array(3 * 3); // 3 shooting stars
        for(let i=0; i<9; i++) shootingStarPositions[i] = 10000; // hide initially
        shootingStarGeo.setAttribute('position', new THREE.BufferAttribute(shootingStarPositions, 3));
        
        const shootingStarMat = new THREE.LineBasicMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.8
        });
        
        // Use individual lines for shooting stars instead of LineSegments to easily control lengths
        const shootingStars = [];
        for(let i=0; i<5; i++) {
            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(6); // start and end point
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            const line = new THREE.Line(geo, shootingStarMat);
            line.userData = {
                active: false,
                x: 0, y: 0, z: 0,
                speed: 0, length: 0
            };
            scene.add(line);
            shootingStars.push(line);
        }

        const resetShootingStar = (star) => {
            star.userData.active = true;
            star.userData.x = (Math.random() - 0.5) * 1000;
            star.userData.y = camera.position.y - 1000; // start far below camera
            star.userData.z = (Math.random() - 0.5) * 1000;
            star.userData.speed = 10 + Math.random() * 20;
            star.userData.length = 50 + Math.random() * 100;
        };

        // Window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Animation Loop
        const animateSpace = () => {
            requestAnimationFrame(animateSpace);

            // Move camera forward through the space (Y axis because we rotated camera)
            camera.position.y -= 2.5;

            // Rotate galaxy slowly
            stars.rotation.y += 0.0005;
            nebulas.rotation.y += 0.0002;

            // Infinite loop logic: Move stars that pass behind camera to far front
            const positions = stars.geometry.attributes.position.array;
            for(let i=0; i<starCount; i++) {
                if(positions[i*3+1] > camera.position.y + 500) {
                    positions[i*3+1] -= 2000;
                }
            }
            stars.geometry.attributes.position.needsUpdate = true;

            const nebPositions = nebulas.geometry.attributes.position.array;
            for(let i=0; i<nebulaCount; i++) {
                if(nebPositions[i*3+1] > camera.position.y + 500) {
                    nebPositions[i*3+1] -= 2000;
                }
            }
            nebulas.geometry.attributes.position.needsUpdate = true;

            // Update shooting stars
            shootingStars.forEach(star => {
                if(!star.userData.active) {
                    // Randomly spawn
                    if(Math.random() > 0.99) resetShootingStar(star);
                } else {
                    star.userData.y += star.userData.speed;
                    star.userData.x += star.userData.speed * 0.2; // Slight diagonal
                    
                    const pos = star.geometry.attributes.position.array;
                    // End point (head)
                    pos[0] = star.userData.x;
                    pos[1] = star.userData.y;
                    pos[2] = star.userData.z;
                    // Start point (tail)
                    pos[3] = star.userData.x - star.userData.speed * 0.2 * star.userData.length * 0.1;
                    pos[4] = star.userData.y - star.userData.length;
                    pos[5] = star.userData.z;
                    
                    star.geometry.attributes.position.needsUpdate = true;

                    // Deactivate if passed camera
                    if(star.userData.y > camera.position.y + 200) {
                        star.userData.active = false;
                        pos.fill(10000); // hide
                        star.geometry.attributes.position.needsUpdate = true;
                    }
                }
            });

            renderer.render(scene, camera);
        };

        animateSpace();
    };

    initSpaceBackground();

    // --- 10. Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
            btn.style.opacity = '0.8';
            
            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Connected Successfully';
                btn.style.background = 'linear-gradient(90deg, #10B981, #059669)';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // --- 11. AI Chatbot Logic ---
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const voiceBtn = document.getElementById('voice-btn');
    const chatMessages = document.getElementById('chatbot-messages');
    const typingIndicator = document.getElementById('typing-indicator');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');

    // Toggle Chatbot
    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
    });

    // Create Message Element
    const createMessage = (message, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.innerHTML = `<div class="msg-content">${message}</div>`;
        return msgDiv;
    };

    // Handle incoming AI Responses
    const generateAIResponse = (userMessage) => {
        // Show typing indicator
        chatMessages.appendChild(typingIndicator);
        typingIndicator.style.display = 'flex';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Artificial delay for realism
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            
            let aiMsg = "Interesting thought. The evolution of cybernetics will soon make that a reality.";
            
            const lowerMsg = userMessage.toLowerCase();
            if(lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
                aiMsg = "Greetings, human. Are you ready to explore the next stage of evolution?";
            } else if(lowerMsg.includes("neural sync")) {
                aiMsg = "Neural Network Sync is our breakthrough technology allowing direct brain-to-machine communication, eliminating the need for physical interfaces.";
            } else if(lowerMsg.includes("timeline")) {
                aiMsg = "Our evolutionary timeline predicts total human-machine integration by 2045. You can view the full timeline in the Evolution Timeline section above.";
            } else if(lowerMsg.includes("technology")) {
                aiMsg = "We specialize in AI, Quantum Computing, Neural Interfaces, and Cybernetic Enhancements.";
            }

            chatMessages.appendChild(createMessage(aiMsg, 'ai'));
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);
    };

    // Send Message
    const handleOutgoingChat = () => {
        const userMessage = chatInput.value.trim();
        if(!userMessage) return;

        // Clear input & append user msg
        chatInput.value = '';
        chatMessages.appendChild(createMessage(userMessage, 'user'));
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generate response
        generateAIResponse(userMessage);
    };

    sendBtn.addEventListener('click', handleOutgoingChat);
    chatInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            handleOutgoingChat();
        }
    });

    // Suggestion Buttons
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chatInput.value = btn.textContent;
            handleOutgoingChat();
        });
    });

    // --- Speech-to-Text Integration (Web Speech API) ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        voiceBtn.addEventListener('click', () => {
            if (voiceBtn.classList.contains('recording')) {
                recognition.stop();
            } else {
                recognition.start();
            }
        });

        recognition.onstart = () => {
            voiceBtn.classList.add('recording');
            chatInput.placeholder = "Listening...";
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            chatInput.value = transcript;
            // Optionally send automatically: handleOutgoingChat();
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onend = () => {
            voiceBtn.classList.remove('recording');
            chatInput.placeholder = "Initiate sequence...";
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            voiceBtn.classList.remove('recording');
            chatInput.placeholder = "Initiate sequence...";
        };
    } else {
        voiceBtn.style.display = 'none'; // Hide if browser doesn't support
        console.warn("Speech Recognition API not supported in this browser.");
    }

    // --- 12. Three.js Interactive 3D Earth ---
    const initThreeEarth = () => {
        const container = document.getElementById('earth-canvas-container');
        if (!container) return;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 15;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // OrbitControls for mouse interaction
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false; // Prevent scrolling zoom interference
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;

        // Group to hold all earth elements
        const earthGroup = new THREE.Group();
        scene.add(earthGroup);

        // 1. Base Dark Sphere (Core)
        const coreGeometry = new THREE.SphereGeometry(5, 64, 64);
        const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x050816 });
        const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
        earthGroup.add(coreSphere);

        // 2. Cyberpunk Grid Overlay (Wireframe)
        const gridGeometry = new THREE.SphereGeometry(5.05, 32, 32);
        const gridMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x00F5FF, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.15 
        });
        const gridSphere = new THREE.Mesh(gridGeometry, gridMaterial);
        earthGroup.add(gridSphere);

        // 3. Neon Atmosphere Glow
        const atmosGeometry = new THREE.SphereGeometry(5.8, 64, 64);
        const atmosMaterial = new THREE.MeshBasicMaterial({
            color: 0x00F5FF,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        });
        const atmosSphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
        earthGroup.add(atmosSphere);

        // 4. Connected AI Network Nodes
        const nodeCount = 80;
        const radius = 5.15; // Slightly above the surface
        
        // Node Geometry (Points)
        const nodeGeometry = new THREE.BufferGeometry();
        const nodePositions = new Float32Array(nodeCount * 3);
        
        for (let i = 0; i < nodeCount; i++) {
            // Generate random points on sphere
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            
            nodePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            nodePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            nodePositions[i * 3 + 2] = radius * Math.cos(phi);
        }
        
        nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
        const nodeMaterial = new THREE.PointsMaterial({
            color: 0x8B5CF6, // Secondary color (purple)
            size: 0.2,
            transparent: true,
            opacity: 0.8
        });
        const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
        earthGroup.add(nodes);

        // Connect nodes that are close to each other
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const dx = nodePositions[i * 3] - nodePositions[j * 3];
                const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
                const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                // If nodes are close, draw a line between them
                if (distance < 2.5) {
                    linePositions.push(
                        nodePositions[i * 3], nodePositions[i * 3 + 1], nodePositions[i * 3 + 2],
                        nodePositions[j * 3], nodePositions[j * 3 + 1], nodePositions[j * 3 + 2]
                    );
                }
            }
        }
        
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x8B5CF6,
            transparent: true,
            opacity: 0.3
        });
        const networkLines = new THREE.LineSegments(lineGeometry, lineMaterial);
        earthGroup.add(networkLines);

        // Optional: Add some floating particles around the earth
        const particleCount = 200;
        const particleGeo = new THREE.BufferGeometry();
        const particlePos = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            
            // Only add particles outside the earth
            if (Math.sqrt(x*x + y*y + z*z) > 6) {
                particlePos[i * 3] = x;
                particlePos[i * 3 + 1] = y;
                particlePos[i * 3 + 2] = z;
            }
        }
        
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0x00F5FF,
            size: 0.05,
            transparent: true,
            opacity: 0.5
        });
        const particleSystem = new THREE.Points(particleGeo, particleMat);
        scene.add(particleSystem);

        // Handle Window Resize
        window.addEventListener('resize', () => {
            if(!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            // Slight pulse animation for nodes
            const time = Date.now() * 0.001;
            nodeMaterial.size = 0.15 + Math.sin(time * 2) * 0.05;
            
            // Slow rotation of background particles
            particleSystem.rotation.y -= 0.0005;
            particleSystem.rotation.x += 0.0002;

            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    };

    // Initialize Three.js after a small delay to ensure container sizing is correct
    setTimeout(initThreeEarth, 100);

    // --- 13. Live Animated Neural Network Canvas ---
    const initNeuralNetwork = () => {
        const canvas = document.getElementById('neural-canvas');
        const tooltip = document.getElementById('neural-tooltip');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const container = canvas.parentElement;

        let width, height;
        const resizeCanvas = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const nodes = [];
        const numNodes = 75;
        const concepts = [
            "Synapse Alpha", "Deep Learning Core", "Quantum Node", 
            "Neural Pathway", "Data Core", "Logic Gate", 
            "Memory Cluster", "Sensory Input", "Motor Output", 
            "Cognitive Hub", "Biometric Sync"
        ];

        // Generate Nodes in a brain-like shape (two hemispheres)
        for (let i = 0; i < numNodes; i++) {
            const angle = Math.random() * Math.PI * 2;
            const rX = (Math.random() * 0.4 + 0.05) * width;
            const rY = (Math.random() * 0.4 + 0.1) * height;
            
            // Create a gap in the middle to simulate left/right brain hemispheres
            let x = width / 2 + Math.cos(angle) * rX;
            if(x > width/2 - 15 && x < width/2 + 15) {
                x += (x > width/2) ? 15 : -15; 
            }
            const y = height / 2 + Math.sin(angle) * rY;
            
            nodes.push({
                x: x, 
                y: y,
                baseX: x, 
                baseY: y,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 1.5,
                pulsePhase: Math.random() * Math.PI * 2,
                info: concepts[Math.floor(Math.random() * concepts.length)] + " | " + Math.floor(Math.random()*100) + "% Sync"
            });
        }

        // Establish connections (edges)
        const connections = [];
        for (let i = 0; i < numNodes; i++) {
            for (let j = i + 1; j < numNodes; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                // Connect if nodes are close
                if (dist < 70) {
                    connections.push({ a: nodes[i], b: nodes[j], alpha: 1 - dist/70 });
                }
            }
        }

        const signals = [];
        // Periodically spawn data transfer signals
        setInterval(() => {
            if(connections.length > 0) {
                // Spawn multiple signals at once for a busy brain effect
                for(let k=0; k<3; k++) {
                    const conn = connections[Math.floor(Math.random() * connections.length)];
                    signals.push({
                        start: Math.random() > 0.5 ? conn.a : conn.b, // Random direction
                        end: Math.random() > 0.5 ? conn.b : conn.a,
                        progress: 0,
                        speed: 0.01 + Math.random() * 0.03
                    });
                }
            }
        }, 150);

        let mouseX = -1000;
        let mouseY = -1000;
        let hoveredNode = null;

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouseX = -1000;
            mouseY = -1000;
            tooltip.style.display = 'none';
        });

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, width, height);

            hoveredNode = null;

            // Update & Draw Connections first so they are under nodes
            ctx.lineWidth = 1;
            connections.forEach(conn => {
                ctx.beginPath();
                ctx.moveTo(conn.a.x, conn.a.y);
                ctx.lineTo(conn.b.x, conn.b.y);
                
                // Highlight connected edges if node is hovered
                if ((hoveredNode && (hoveredNode === conn.a || hoveredNode === conn.b)) || 
                    (Math.sqrt(Math.pow(mouseX - conn.a.x, 2) + Math.pow(mouseY - conn.a.y, 2)) < 40) ||
                    (Math.sqrt(Math.pow(mouseX - conn.b.x, 2) + Math.pow(mouseY - conn.b.y, 2)) < 40)) {
                    ctx.strokeStyle = `rgba(139, 92, 246, 0.6)`;
                    ctx.lineWidth = 1.5;
                } else {
                    ctx.strokeStyle = `rgba(0, 245, 255, ${conn.alpha * 0.25})`;
                    ctx.lineWidth = 0.8;
                }
                
                ctx.shadowBlur = 0;
                ctx.stroke();
            });

            // Draw Data Signals
            signals.forEach((sig, index) => {
                sig.progress += sig.speed;
                if (sig.progress >= 1) {
                    signals.splice(index, 1);
                } else {
                    const x = sig.start.x + (sig.end.x - sig.start.x) * sig.progress;
                    const y = sig.start.y + (sig.end.y - sig.start.y) * sig.progress;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = '#FFFFFF';
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = '#00F5FF';
                    ctx.fill();
                }
            });

            // Update & Draw Nodes
            nodes.forEach(node => {
                // Floating motion
                node.x += node.vx;
                node.y += node.vy;
                
                // Spring back to base position
                const dx = node.baseX - node.x;
                const dy = node.baseY - node.y;
                node.vx += dx * 0.005;
                node.vy += dy * 0.005;
                
                // Friction
                node.vx *= 0.92;
                node.vy *= 0.92;

                node.pulsePhase += 0.05;

                // Mouse interaction
                const mDx = mouseX - node.x;
                const mDy = mouseY - node.y;
                const mDist = Math.sqrt(mDx*mDx + mDy*mDy);
                
                let currentRadius = node.radius + Math.sin(node.pulsePhase) * 0.5;
                let color = 'rgba(0, 245, 255, 0.9)';
                
                if (mDist < 40) {
                    currentRadius = node.radius * 2.5;
                    color = '#8B5CF6'; // Purple highlight
                    hoveredNode = node;
                    
                    // Slightly repel from mouse
                    node.vx -= mDx * 0.01;
                    node.vy -= mDy * 0.01;
                }

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = color;
                ctx.fill();
            });

            // Tooltip logic
            if (hoveredNode) {
                tooltip.style.display = 'block';
                tooltip.style.left = (hoveredNode.x + 20) + 'px';
                tooltip.style.top = (hoveredNode.y - 20) + 'px';
                tooltip.textContent = hoveredNode.info;
            } else {
                tooltip.style.display = 'none';
            }
        };

        animate();
    };

    setTimeout(initNeuralNetwork, 100);

    // --- 14. Holographic AI Brain ---
    const initAIBrain = () => {
        const wrapper = document.getElementById('brain-canvas-wrapper');
        const dataStream = document.getElementById('data-stream');
        if (!wrapper) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, wrapper.clientWidth / wrapper.clientHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        wrapper.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;

        // Generate Brain Point Cloud
        const brainGeo = new THREE.BufferGeometry();
        const brainPositions = [];
        const brainColors = [];
        
        for (let i = 0; i < 40000; i++) {
            const x = (Math.random() - 0.5) * 16;
            const y = (Math.random() - 0.5) * 16;
            const z = (Math.random() - 0.5) * 16;

            const x2 = x * x, y2 = y * y, z2 = z * z;
            const leftHemi = Math.pow(x + 2, 2)/9 + y2/16 + z2/12;
            const rightHemi = Math.pow(x - 2, 2)/9 + y2/16 + z2/12;

            // Shape equation for two hemispheres
            if (leftHemi < 1 || rightHemi < 1) {
                // Sulci and gyri folds (carving out sections using noise-like trig)
                const fold = Math.sin(x * 2) * Math.cos(y * 2) * Math.sin(z * 2);
                if (fold > -0.2) {
                    brainPositions.push(x, y, z);
                    
                    // Mix primary (cyan) and secondary (purple) colors
                    const color = new THREE.Color();
                    if(Math.random() > 0.5) {
                        color.setHex(0x00F5FF);
                    } else {
                        color.setHex(0x8B5CF6);
                    }
                    brainColors.push(color.r, color.g, color.b);
                }
            }
        }

        brainGeo.setAttribute('position', new THREE.Float32BufferAttribute(brainPositions, 3));
        brainGeo.setAttribute('color', new THREE.Float32BufferAttribute(brainColors, 3));

        // Create glowing texture for particles
        const createGlow = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 32; canvas.height = 32;
            const ctx = canvas.getContext('2d');
            const grad = ctx.createRadialGradient(16,16,0, 16,16,16);
            grad.addColorStop(0, 'rgba(255,255,255,1)');
            grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,32,32);
            return new THREE.CanvasTexture(canvas);
        };

        const brainMat = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            map: createGlow(),
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const brain = new THREE.Points(brainGeo, brainMat);
        scene.add(brain);

        // Animated Neural Firing (Circuits)
        const firingGeo = new THREE.BufferGeometry();
        const firingCount = 60; // number of firing lines
        const firingPositions = new Float32Array(firingCount * 6);
        firingGeo.setAttribute('position', new THREE.BufferAttribute(firingPositions, 3));
        const firingMat = new THREE.LineBasicMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        const firingLines = new THREE.LineSegments(firingGeo, firingMat);
        scene.add(firingLines);

        // Resize handler
        window.addEventListener('resize', () => {
            if(!wrapper) return;
            renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
            camera.aspect = wrapper.clientWidth / wrapper.clientHeight;
            camera.updateProjectionMatrix();
        });

        // Data Stream UI updater
        const codes = [
            "0x8F9A: SYNAPSE_FIRE",
            "RECALIBRATING_NEURAL_NET...",
            "QUANTUM_SYNC: 99.8%",
            "0x3B2C: MEMORY_ALLOCATION",
            "EXECUTING_DEEP_LEARN_PROTOCOL",
            "OPTIMIZING_PATHWAYS",
            "AWAITING_INPUT..."
        ];

        setInterval(() => {
            if(dataStream.children.length > 5) {
                dataStream.removeChild(dataStream.firstChild);
            }
            const line = document.createElement('div');
            line.className = 'data-line';
            line.textContent = `> ${codes[Math.floor(Math.random() * codes.length)]} [OK]`;
            dataStream.appendChild(line);
        }, 800);

        // Animation Loop
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.05;

            // Breathing effect
            brain.scale.setScalar(1 + Math.sin(time * 0.5) * 0.02);

            // Update firing lines (real-time thinking animation)
            if(Math.random() > 0.1) {
                for(let i = 0; i < firingCount; i++) {
                    // Pick random point from brain
                    const r1 = Math.floor(Math.random() * (brainPositions.length/3)) * 3;
                    const r2 = Math.floor(Math.random() * (brainPositions.length/3)) * 3;
                    
                    // Only connect if close
                    const dx = brainPositions[r1] - brainPositions[r2];
                    const dy = brainPositions[r1+1] - brainPositions[r2+1];
                    const dz = brainPositions[r1+2] - brainPositions[r2+2];
                    
                    if(dx*dx + dy*dy + dz*dz < 20) {
                        firingPositions[i*6] = brainPositions[r1];
                        firingPositions[i*6+1] = brainPositions[r1+1];
                        firingPositions[i*6+2] = brainPositions[r1+2];
                        firingPositions[i*6+3] = brainPositions[r2];
                        firingPositions[i*6+4] = brainPositions[r2+1];
                        firingPositions[i*6+5] = brainPositions[r2+2];
                    } else {
                        // Hide line if not close
                        firingPositions[i*6] = 0; firingPositions[i*6+1] = 0; firingPositions[i*6+2] = 0;
                        firingPositions[i*6+3] = 0; firingPositions[i*6+4] = 0; firingPositions[i*6+5] = 0;
                    }
                }
                firingGeo.attributes.position.needsUpdate = true;
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    };

    setTimeout(initAIBrain, 100);

    // --- 15. Dashboard Live Updater ---
    const updateDashboard = () => {
        // Elements
        const valAi = document.getElementById('val-ai');
        const barAi = document.getElementById('bar-ai');
        const valNeural = document.getElementById('val-neural');
        const barNeural = document.getElementById('bar-neural');
        const valCpu = document.getElementById('val-cpu');
        const barCpu = document.getElementById('bar-cpu');
        const valQuantum = document.getElementById('val-quantum');
        const barQuantum = document.getElementById('bar-quantum');
        const valRobots = document.getElementById('val-robots');
        const barRobots = document.getElementById('bar-robots');
        const valSecurity = document.getElementById('val-security');
        const barSecurity = document.getElementById('bar-security');

        if(!valAi) return; // Prevent errors if section doesn't exist

        // Helper to get a random fluctuation within a range
        const getFluctuation = (current, min, max, maxChange = 5) => {
            let change = (Math.random() - 0.5) * maxChange * 2;
            let newVal = current + change;
            if(newVal > max) newVal = max;
            if(newVal < min) newVal = min;
            return Math.round(newVal);
        };

        let curAi = 87, curNeural = 92, curCpu = 45, curQuantum = 99, curRobots = 8402;

        setInterval(() => {
            // AI Processing (80-100%)
            curAi = getFluctuation(curAi, 80, 100, 3);
            valAi.textContent = `${curAi}%`;
            barAi.style.width = `${curAi}%`;

            // Neural Connections (85-100%)
            curNeural = getFluctuation(curNeural, 85, 100, 2);
            valNeural.textContent = `${curNeural}%`;
            barNeural.style.width = `${curNeural}%`;

            // CPU Usage (highly fluctuating 30-85%)
            curCpu = getFluctuation(curCpu, 30, 85, 15);
            valCpu.textContent = `${curCpu}%`;
            barCpu.style.width = `${curCpu}%`;
            
            // Color changing based on CPU load
            if (curCpu > 75) {
                barCpu.style.background = 'linear-gradient(90deg, #EF4444, #DC2626)'; // Red
                barCpu.style.boxShadow = '0 0 15px #EF4444';
            } else if (curCpu > 50) {
                barCpu.style.background = 'linear-gradient(90deg, #F59E0B, #D97706)'; // Yellow/Orange
                barCpu.style.boxShadow = '0 0 15px #F59E0B';
            } else {
                barCpu.style.background = 'linear-gradient(90deg, #10B981, #059669)'; // Green
                barCpu.style.boxShadow = '0 0 15px #10B981';
            }

            // Quantum Power (always 98-100%)
            curQuantum = getFluctuation(curQuantum, 98, 100, 1);
            valQuantum.textContent = `${curQuantum}%`;
            barQuantum.style.width = `${curQuantum}%`;

            // Active Robots (slowly growing with tiny fluctuations)
            curRobots += Math.floor(Math.random() * 5) - 1; // Trend slightly upward
            valRobots.textContent = curRobots.toLocaleString();
            // Bar for robots can just hover around 84-88% since it's a huge capacity
            const robotCapPct = Math.min(100, 80 + (curRobots % 100) / 10);
            barRobots.style.width = `${robotCapPct}%`;

            // Network Security occasionally drops to 99% then back to 100%
            if (Math.random() > 0.9) {
                valSecurity.textContent = `99%`;
                barSecurity.style.width = `99%`;
            } else {
                valSecurity.textContent = `100%`;
                barSecurity.style.width = `100%`;
            }

        }, 1200); // Update every 1.2 seconds
    };

    updateDashboard();

    // --- 16. Quantum Energy Reactor ---
    const initReactor = () => {
        const reactorCore = document.getElementById('reactor-core');
        const particleContainer = document.getElementById('reactor-particles');
        const energyLevelSpan = document.getElementById('energy-level');
        if(!reactorCore || !particleContainer || !energyLevelSpan) return;

        // Dynamic Energy Level Text
        setInterval(() => {
            if (reactorCore.matches(':hover')) {
                energyLevelSpan.textContent = 'OVERLOAD';
                energyLevelSpan.style.color = '#fff';
                energyLevelSpan.style.textShadow = '0 0 20px #fff, 0 0 40px var(--primary)';
            } else {
                const val = 90 + Math.random() * 9.9;
                energyLevelSpan.textContent = `${val.toFixed(1)}%`;
                energyLevelSpan.style.color = 'var(--primary)';
                energyLevelSpan.style.textShadow = '0 0 10px rgba(255,255,255,0.8), 0 0 20px var(--primary)';
            }
        }, 150); // fast updates

        // Neon Particle Generator
        const createParticle = () => {
            const p = document.createElement('div');
            p.className = 'reactor-particle';
            
            // Random angle and distance
            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 50;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            // Mix primary (cyan) and secondary (purple) colors
            const isPurple = Math.random() > 0.5;
            p.style.background = isPurple ? 'var(--secondary)' : 'var(--primary)';
            p.style.boxShadow = `0 0 15px ${p.style.background}`;

            // Make some particles bigger
            if(Math.random() > 0.8) {
                p.style.width = '6px';
                p.style.height = '6px';
            }

            particleContainer.appendChild(p);

            // Faster ejection on hover
            const isHovered = reactorCore.matches(':hover');
            const duration = isHovered ? 400 + Math.random() * 200 : 1000 + Math.random() * 1000;
            const targetX = isHovered ? tx * 2 : tx;
            const targetY = isHovered ? ty * 2 : ty;
            
            const animation = p.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(0)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
            });

            animation.onfinish = () => {
                p.remove();
            };
        };

        // Generate particles on a tight loop
        setInterval(() => {
            const count = reactorCore.matches(':hover') ? 8 : 2; // Spit out more particles when hovering
            for(let i=0; i<count; i++) createParticle();
        }, 80);
    };

    setTimeout(initReactor, 500);

    // --- 17. Security Center ---
    const initSecurity = () => {
        const threatCounter = document.getElementById('threat-counter');
        const threatLog = document.getElementById('threat-log');
        const shieldInner = document.querySelector('.shield-inner');
        if(!threatCounter || !threatLog || !shieldInner) return;

        let threats = 0;
        
        const generateIP = () => {
            return `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
        };

        const types = ["DDoS ATTACK", "SQL INJECTION", "UNAUTHORIZED ACCESS", "MALWARE PAYLOAD", "BRUTE FORCE", "PORT SCAN"];

        setInterval(() => {
            // 25% chance to detect a real threat
            if (Math.random() > 0.75) {
                threats += Math.floor(Math.random() * 3) + 1;
                threatCounter.textContent = threats;

                // Log the threat
                const entry = document.createElement('div');
                entry.className = 'log-entry log-alert';
                const time = new Date().toLocaleTimeString('en-US', { hour12: false });
                entry.textContent = `[${time}] BLOCKED: ${types[Math.floor(Math.random() * types.length)]} from ${generateIP()}`;
                threatLog.appendChild(entry);

                // Shield impact flash effect
                shieldInner.classList.add('shield-defending');
                setTimeout(() => {
                    shieldInner.classList.remove('shield-defending');
                }, 400);

            } else {
                // Regular safe packet log
                if (Math.random() > 0.4) {
                    const entry = document.createElement('div');
                    entry.className = 'log-entry';
                    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
                    entry.textContent = `[${time}] Packet inspection: ${generateIP()} [CLEAN]`;
                    threatLog.appendChild(entry);
                }
            }

            // Keep log from growing infinitely
            while(threatLog.children.length > 6) {
                threatLog.removeChild(threatLog.firstChild);
            }
        }, 1800);
    };

    initSecurity();

    // --- 18. Interactive Neon World Map ---
    const initWorldMap = () => {
        const wrapper = document.getElementById('world-map-canvas');
        if (!wrapper) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, wrapper.clientWidth / wrapper.clientHeight, 0.1, 1000);
        camera.position.z = 25; // Adjusted camera distance

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        wrapper.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.8;

        const mapGroup = new THREE.Group();
        scene.add(mapGroup);

        const globeRadius = 10;

        // 1. Transparent Inner Core
        const coreGeo = new THREE.SphereGeometry(globeRadius * 0.98, 64, 64);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0x050816, transparent: true, opacity: 0.8 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        mapGroup.add(core);

        // 2. Wireframe / Grid Base
        const gridGeo = new THREE.SphereGeometry(globeRadius, 32, 32);
        const gridMat = new THREE.MeshBasicMaterial({ 
            color: 0x00F5FF, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.1 
        });
        mapGroup.add(new THREE.Mesh(gridGeo, gridMat));

        // Coordinate Helper
        const latLongToVector3 = (lat, lon, radius) => {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);

            const x = -(radius * Math.sin(phi) * Math.cos(theta));
            const z = (radius * Math.sin(phi) * Math.sin(theta));
            const y = (radius * Math.cos(phi));

            return new THREE.Vector3(x, y, z);
        };

        // 3. Major Cities (Pulsing Nodes)
        const cities = [
            { name: "New York", lat: 40.7128, lon: -74.0060 },
            { name: "London", lat: 51.5074, lon: -0.1278 },
            { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
            { name: "Sydney", lat: -33.8688, lon: 151.2093 },
            { name: "Dubai", lat: 25.2048, lon: 55.2708 },
            { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
            { name: "Singapore", lat: 1.3521, lon: 103.8198 },
            { name: "Moscow", lat: 55.7558, lon: 37.6173 },
            { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
            { name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
            { name: "Paris", lat: 48.8566, lon: 2.3522 },
            { name: "Shanghai", lat: 31.2304, lon: 121.4737 }
        ];

        const cityNodes = [];
        const cityMaterial = new THREE.MeshBasicMaterial({ color: 0x00F5FF });
        const cityGeometry = new THREE.SphereGeometry(0.15, 16, 16);

        cities.forEach(city => {
            const pos = latLongToVector3(city.lat, city.lon, globeRadius);
            const mesh = new THREE.Mesh(cityGeometry, cityMaterial);
            mesh.position.copy(pos);
            mapGroup.add(mesh);
            cityNodes.push(mesh);

            // Add glow ring around city
            const ringGeo = new THREE.RingGeometry(0.2, 0.3, 16);
            const ringMat = new THREE.MeshBasicMaterial({ 
                color: 0x8B5CF6, 
                transparent: true, 
                opacity: 0.6,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.copy(pos);
            ring.lookAt(new THREE.Vector3(0,0,0)); // face outward
            mapGroup.add(ring);
            city.ring = ring;
        });

        // 4. AI Network Routes (Curved Beziers between cities)
        const routes = [];
        const routeMaterial = new THREE.LineBasicMaterial({ 
            color: 0x00F5FF, 
            transparent: true, 
            opacity: 0.2 
        });

        for (let i = 0; i < cities.length; i++) {
            // Connect each city to 2-3 random other cities
            const connections = Math.floor(Math.random() * 2) + 2;
            for(let j = 0; j < connections; j++) {
                const targetIdx = Math.floor(Math.random() * cities.length);
                if (i !== targetIdx) {
                    const start = latLongToVector3(cities[i].lat, cities[i].lon, globeRadius);
                    const end = latLongToVector3(cities[targetIdx].lat, cities[targetIdx].lon, globeRadius);
                    
                    // Create curved arc
                    const distance = start.distanceTo(end);
                    const midPoint = start.clone().lerp(end, 0.5);
                    // Push midpoint out to create an arc
                    midPoint.normalize().multiplyScalar(globeRadius + distance * 0.3);

                    const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
                    const points = curve.getPoints(50);
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    
                    const line = new THREE.Line(geometry, routeMaterial);
                    mapGroup.add(line);

                    routes.push({ curve: curve });
                }
            }
        }

        // 5. Data Packets traveling along routes
        const packets = [];
        const packetGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const packetMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

        for(let i=0; i<30; i++) {
            const mesh = new THREE.Mesh(packetGeo, packetMat);
            mapGroup.add(mesh);
            packets.push({
                mesh: mesh,
                routeIdx: Math.floor(Math.random() * routes.length),
                progress: Math.random(),
                speed: 0.005 + Math.random() * 0.01
            });
        }

        // Resize handler
        window.addEventListener('resize', () => {
            if(!wrapper) return;
            renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
            camera.aspect = wrapper.clientWidth / wrapper.clientHeight;
            camera.updateProjectionMatrix();
        });

        // Animation
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.05;

            // Pulse city rings
            cities.forEach((city, index) => {
                if(city.ring) {
                    const scale = 1 + Math.sin(time * 2 + index) * 0.5;
                    city.ring.scale.set(scale, scale, 1);
                    city.ring.material.opacity = 0.6 - (scale - 1) * 0.5;
                }
            });

            // Animate data packets along routes
            packets.forEach(packet => {
                packet.progress += packet.speed;
                if(packet.progress >= 1) {
                    packet.progress = 0;
                    packet.routeIdx = Math.floor(Math.random() * routes.length);
                }
                const route = routes[packet.routeIdx].curve;
                const pos = route.getPoint(packet.progress);
                packet.mesh.position.copy(pos);
            });

            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    };

    setTimeout(initWorldMap, 500);

    // --- 19. Achievements System ---
    const initAchievements = () => {
        const achievementsStatus = {
            tech: false,
            sections: false,
            form: false
        };

        const achContainer = document.createElement('div');
        achContainer.className = 'achievement-container';
        document.body.appendChild(achContainer);

        const unlockAchievement = (id, title, iconClass) => {
            if(achievementsStatus[id]) return;
            achievementsStatus[id] = true;

            const card = document.createElement('div');
            card.className = 'achievement-card';
            card.innerHTML = `
                <div class="achievement-icon"><i class="${iconClass}"></i></div>
                <div class="achievement-text">
                    <h4>Achievement Unlocked</h4>
                    <p>${title}</p>
                </div>
            `;
            
            achContainer.appendChild(card);

            // Remove after 4 seconds
            setTimeout(() => {
                card.classList.add('fade-out');
                setTimeout(() => {
                    if(card.parentNode) card.parentNode.removeChild(card);
                }, 500);
            }, 4000);
        };

        // Trigger 1: Explore Technology
        const techBtns = document.querySelectorAll('a[href="#technology"]');
        techBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                unlockAchievement('tech', 'Explore Technology', 'fas fa-microchip');
            });
        });

        // Trigger 2: Visit All Sections
        const allSections = document.querySelectorAll('section');
        const visitedSections = new Set();
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    visitedSections.add(entry.target.id);
                    
                    // Native scroll fallback for Technology
                    if(entry.target.id === 'technology') {
                        unlockAchievement('tech', 'Explore Technology', 'fas fa-microchip');
                    }
                    
                    if(visitedSections.size >= allSections.length) {
                        unlockAchievement('sections', 'Visit All Sections', 'fas fa-globe');
                    }
                }
            });
        }, { threshold: 0.1 });

        allSections.forEach(sec => sectionObserver.observe(sec));

        // Trigger 3: Complete Contact Form
        const cForm = document.getElementById('contactForm');
        if(cForm) {
            cForm.addEventListener('submit', () => {
                // Short delay to match form submission simulation
                setTimeout(() => {
                    unlockAchievement('form', 'Complete Contact Form', 'fas fa-paper-plane');
                }, 1500);
            });
        }
    };

    initAchievements();

});
