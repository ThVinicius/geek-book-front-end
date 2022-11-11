import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import gitHubAuthorize from '../../../../utils/gitHubAuthorize'
import Button from '../button/Button'
import { Container, Title, Anchor } from './buttonsStyles'

export default function Buttons({ setSelected }) {
  return (
    <Container>
      <Title>Login</Title>
      {buttons(setSelected).map(
        ({ icon, description, func, params }, index) => (
          <Button
            icon={icon}
            description={description}
            func={func}
            params={params}
            key={index}
          />
        )
      )}
      <Anchor to="/signup">Não possuo cadastro</Anchor>
    </Container>
  )
}

const buttons = setSelected => [
  {
    icon: <GitHubIcon />,
    description: 'Logar com GitHub',
    func: gitHubAuthorize
  },
  {
    icon: <EmailIcon />,
    description: 'Logar com Email',
    func: setSelected,
    params: 'email'
  }
]
