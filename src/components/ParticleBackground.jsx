import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationId;

    const particles = [];
    const particleCount = 85;
    const connectionDistance = 145;
    const mouseRadius = 180;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 0.7,
          color: Math.random() > 0.82 ? "#9b7bff" : "#00d4ff",
        });
      }
    }

    const stars = [];

    function createStars(x, y) {
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;

        stars.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: Math.random() * 3 + 1,
          color: "#FFFFFF",
        });
      }
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;

      createStars(mouse.x, mouse.y);
    }

    function handleMouseLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Move particles and react to the mouse
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius && distance > 0) {
            const force = (1 - distance / mouseRadius) * 0.025;
            p.vx += (dx / distance) * force;
            p.vy += (dy / distance) * force;
          }
        }

        // Keep particle speed controlled
        p.vx = Math.max(-0.8, Math.min(0.8, p.vx));
        p.vy = Math.max(-0.8, Math.min(0.8, p.vy));

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.38;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Add extra connections and glow around the mouse
      if (mouse.active) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            const opacity = (1 - distance / mouseRadius) * 0.7;

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        const glow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 65
        );

        glow.addColorStop(0, "rgba(0, 212, 255, 0.14)");
        glow.addColorStop(1, "rgba(0, 212, 255, 0)");

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 65, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Magical stars following the mouse
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];

        star.x += star.vx;
        star.y += star.vy;
        star.vy += 0.015;
        star.life -= 0.018;

        ctx.save();
        ctx.globalAlpha = Math.max(0, star.life);
        ctx.shadowBlur = 12;
        ctx.shadowColor = star.color;
        ctx.fillStyle = star.color;

        // Four-point star shape
        ctx.beginPath();
        ctx.moveTo(star.x, star.y - star.size * 2);
        ctx.lineTo(star.x + star.size * 0.5, star.y);
        ctx.lineTo(star.x, star.y + star.size * 2);
        ctx.lineTo(star.x - star.size * 0.5, star.y);
        ctx.closePath();
        ctx.fill();

        ctx.restore();

        if (star.life <= 0) {
          stars.splice(i, 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      aria-hidden="true"
    />
  );
}
