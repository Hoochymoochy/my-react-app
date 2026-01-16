

type Props = {
    setClick: Function,
    setLoading: Function
}

export default function FetchButton({ setClick, setLoading  }: Props) {
    const onHandleClick = () => {
        setLoading()
        setClick()
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onHandleClick}>
            Fetch
        </button>
    )
}