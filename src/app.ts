import { mergedChars } from "./chars.const";

const $ = (element: string) => document.querySelector(element);

export function init() {
  // CANVAS
  const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
  const ctx = canvas.getContext("2d")!;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // FONT
  const fontSize = 15;

  // OPTIONS
  const columns = canvas.width / fontSize;
  const color = "#0f8";

  // Generate random drops at beginning
  const drops: number[] = Array.from({ length: columns }).map((_, i) =>
    Math.floor(Math.random() * i * fontSize)
  );

  function draw() {
    // Sweep effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px sans-serif`;

    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      // Get random character
      const text = mergedChars[Math.floor(Math.random() * mergedChars.length)];
      // Draw the character
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Creates a continuous rain effect
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      // Increment Y coordinate to create the fall down effect
      drops[i]++;
    }
  }

  // Draw each 33ms
  setInterval(draw, 33);

  // Resize canvas on window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const triggerFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  // Event listener for fullscreen button
  $("#btn__fullscreen")!.addEventListener("click", triggerFullScreen);
}
