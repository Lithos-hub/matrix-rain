import "./style.css";
import { init } from "./app.ts";
import { version } from "../package.json";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<canvas id="canvas" width="800" height="600"></canvas>
<div class="transparent-box version">v${version}</div>
<button id="btn__fullscreen" class="transparent-box fullscreen"><img src="/public/expand.svg" width="17" height="17" onclick="triggerFullScreen()" /></button>
`;

init();
