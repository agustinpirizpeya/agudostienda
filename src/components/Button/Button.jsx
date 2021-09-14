import "./button.css";
import { Button } from "semantic-ui-react";

export default function ButtonStyled(props) {
  return (
    <div styled="btnContainer">
      <button
        onClick={() => props.onClick}
        disabled={props.disabled}
        class="ui primary button btnStyled"
      >
        {props.text}
      </button>
    </div>
  );
}
