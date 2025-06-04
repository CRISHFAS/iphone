<h3 align="center">Iphone 15 Website</h3>


## <a name="table">Tabla de contenidos</a>

1. [Introducción](#introducción)
2. [Pila tecnológica](#pila-tecnológica)
3. [Funciones](#funcioes)
4. [Inicio rápido](#inicio-rápido)
5. [Fragmentos](#fragmentos)

## <a name="introducción"> Introducción</a>

Este es un clon del sitio web del iPhone 15 Pro de Apple que usa React.js y TailwindCSS. Destaca el uso efectivo de GSAP (Greensock Animations) y Three.js para mostrar modelos de iPhone 15 Pro en varios colores y formas.

## <a name="pila-tecnológica"> Pila tecnológica</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- GSAP (Greensock)
- Vite
- Tailwind CSS

## <a name="funciones">🔋 Funciones</a>

**Hermosas animaciones sutiles y suaves con GSAP**: Experiencia de usuario mejorada con animaciones fluidas y cautivadoras con tecnología GSAP.

**Renderizado de modelos 3D con diferentes colores y tamaños**: Explora el iPhone 15 Pro desde todos los ángulos con el renderizado 3D dinámico, que ofrece varias opciones de color y tamaño.

**Carrusel de video personalizado (hecho con GSAP)**: Atraiga a los usuarios con un carrusel de video único e interactivo desarrollado con GSAP para una experiencia de navegación personalizada.

**Completely Responsive**: Acceso consistente y visualización óptima en cualquier dispositivo con un diseño totalmente responsive que se adapta a diferentes tamaños de pantalla. 

## <a name="inicio-rápido"> Inicio rápido</a>

Siga estos pasos para configurar el proyecto localmente en su máquina.

**Prerrequisitos**

Asegúrese de tener instalado lo siguiente en su máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonación del repositorio**

```bash
git clone https://github.com/CRISHFAS/iphone
cd iphone
```

**Instalación**

Instale las dependencias del proyecto usando npm:


```bash
npm install
```

**Ejecución del proyecto**

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) en su navegador para ver el proyecto.

## <a name="fragmentos"> Fragmentos</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```javascript
import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
```

</details>

<details>
<summary><code>Lights.jsx</code></summary>

```javascript
import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // Agrupar diferentes luces y formadores de luz. Podemos usar el grupo para organizar luces, cámaras, mallas y otros objetos en la escena.
    <group name="lights">
    {/**
    * @description Environment se utiliza para crear un entorno de fondo para la escena.
    * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
    */}
      <Environment resolution={256}>
        <group>
          {/**
           * @description Lightformer se utiliza para crear luces personalizadas con diversas formas y propiedades en una escena 3D.
           * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
          */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/**
      * @description spotLight se utiliza para crear una fuente de luz ubicada en un punto específico de la escena que emite luz en una dirección específica.
      * https://threejs.org/docs/#api/en/lights/SpotLight
      */}
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // la penumbra es el borde suave de una sombra proyectada por un punto de luz
        decay={0} // la cantidad en que la luz se atenúa a medida que se aleja de la fuente
        intensity={Math.PI * 0.2} // la intensidad de la luz
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />
    </group>
  );
};

export default Lights;
```
</details>

<details>
<summary><code>materials</code></summary>

```javascript
    useEffect(() => {
      Object.entries(materials).map((material) => {
        // Estos son los nombres de los materiales a los que no se les puede cambiar el color.
        if (
          material[0] !== "zFdeDaGNRwzccye" &&
          material[0] !== "ujsvqBWRMnqdwPx" &&
          material[0] !== "hUlRcbieVuIiOXG" &&
          material[0] !== "jlzuBkUzuJqgiAK" &&
          material[0] !== "xNrofRCqOXXHVZt"
        ) {
          material[1].color = new THREE.Color(props.item.color[0]);
        }
        material[1].needsUpdate = true;
      });
    }, [materials, props.item]);
```

</details>

<details>
<summary><code>VideoCarousel.jsx</code></summary>

```javascript
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  // vídeo e indicador
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    // animación deslizante para mover el video fuera de la pantalla y traer el siguiente video
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", // mostrar visualizador https://gsap.com/docs/v3/Eases
    });

    // animación de video para reproducir el video cuando está en la vista
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animación para mover el indicador
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          //obtener el progreso del video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // establece el ancho de la barra de progreso
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // móvil
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });

            // establece el color de fondo de la barra de progreso
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // cuando finalice el video, reemplace la barra de progreso con el indicador y cambie el color de fondo
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // actualizar la barra de progreso
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        // ticker para actualizar la barra de progreso
        gsap.ticker.add(animUpdate);
      } else {
        // eliminar el ticker cuando el video está en pausa (la barra de progreso se detiene)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // vd id es el id de cada video hasta que id se convierta en el número 3
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;

```

</details>

<details>
<summary><code>utils/index.js</code></summary>

```javascript
import hero from "/assets/images/hero.jpeg";

export const heroImg = hero;

import hmv from "/assets/videos/hero.mp4";
import smallmv from "/assets/videos/smallHero.mp4";
import highlightFirstmv from "/assets/videos/highlight-first.mp4";
import highlightSectmv from "/assets/videos/hightlight-third.mp4";
import highlightThirdmv from "/assets/videos/hightlight-sec.mp4";
import highlightFourthmv from "/assets/videos/hightlight-fourth.mp4";
import exploremv from "/assets/videos/explore.mp4";
import framemv from "/assets/videos/frame.mp4";

import apple from "/assets/images/apple.svg";
import search from "/assets/images/search.svg";
import bag from "/assets/images/bag.svg";
import watch from "/assets/images/watch.svg";
import right from "/assets/images/right.svg";
import replay from "/assets/images/replay.svg";
import play from "/assets/images/play.svg";
import pause from "/assets/images/pause.svg";

import yellow from "/assets/images/yellow.jpg";
import blue from "/assets/images/blue.jpg";
import white from "/assets/images/white.jpg";
import black from "/assets/images/black.jpg";
import explore1 from "/assets/images/explore1.jpg";
import explore2 from "/assets/images/explore2.jpg";
import chip from "/assets/images/chip.jpeg";
import frame from "/assets/images/frame.png";

export const heroVideo = hmv;
export const smallHeroVideo = smallmv;
export const highlightFirstVideo = highlightFirstmv;
export const highlightSecondVideo = highlightSectmv;
export const highlightThirdVideo = highlightThirdmv;
export const highlightFourthVideo = highlightFourthmv;
export const exploreVideo = exploremv;
export const frameVideo = framemv;

export const appleImg = apple;
export const searchImg = search;
export const bagImg = bag;
export const watchImg = watch;
export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const yellowImg = yellow;
export const blueImg = blue;
export const whiteImg = white;
export const blackImg = black;
export const explore1Img = explore1;
export const explore2Img = explore2;
export const chipImg = chip;
export const frameImg = frame;
```
</details>

<details>
<summary><code>index.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: white;
  width: 100dvw;
  overflow-x: hidden;
  height: 100%;
  background: #000;
  border-color: #3b3b3b;
  user-select: none;
}

canvas {
  touch-action: none;
}

.scrim-max-width {
  margin-inline-start: auto;
  margin-inline-end: auto;
  position: relative;
  max-width: 1120px;
}

@layer utilities {
  .flex-center {
    @apply flex items-center justify-center
  }

  .nav-height {
    @apply h-[calc(100vh-60px)]
  }

  .btn {
    @apply px-5 py-2 rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue
  }

  .color-container {
    @apply flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur
  }

  .size-btn-container {
    @apply flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1
  }

  .size-btn {
    @apply w-10 h-10 text-sm flex justify-center items-center bg-white text-black rounded-full transition-all
  }

  .common-padding {
    @apply sm:py-32 py-20 sm:px-10 px-5
  }

  .section-heading {
    @apply text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20
  }

  .feature-text {
    @apply text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px]
  }

  .feature-text-container {
    @apply w-full flex-center flex-col md:flex-row mt-10 md:mt-16 gap-5
  }

  .feature-video {
    @apply w-full h-full object-cover object-center scale-150 opacity-0
  }

  .feature-video-container {
    @apply w-full flex flex-col md:flex-row gap-5 items-center
  }

  .link {
    @apply text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20
  }

  .control-btn {
    @apply ml-4 p-4 rounded-full bg-gray-300 backdrop-blur flex-center
  }

  .hero-title {
    @apply text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10
  }

  .hiw-title {
    @apply text-4xl md:text-7xl font-semibold text-center
  }

  .hiw-subtitle {
    @apply text-gray font-semibold text-xl md:text-2xl py-10 text-center
  }

  .hiw-video {
    @apply absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden
  }

  .hiw-text-container {
    @apply flex md:flex-row flex-col justify-between items-start gap-24
  }

  .hiw-text {
    @apply text-gray text-xl font-normal md:font-semibold
  }

  .hiw-bigtext {
    @apply text-white text-3xl md:text-5xl font-normal md:font-semibold my-2
  }

  .video-carousel_container {
    @apply relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]
  }

  .g_fadeIn {
    @apply opacity-0 translate-y-[100px]
  }
}
```

</details>
