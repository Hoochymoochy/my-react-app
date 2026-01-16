import { useEffect, useState } from "react"
import FetchButton from "./components/FetchButton"
import DogFact from "./components/DogFact"


export default function App() {
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [text, setText] = useState("fetch for data")

  const handleClick = () => {
    setClick(true)
  }

  const clickLoading = () => {
    setLoading(true)
  }

  useEffect(() => {
    if (click) {
      fetch("https://dogapi.dog/api/v2/facts")
        .then((response) => response.json())
        .then((data) => {
          setText(data.data[0].attributes.body)
        }).catch((error) => {
          setError(error.message)
        })
      setLoading(false)
      setClick(false)
    }
  }, [click])

  return (
    <div className="justify-center items-center flex min-h-screen bg-black">
      {loading ? (
        <h1 className="text-xl flex justify-center items-center bg-black">
          Loading...
        </h1>
      ) : (
        <>
          <DogFact text={text} error={error} />
          <FetchButton setClick={handleClick} setLoading={clickLoading}/>
        </>
      )}
    </div>
  )
}