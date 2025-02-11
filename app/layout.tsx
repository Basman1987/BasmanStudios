@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --neon-pink: #ff00ff;
  --neon-blue: #00ffff;
}

body {
  background-color: #000;
  color: #fff;
}

.neon-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1));
}

.neon-background::before,
.neon-background::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(100px);
  animation: neonPulse 10s infinite alternate;
}

.neon-background::before {
  background-color: var(--neon-pink);
  top: -150px;
  left: -150px;
}

.neon-background::after {
  background-color: var(--neon-blue);
  bottom: -150px;
  right: -150px;
}

@keyframes neonPulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Cyberpunk glow effect */
.cyberpunk-glow {
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.5);
}

.cyberpunk-text-glow {
  text-shadow: 0 0 5px rgba(255, 0, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(45deg, var(--neon-pink), var(--neon-blue));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Optimize animations for mobile */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
