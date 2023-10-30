import classes from "./EntrarButton.module.css"
type Entrar = {
  text: String;
};
const EntrarButton = ({ text }: Entrar) => {
  return (
    <div>
      <button className={classes.Botao}>{text}</button>
    </div>
  );
};

export default EntrarButton;
