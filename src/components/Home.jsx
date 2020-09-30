import React, { useState } from "react";
import home from "./css/Home.module.css";

const Home = () => {
  const [guest, setGuest] = useState({
    name: "",
  });
  const [current, setCurrent] = useState(["uno"]);
  const handleInputChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };
  const clickSiguiente = (e) => {
    if (e.target.parentElement.id !== "uno" || current[0] !== "uno") {
      setCurrent([...current, e.target.parentElement.id]);
    }
    document.querySelector(`#${e.target.parentElement.id}`).style.display =
      "none";
    document.querySelector(
      `#${e.target.parentElement.nextSibling.id}`
    ).style.display = "flex";
  };
  const clickVolver = (e) => {
    document.querySelector(`#${e.target.parentElement.id}`).style.display =
      "none";
    document.querySelector(`#${current[current.length - 1]}`).style.display =
      "flex";
    console.log(current.pop());
    console.log(current);
  };
  return (
    <div className={home.home}>
      <div className={home.body}>
        <img src="/user-template.JPG" alt="myPhoto" />
        <div id="uno" className={home.uno}>
          <p className={home.introduce}>
            Hola! Soy Valentin Fontana, y me especializo en el desarrollo web
            fullstack... ¿Cuál es tu nombre?
          </p>
          <input
            onChange={handleInputChange}
            value={guest.name}
            name="name"
            type="text"
          />
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="dos" className={home.dos}>
          <p className={home.introduce}>
            Mucho gusto {guest.name ? guest.name : "hombre misterioso"},
            continuemos...
          </p>
          <button onClick={clickVolver}>Volver</button>
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="tres" className={home.dos}>
          <p className={home.introduce}>
            Paso a contarte que hace unos meses mi vida cambió para bien, debido
            a la pandemia y el aislamiento se me dificultó mantener al día los
            estudios, por lo que busqué una forma de hacer algo que me gusta y
            mantenerme ocupado...
          </p>
          <button onClick={clickVolver}>Volver</button>
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="cuatro" className={home.dos}>
          <p className={home.introduce}>
            Fue entonces cuando en la facultad descubrí la programación, primero
            empecé con un lenguaje fuertemente tipado llamado Pascal. Después
            seguimos con Python y de a poco me iba adentrando más en este
            mundo...
          </p>
          <button onClick={clickVolver}>Volver</button>
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="cinco" className={home.dos}>
          <p className={home.introduce}>
            Llegado a este punto descubrí un bootcamp Argentino llamado HENRY,
            el cual aseguraba invertir en sus alumnos a cambio de un porcentaje
            de su salario futuro...
          </p>
          <button onClick={clickVolver}>Volver</button>
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="seis" className={home.dos}>
          <p className={home.introduce}>Como te podrás imaginar...APLIQUÉ...</p>
          <button onClick={clickVolver}>Volver</button>
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="siete" className={home.dos}>
          <p className={home.introduce}>
            Hacer esto fue lo que me permitió en tan solo 2 meses y medio
            hacerme de bases muy fuertes de programación web, y también me dió
            las herramientas para cambiar mi vida...
          </p>
          <button onClick={clickVolver}>Volver</button>
          <button onClick={clickSiguiente}>Siguiente</button>
        </div>
        <div id="ocho" className={home.dos}>
          <p className={home.introduce}>
            El dia de hoy me encuentro buscando ganar experiencia real con todo
            lo que aprendí, es por eso que decidí hacer este proyecto, para
            contarte mi historia y desafiarme a mi mismo.
          </p>
          <button onClick={clickVolver}>Volver</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
