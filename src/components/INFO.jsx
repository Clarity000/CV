import "./info.css";

function InfoCentered () {
  return (
    <section className="info">
      <img src="" alt="" />
      <header className="titulo">
        <h2>
          Mi nombre es Nico y soy <span> FrontEnd Developer</span>
        </h2>
        <h5>bueno casi...</h5>
      </header>
      <div>
        <p>
          Tengo <span>23 años</span> y estoy cursando el segundo año de la
          carrera de <span>Ing. en Sistemas</span> en la Universidad Tecnológica
          de Córdoba. Hace ya tiempo que me enfoqué en <span>aprender</span>{" "}
          diferentes <span>tecnologías y lenguajes de desarrollo</span>, de
          momento tengo conocimiento en:
        </p>
      </div>
      <div className="brand-container">
        <img
          className="logo"
          src="./src/assets/logos/html_logo.png"
          alt="html logo"
        />
        <img
          className="logo"
          src="./src/assets/logos/css_logo.png"
          alt="css logo"
        />
        <img
          className="logo"
          src="./src/assets/logos/js_logo.png"
          alt="js logo"
        />
        <img
          className="logo"
          src="./src/assets/logos/react_logo.png"
          alt="react logo"
        />
        <img
          className="logo"
          src="./src/assets/logos/tailwind_logo.png"
          alt="tailwind logo"
        />
        <img
          className="logo"
          src="./src/assets/logos/figma_logo.png"
          alt="figma logo"
        />
        <img
          className="logo"
          src="./src/assets/logos/vs_code_logo.png"
          alt="vs code logo"
        />
        <img className="logo" src="./src/assets/logos/jira_logo.png" alt="" />
      </div>
      <div>
        <p>
          No tengo demasiados <span>proyectos</span>, ocupé mi tiempo en{" "}
          <span>estudiar a fondo</span> para poner en práctica lo aprendido.
          Puede haber sido una perdida de tiempo
        </p>
        <h5>o quizás no...</h5>
      </div>
    </section>
  );
}

export default InfoCentered;
