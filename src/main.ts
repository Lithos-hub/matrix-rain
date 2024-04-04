import "./style.css";
import { init } from "./app.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <canvas id="canvas" width="800" height="600"></canvas>

    <div class="buttons">
        <a href="https://github.com/Lithos-hub/matrix-rain" target="_blank">
            <button id="btn__github" class="transparent-box">
                <img src="/icons/github.svg" width="17" height="17" />
            </button>
        </a>
        <button id="btn__fullscreen" class="transparent-box">
            <img src="/icons/expand.svg" width="17" height="17" />
        </button>
    </div>
`;

init();
