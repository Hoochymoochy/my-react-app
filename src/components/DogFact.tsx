
type Props = {
    text: string
    error: string
}

export default function DogFact({ text, error }: Props) {

    return (
        error ? <h1 className="text-xl flex justify-center items-center bg-black">{error}</h1> :
        <h1 className="text-xl text-xl flex justify-center items-center bg-black">
            {text}
        </h1>
    )
}