import classes from "../styles/Project.module.css";
import Button from "./Button";
import { v4 as uuid } from "uuid";


const techicon = (value) => {
  if (value === "HTML") {
    return <i className="devicon-html5-plain-wordmark colored"></i>;
  }
  if (value === "CSS") {
    return <i className="devicon-css3-plain-wordmark colored"></i>;
  }
  if (value === "JavaScript") {
    return <i className="devicon-javascript-plain colored"></i>;
  }
  if (value === "React") {
    return <i className="devicon-react-original-wordmark colored"></i>;
  }
  if (value === "Redux") {
    return <i className="devicon-redux-original colored"></i>;
  }
  if (value === "Bootstrap") {
    return <i className="devicon-bootstrap-plain-wordmark colored"></i>;
  }
  if (value === "Tailwind") {
    return <i className="devicon-tailwindcss-original-wordmark colored"></i>;
  }
};

const ProjectCard = ({ id, title, desc, netlify, git, resp, img, tech }) => {
  return (
    <div className={classes.project}>
      <div className={classes.pcontainer}>
        <div className={classes.title}>
          <h1>
            {id}. {title}
          </h1>
          <div className={classes.action_button}>
            <a href={netlify} target="_blanck">
              <Button text="Demo" />
            </a>
            <a href={git} target="_blanck">
              <Button text="Code" />
            </a>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.desc}>
            <p>{desc}</p>
          </div>
          <div className={classes.resp}>
            <p>{resp}</p>
          </div>
        </div>
        <div className={classes.img}>
          <img width="100%" src={img} alt="alt text" />
        </div>
        <div className={classes.techicon}>
          {tech.map((el) => (
            <div key={uuid()}>{techicon(el)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
