  ** NOTATIONS **

  - CMS: Content Mangement System

  - WordPress: Trax tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)
  - Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
  - React que consome essa API do CMS

  - 2 tipos principais de uso do GraphCMS: query e mutations
    - query: buscar dados
    - mutation: criar, alterar, deletar dados

  Query Syntax: 
    query {
      lessons {where: {}}
    }

  Formas de fazer a busca dos dados: 

  - Primeira forma(Mais Simples): 

    const GET_LESSONS_QUERY = gql`
      query {
        lessons {
          id
          title
        }
      }
    `
  function App() {
    useEffect(() => {
      client.query({
        query: GET_LESSONS_QUERY,
      }).then(response => {
        response.data
      })
    }, [])

  - Segunda forma(Usando o Apollo Provider/ ContextAPI): 

    import { gql, useQuery } from "@apollo/client"

    const GET_LESSONS_QUERY = gql`
      query {
        lessons {
          id
          title
        }
      }
    `

    function App() {
      const { data } = useQuery(GET_LESSONS_QUERY)
