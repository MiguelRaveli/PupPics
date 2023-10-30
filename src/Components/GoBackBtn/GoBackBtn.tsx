import classes from "./GoBackBtn.module.css";
import { IoChevronBackSharp } from "react-icons/io5";

const GoBackBtn = () => {
  return (
    <>
      <button className={classes.goback_btn}>
        <IoChevronBackSharp />
      </button>
    </>
  );
};

export default GoBackBtn;
