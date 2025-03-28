import "../../../Styles/Services.css";

 export const Services = () => {
  return (
    <section className="services-container">
      <div className="service-grid">
        <div className="service-item">
          <h3>Desarrollo de Interfaces Web</h3>
          <p>
            Creación de interfaces modernas, responsivas y optimizadas con HTML, CSS, JavaScript y React.
          </p>
        </div>

        <div className="service-item">
          <h3>Optimización de Rendimiento</h3>
          <p>
            Mejora del rendimiento web con optimización de código, carga eficiente de recursos y mejores prácticas.
          </p>
        </div>

        <div className="service-item">
          <h3>Integración con APIs</h3>
          <p>
            Consumo e integración de APIs RESTful para conectar aplicaciones frontend con servicios backend.
          </p>
        </div>

        <div className="service-item">
          <h3>Mantenimiento Web</h3>
          <p>
            Soporte, actualización y optimización de sitios web para garantizar su estabilidad y seguridad.
          </p>
        </div>
      </div>
    </section>
  );
};

