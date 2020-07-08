import { useCallback } from 'react'
import Router from 'next/router'
import Search from '../components/Search'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  h1 {
    font-size: 26px;
    line-height: 32px;
    text-align: center;
  }
`
export default function Home()  {

  const handleSearchChannel = useCallback((search: string) => {
    Router.push({
      pathname: '/channel',
      query: { search }
    },
    undefined,
    { shallow: true }
    )
  }, [])

  return(
    <Container>
      <Content>
        <h1>Descubra as estatisticas dos seus canais preferidos do youtube</h1>
        <Search 
          placeholder="Buscar por canal"
          handleSearch={handleSearchChannel}
        />
      </Content>
    </Container>
  )
}