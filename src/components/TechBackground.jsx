import { useEffect, useRef } from "react";

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable on small screens

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let intervalId;
    let resizeObserver;
    const particles = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scale
      ctx.scale(dpr, dpr);
      createParticles();
    };

    const createParticles = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const particleCount = Math.min(Math.floor((w * h) / 15000), 20); // Fewer particles

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 2.5 + 3.5, // Bigger particles
          baseColor: Math.random() > 0.5 ? [0, 255, 195] : [255, 0, 122],
          alpha: Math.random() * 0.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          pulse: Math.random() * 0.03 + 0.01,
        });
      }
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      particles.forEach((p, i) => {
        // Update motion
        p.x += p.speedX;
        p.y += p.speedY;

        // Pulse effect
        p.alpha += p.pulse;
        if (p.alpha > 0.6 || p.alpha < 0.3) p.pulse *= -1;

        // Boundary bounce
        if (p.x < 0 || p.x > w) p.speedX *= -1;
        if (p.y < 0 || p.y > h) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.baseColor[0]}, ${p.baseColor[1]}, ${p.baseColor[2]}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = 1 - dist / 100;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas.parentElement);
    resizeCanvas(); // Initial setup

    intervalId = setInterval(drawScene, 1000 / 30); // ~30 FPS

    return () => {
      clearInterval(intervalId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1, willChange: "transform, opacity" }}
    />
  );
};

export default TechBackground;
