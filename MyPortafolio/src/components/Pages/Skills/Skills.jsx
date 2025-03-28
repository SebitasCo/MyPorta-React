import "../../../Styles/Skills.css";
import { FaReact, FaJs, FaJava } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di"; 

export const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Mis Habilidades</h2>
      <div className="skills-grid">
        
        <div className="skill-item react-skill">
          <FaReact className="skill-icon" />
          <p>React</p>
          <div className="progress-bar">
            <span className="progress-fill react-fill"></span>
          </div>
        </div>

        <div className="skill-item js-skill">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
          <div className="progress-bar">
            <span className="progress-fill js-fill"></span>
          </div>
        </div>

        <div className="skill-item java-skill">
          <FaJava className="skill-icon" />
          <p>Java</p>
          <div className="progress-bar">
            <span className="progress-fill java-fill"></span>
          </div>
        </div>

        <div className="skill-item csharp-skill">
          <DiVisualstudio className="skill-icon" />
          <p>C#</p>
          <div className="progress-bar">
            <span className="progress-fill csharp-fill"></span>
          </div>
        </div>

      </div>
    </div>
  );
};
