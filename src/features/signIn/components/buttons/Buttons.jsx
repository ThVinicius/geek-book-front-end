import Button from '../button/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { Container, Title, Anchor } from './buttonsStyles'

export default function Buttons({ setSelected }) {
  return (
    <Container>
      <Title>Login</Title>
      {buttons.map(({ icon, description, name }, index) => (
        <Button
          icon={icon}
          description={description}
          name={name}
          setSelected={setSelected}
          key={index}
        />
      ))}
      <Anchor to="/signup">Não possuo cadastro</Anchor>
    </Container>
  )
}

const buttons = [
  { icon: <GitHubIcon />, description: 'Logar com GitHub', name: 'github' },
  { icon: <EmailIcon />, description: 'Logar com Email', name: 'email' }
]
