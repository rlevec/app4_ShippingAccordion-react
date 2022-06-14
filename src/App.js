import React,{useState, useEffect} from 'react'
import Question from './Question'

const url = "http://localhost:5000/users"

const App = () => {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUrl = async() => {
    const response = await fetch(url)
    const newQuestions = await response.json()
    setQuestions(newQuestions)
    setLoading(false)
  }

  useEffect(() => {
    fetchUrl()
  }, [])

  if(loading) {
    return (
      <main>
        <section>
          <h2>loading...</h2>
        </section>
      </main>
    )
  }

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about shipping</h3>
        <section>
          {
            questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  {...question} 
                />
              )
            })
          }
        </section>  
      </div>
    </main>
  )
}

export default App