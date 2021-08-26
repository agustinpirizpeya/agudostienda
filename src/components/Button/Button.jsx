import './button.css';

export default function Button(props) {
    return(
            <button onClick={() => props.onClick} disabled={ props.disabled }> {props.text} </button>
    );
}
