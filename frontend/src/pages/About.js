import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <section class="program">
        <h1>PROGRAMMING LANGUAGE</h1>
        <div class="nav-container">
          <a class="nav-tab" href="#tab-svelte">
            PYTHON
          </a>
          <a class="nav-tab" href="#tab-svelte">
            C
          </a>
          <a class="nav-tab" href="#tab-svelte">
            C#
          </a>
          <a class="nav-tab" href="#tab-esbuild">
            JAVA
          </a>
          <a class="nav-tab" href="#tab-next">
            JAVASCRIPT
          </a>
          <a class="nav-tab" href="#tab-typescript">
            TYPESCRIPT
          </a>
          <a class="nav-tab" href="#tab-vite">
            VITE
          </a>
          <span class="nav-tab-slider"></span>
        </div>
      </section>
      <main class="main">
        <section class="slider" id="tab-svelte">
          <h1>SVELTE</h1>
          <h2>another frontend JS framework</h2>
        </section>
        <section class="slider" id="tab-esbuild">
          <h1>ESBUILD</h1>
          <h2>an extremely fast JavaScript bundler</h2>
        </section>
        <section class="slider" id="tab-next">
          <h1>NEXT.JS</h1>
          <h2>framework for Production</h2>
        </section>
        <section class="slider" id="tab-typescript">
          <h1>TYPESCRIPT</h1>
          <h2>giving you better tooling at any scale</h2>
        </section>
        <section class="slider" id="tab-vite">
          <h1>VITE</h1>
          <h2>a frontend build tool</h2>
        </section>
      </main>
      <canvas class="background"></canvas>
    </div>
  );
};

export default About;
