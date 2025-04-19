import { useEffect, useRef } from "react";

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure the canvas is available
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure the context is available

    let animationFrameId;
    let resizeObserver;

    const particles = [];

    // Function to resize the canvas
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return; // Ensure the parent element is available

      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      ctx.scale(dpr, dpr);

      createParticles();
    };

    // Create particles and populate them
    const createParticles = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const particleCount = Math.min(Math.floor((w * h) / 10000), 120);
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          baseColor: Math.random() > 0.5 ? [0, 255, 195] : [255, 0, 122],
          alpha: Math.random() * 0.5 + 0.1,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: (Math.random() - 0.5) * 0.6,
          pulse: Math.random() * 0.05 + 0.01,
        });
      }
    };

    // Draw particles and handle animation
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
        if (p.alpha > 0.5 || p.alpha < 0.1) p.pulse *= -1;

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
            ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.shadowBlur = 5;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawScene);
    };

    // Use ResizeObserver for smoother canvas resize
    resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas.parentElement);

    resizeCanvas(); // Initial resize
    drawScene(); // Start drawing

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
};

export default TechBackground;
