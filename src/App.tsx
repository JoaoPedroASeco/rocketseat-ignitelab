import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string
  title: string
}

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <Event />
  )
}

export default App
