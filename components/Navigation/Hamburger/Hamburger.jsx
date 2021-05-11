import classes from "./Hamburger.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const hamburger = (props) => (
  <div className={classes.Hamburger} onClick={props.clicked}>
    {/* <i
      className={props.closed ? "fas fa-2x fa-bars" : "fas fa-2x fa-times"}
    ></i> */}
    {props.closed ? (
      <MenuIcon style={{ fontSize: 40 }} />
    ) : (
      <CloseIcon style={{ fontSize: 40 }} />
    )}
  </div>
);

export default hamburger;
