import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteModal from '../../../components/deleteModal/DeleteModal'

import { Container, Box, Content, Info, DeleteBox } from './template'

const collection = {
  name: 'One Piece',
  category: 'Mangá',
  lastSeen: 1070,
  poster:
    'https://img-host.filestatic3.xyz/mangas_files/one-piece-br/image_one-piece-br_full.webp',
  synopsis:
    'One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso. Desde então muitos piratas se aventuram pela Grand Line para tentar encontrar o tesouro chamado One Piece. Um deles é Monkey D. Luffy, o garoto que, acidentalmente, comeu uma das Akuma No Mi, a Gomu Gomu No Mi (Fruta da Borracha), e agora ele pode esticar seu corpo como se fosse uma borracha. A jornada dele começa atrás de companheiros e um barco, que ele vai conseguindo pouco a pouco, pois tem um objetivo: Se tornar o Rei Dos Piratas.'
}

export default function ItemTemplate() {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <h1>{collection.name}</h1>
      <Content>
        <img src={collection.poster} alt="obra" />
        <Box>
          <Info>
            <p>Tipo</p>
            <h6>{collection.category}</h6>
          </Info>
          <Info>
            <p>Status</p>
            <h6>Completo</h6>
          </Info>
          <Info>
            <p>Capítulo/episódio</p>
            <h6>{collection.lastSeen}</h6>
          </Info>
          <DeleteBox>
            <Tooltip title={<p style={{ fontSize: '16px' }}>Deletar</p>}>
              <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </DeleteBox>
        </Box>
      </Content>
      <DeleteModal open={open} setOpen={setOpen} />
    </Container>
  )
}
