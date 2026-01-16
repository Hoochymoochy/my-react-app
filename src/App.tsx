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
    if (!click) return
  
    setLoading(true)
  
    const timer = setTimeout(() => {
      fetch("https://dogapi.dog/api/v2/facts")
        .then(res => res.json())
        .then(data => {
          setText(data.data[0].attributes.body)
        })
        .catch(err => {
          setError(err.message)
        })
        .finally(() => {
          setLoading(false)
          setClick(false)
        })
    }, 1000)
  
    return () => clearTimeout(timer)
  }, [click])
  

  return (
    <div className="justify-center items-center flex min-h-screen bg-black flex-col space-y-5">
      {loading ? (
        <h1 className="text-6xl flex justify-center items-center bg-black text-white">
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