import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from 'next/link'
import ChannelDetail from "../components/ChannelDetail";

import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  h1 {
    font-size: 26px;
    line-height: 32px;
    text-align: center;
  }
  a {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #6f7380;
    text-transform: uppercase;
    font-weight: bold;
    transition: color 0.2s;
    &:hover {
      color:#557cf2;
    }
  }
`
const fetcher = (url:string) => axios.get(url).then(res  => res.data)

const Channel: React.FC = () => {
  const { query } = useRouter();
  const { data,  error } = useSWR(`/api/youtube?search=${query.search || ""}`, fetcher)

  if(error) {
    return (
      <Container>
        <Content>
          <h1>Nenhum canal encontrado {error}</h1>
        </Content>
      </Container>
    )
  }
  if(!data) {
    return (
      <Container>
        <Content>
         <h1>Carregando</h1>
        </Content>
      </Container>
    )
  }

  return (
    <Container>
      <Content>
        <Link href="/">
          <a><FiArrowLeft size={25}/> voltar</a>
        </Link>
        <ChannelDetail channel={data} />
      </Content>
    </Container>
  )
}

export default Channel;