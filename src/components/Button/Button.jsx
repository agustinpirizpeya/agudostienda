import "./button.css";

export default function ButtonStyled(props) {

  const onButtonClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <div styled="btnContainer">
      <button
        onClick={() => onButtonClick()}
        disabled={props.disabled}
        class="ui primary button btnStyled"
      >
        {props.text}
      </button>
    </div>
  );
}
