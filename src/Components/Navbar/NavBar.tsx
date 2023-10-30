import classes from "./NavBar.module.css";

import { Link } from "react-router-dom";
import Icons from "./Icons/Icons";
import EntrarButton from "../EntrarButton/EntrarButton";

import { BiSolidDog } from "react-icons/bi";
import { IoPawSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.title}>
        <h1>
          P<BiSolidDog />
          pPics
        </h1>
      </div>
      <div className={classes.sub_title}>
        <h2>
          Venha conhecer nossos cães incríveis e se apaixone por cada um deles!{" "}
          <IoPawSharp />
        </h2>
        <Link to={"/dogpics"}>
          {" "}
          <EntrarButton text={"Entrar"} />
        </Link>
      </div>
      <Icons />
    </div>
  );
};

export default NavBar;
