import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useApi from "../../../hooks/useApi"
import getLink from "../api/getLink"
import useHandleRequest from "../../../hooks/useHandleRequest"
import AppContainer from "../../../containers/app/App"
import Content from "../../../containers/content/Content"
import SearchContainer from "../../../containers/search/Search"
import HomeHeader from "../../home/components/header/Header"
import Itens from "../components/itensContainer/Itens"
import Header from "../components/header/Header"

export default function Shared() {
  const { shortUrl } = useParams()
  const [search, setSearch] = useState("")
  const [response, fetch] = useApi()
  const [collections, setCollections] = useState(null)

  useHandleRequest(response, setCollections)

  useEffect(() => {
    fetch(...getLink(shortUrl))
  }, [])

  return (
    <>
      <Header collections={collections} />
      <AppContainer>
        <Content>
          <SearchContainer>
            <HomeHeader search={search} setSearch={setSearch} />
          </SearchContainer>
          <Itens
            collections={collections}
            setCollections={setCollections}
            search={search}
          />
        </Content>
      </AppContainer>
    </>
  )
}
