export default function ButtonCount(props) {
    return <button onClick={() => props.onClick}> {props.text} </button>
}
