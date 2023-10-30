import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import classes from "./Icons.module.css";
const Icons = () => {
  return (
    <>
      <div className={classes.icons}>
        <Link to={"https://www.linkedin.com/in/miguel-raveli-gusmao"}>
          {" "}
          <AiFillLinkedin />
        </Link>

        <Link to={"https://github.com/MiguelRaveli"}>
          {" "}
          <AiFillGithub />
        </Link>
      </div>
    </>
  );
};

export default Icons;
