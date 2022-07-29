import { useEffect, useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [reviews, setReviews] = useState([])
  const initialState = {
    name: "",
    date: "",
    wait_time: "",
    rating:"",
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getReviews = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/reviews')
        setReviews(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getReviews()
  }, [])


return (

)
}

export default Form