
type Props = {
    text: string
    error: string
}

export default function DogFact({ text, error }: Props) {

    return (
        error ? <h1 className="text-xl flex justify-center items-center text-white bg-white/10 p-5 rounded-2xl">{error}</h1> :
        <h1 className="text-xl flex justify-center items-center text-white bg-white/10 p-5 rounded-2xl">
            {text}
        </h1>
    )
}