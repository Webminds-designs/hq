"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Point = {
  x: number;
  y: number;
};

type Wave = {
  amplitude: number;
  context: CanvasRenderingContext2D;
  curviness: number;
  duration: number;
  fillStyle: string;
  frequency: number;
  height: number;
  points: Point[];
  segments: number;
  tweens: gsap.core.Tween[];
  waveHeight: number;
  width: number;
  x: number;
  y: number;
  init: () => void;
  resize: (width: number, height: number) => void;
  draw: () => void;
  kill: () => void;
};

const WaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resolution = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  let vw = 0,
    vh = 0;
  let waves: Wave[] = [];
  let resized = false;
  let context: CanvasRenderingContext2D | null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      canvas.width = vw * resolution;
      canvas.height = vh * resolution;
      canvas.style.width = vw + "px";
      canvas.style.height = vh + "px";
      context?.scale(resolution, resolution);
    };

    const createWave = (ctx: CanvasRenderingContext2D, options: Partial<Wave>): Wave => {
      const wave: Wave = {
        amplitude: options.amplitude || 200,
        context: ctx,
        curviness: options.curviness || 0.75,
        duration: options.duration || 2,
        fillStyle: options.fillStyle || "rgb(255,0,0)", // solid red fallback
        frequency: options.frequency || 4,
        height: options.height || 600,
        points: [],
        segments: options.segments || 100,
        tweens: [],
        waveHeight: options.waveHeight || 300,
        width: options.width || 800,
        x: options.x || 0,
        y: options.y || 0,

        init() {
          this.kill();
          const interval = this.width / this.segments;
          for (let i = 0; i <= this.segments; i++) {
            const norm = i / this.segments;
            const point: Point = {
              x: this.x + i * interval,
              y: 1,
            };
            const tween = gsap.to(point, {
              duration: this.duration,
              y: -1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            }).progress(norm * this.frequency);

            this.points.push(point);
            this.tweens.push(tween);
          }
        },

        resize(width: number, height: number) {
          this.width = width;
          this.height = height;
          const interval = this.width / this.segments;
          this.points.forEach((point: Point, i: number) => {
            point.x = this.x + i * interval;
          });
        },

        draw() {
          if (!ctx) return;
          const height = this.amplitude / 2;
          ctx.beginPath();
          ctx.moveTo(this.points[0].x, this.waveHeight + this.points[0].y * height);
          for (let i = 1; i < this.points.length; i++) {
            const p = this.points[i];
            ctx.lineTo(p.x, this.waveHeight + p.y * height);
          }
          ctx.lineTo(this.x + this.width, this.y + this.height);
          ctx.lineTo(this.x, this.y + this.height);
          ctx.closePath();
          ctx.fillStyle = this.fillStyle;
          ctx.fill();
        },

        kill() {
          this.tweens.forEach((t: gsap.core.Tween) => t.kill());
          this.tweens = [];
          this.points = [];
        },
      };

      wave.init();
      return wave;
    };

    resizeCanvas();

    // Increased waveHeight (closer to bottom) and bigger amplitude
    const wave1 = createWave(context, {
      amplitude: 300,              // bigger vertical wave size
      duration: 6,
      fillStyle: "rgb(255, 0, 0)", // bright solid red
      frequency: 2.5,
      width: vw,
      height: vh,
      segments: 100,
      waveHeight: vh * 0.7,       // moved wave down to 70% viewport height
    });

    const wave2 = createWave(context, {
      amplitude: 420,
      duration: 4.5,
      fillStyle: "rgb(180, 0, 0)", // dark solid red
      frequency: 1.5,
      width: vw,
      height: vh,
      segments: 100,
      waveHeight: vh * 0.75,
    });

    const wave3 = createWave(context, {
      amplitude: 350,
      duration: 4,
     fillStyle: "rgb(178, 34, 34)", // Firebrick red
      frequency: 3,
      width: vw,
      height: vh,
      segments: 100,
      waveHeight: vh * 0.65,
    });

    waves.push(wave1, wave2, wave3);

    gsap.to(waves, {
      duration: 12,
      waveHeight: vh * 0.8, // animate wave height near bottom
      ease: "sine.inOut",
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    gsap.to(wave1, {
      duration: 8,
      amplitude: 30,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(wave2, {
      duration: 7,
      amplitude: 70,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(wave3, {
      duration: 5,
      amplitude: 20,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    window.addEventListener("resize", () => (resized = true));

    const update = () => {
      if (!context) return;

      if (resized) {
        resizeCanvas();
        waves.forEach((w: Wave) => w.resize(vw, vh));
        resized = false;
      }

      context.clearRect(0, 0, vw, vh);
      context.globalCompositeOperation = "soft-light";
      waves.forEach((w: Wave) => w.draw());
    };

    gsap.ticker.add(update);

    return () => {
      waves.forEach((w: Wave) => w.kill());
      gsap.ticker.remove(update);
    };
  }, []);

  return (
     <canvas
    id="canvas"
    ref={canvasRef}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      opacity: 0.9,
      filter: "blur(50px)",
      width: "100%",
      height: "100%",
    }}
  />
  );
};

export default WaveCanvas;
