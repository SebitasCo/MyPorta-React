import "../../../Styles/Education.css";

export const Education = () => {
  return (
    <div className="education-container">
      <h2>Mi Educación</h2>
      <div className="education-grid">
        
        <div className="education-item">
          <h3>Bachillerato</h3>
          <p>Graduado en educación secundaria con sólidos conocimientos básicos y orientación en tecnología.</p>
          <span className="education-year">2022</span>
        </div>

        <div className="education-item">
          <h3>Tecnólogo en Desarrollo de Software</h3>
          <p>Formación en el SENA en desarrollo de aplicaciones web y software con tecnologías modernas.</p>
          <span className="education-year">2024</span>
        </div>

      </div>
    </div>
  );
};
