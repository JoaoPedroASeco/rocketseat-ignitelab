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

  // Mutations
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  } 


  //Dependencias
    - Graphql
    - ApolloGraphql
    - GraphqlCodeGenerator

  // Desafios: 
    - Deixar layout responsivo e aplicar o mobile
    - Quando o video estiver vazio mostrar alguma mensagem na tela estimulando ao cliente acessar uma nova aula
    - Estilizar pagina de carregamento na requisição das informações do componente de Video pelo slug
    - Não permitir pessoas que não estão escritas acessar a pagina de eventos
    - Fazer inscrição com Github

  // Melhorias:
    1 - Passaria ele todo para NextJS - 
    2 - + NextAuth para autenticação
    3 - + Stripe ou outra plataforma de pagamentos com webhooks
    4 - adicionaria outro campo no graphCMS das aulas para divisão entre aulas pagas/grátis
    5 - criaria outro schema na graphCMS com Módulos de aulas - modulos contém apenas os slugs correspondentes àquele módulo
    6 - criaria uma nova página com aulas segmentadas por módulos
    7 - Adicionaria Firebase Storage ou AWS para salvar arquivos
    8 - Adicionar loading state com skeletons