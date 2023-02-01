import "./Collapse.css";
import { useState } from "react";
import arrowUp from "../assets/arrow_up.png";
import arrowDown from "../assets/arrow_down.png";


const Collapse = ({ title, content }) => {

  const [open, setOpen] = useState(false);

  let collapseContent;
  if (typeof content === "string") {
    collapseContent = content;
  } else if (Array.isArray(content)) {
    collapseContent = content.map((item) => {
      return (
        <p key={item}>{item}</p>
      )
    });
  }

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div className="collapse" >

      <div className="collapse-button"
        onClick={toggle}>
        <h2>
          {title}
        </h2>
        {open && <img src={arrowUp} alt="Arrow up" />}
        {!open && <img src={arrowDown} alt="Arrow down" />}
      </div>

      {open && typeof content === "string" && <div>
        <p>{collapseContent}</p>
      </div>}

      {open && Array.isArray(content) && <div>
        {collapseContent}
      </div>}
    </div>
  )
}

export default Collapse;