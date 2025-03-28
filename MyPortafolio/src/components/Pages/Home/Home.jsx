import React from "react";
import "../../../Styles/Home.css"; 

 export const Home = () => {
  return (
    <section className="home-container">
      <div className="home-text">
        <h1>¡Hola, soy Sebastian!</h1>
        <p>
        Soy un aprendiz de desarrollo de software del SENA. Me gusta mucho el desarrollo web, especialmente el frontend. 
        Disfruto el diseño y la creación de interfaces gráficas.
        Estoy dispuesto a seguir aprendiendo y expandir mis conocimientos en diferentes tecnologías.
        </p>
      </div>

      <div className="home-image">
        <img src="./src/assets/me.webp" alt="my Photo" />
      </div>
    </section>
  );
};