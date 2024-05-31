
import {Helmet} from 'react-helmet-async'
export const Title = ({title="chat App",description="this is a chat app"}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Helmet>
  )
}

export default Title;