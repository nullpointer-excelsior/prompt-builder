
interface Props {
    text: string;
    onClick: () => void;
}

export default function Button(props: Props){
    return (
        <button onClick={props.onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          {props.text}
        </button>
    )
}