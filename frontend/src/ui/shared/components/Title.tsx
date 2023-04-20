
interface Props {
    title: string;
    subtitle: string;
}


export default function Title(props: Props) {

    return (
        <div className="text-center my-10">
            <h1 className="text-4xl font-bold text-gray-800">{props.title}</h1>
            <h2 className="text-xl font-medium text-gray-600">{props.subtitle}</h2>
        </div>
    )
}