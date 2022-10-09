import { useEffect, useState, useRef } from "react"
import useApi from "../../../../hooks/useApi"
import updateRanking from "../../api/updateRanking"
import deleteRanking from "../../api/deleteRanking"
import createRanking from "../../api/createRanking"
import useHandleResponse from "../../hooks/useHandleResponse"
import useToast from "../../../../hooks/useToast"
import { Container, Img } from "./place"
import AutoCompleteInput from "../autoCompleteInput/AutoCompleteInput"
import ItemTemplate from "../../../../components/itemTemplate/ItemTemplate"
import rank from "../../../../assets/images/rank.png"

function Place({ collection, modify = true }) {
  const [rankingId, setRankingId] = useState(null)
  const [select, setSelect] = useState(null)
  const [response, fetch] = useApi()
  const loading = useRef(false)

  useHandleResponse(response, setRankingId, loading)

  useToast(response)

  useEffect(() => {
    if (collection.rankingId !== null) {
      setSelect(collection)

      setRankingId({ id: collection.rankingId })
    }
  }, [])

  const handleOnChange = (event, value) => {
    if (value === null) return

    loading.current = true

    if (select !== null && value.userCollectionId === 0) {
      const { id } = rankingId

      fetch(...deleteRanking(id))

      setSelect(null)
    } else if (select === null) {
      const data = {
        userCollectionId: value.userCollectionId,
        position: collection.position
      }

      fetch(...createRanking(data))

      setSelect(value)
    } else {
      const data = {
        id: rankingId.id,
        userCollectionId: value.userCollectionId,
        position: collection.position
      }

      fetch(...updateRanking(data))

      setSelect(value)
    }
  }

  return (
    <Container>
      <h1>{collection.position}º Lugar</h1>
      {modify && (
        <AutoCompleteInput
          onChange={handleOnChange}
          select={select}
          loading={loading.current}
        />
      )}
      {select ? (
        <ItemTemplate row={select} modify={false} />
      ) : (
        <Img src={rank} alt="rank" />
      )}
    </Container>
  )
}

export default Place
