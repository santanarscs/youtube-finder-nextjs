import { Container} from './styles'
import { FiVideo, FiUsers, FiEye, FiActivity } from 'react-icons/fi';

interface ChannelProps {
  channel: any
}

const ChannelDetail: React.FC<ChannelProps> = ({channel}) => {
  return (
    <Container>
      <img src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title}/>
      <h1>{channel.snippet.title}</h1>
      <span>{channel.snippet.description}</span>
      <ul>
        <li><FiActivity size={25} /> {Number(channel.statistics.viewCount).toLocaleString()}</li>
        <li><FiUsers size={25}/> {Number(channel.statistics.subscriberCount).toLocaleString()}</li>
        <li><FiVideo size={25}/> {Number(channel.statistics.videoCount).toLocaleString()}</li>
      </ul>
  </Container>
  )
}

export default ChannelDetail;