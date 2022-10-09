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
import { ShareContainer, ShareContent } from "../../../containers/share/share"

export default function Shared() {
  const { shortUrl } = useParams()
  const [search, setSearch] = useState("")
  const [response, fetch] = useApi()
  const [collections, setCollections] = useState(null)
  const [tab, setTab] = useState(0)

  useHandleRequest(response, setCollections)

  useEffect(() => {
    fetch(...getLink(shortUrl))
  }, [])

  return (
    <ShareContainer>
      <Header collections={collections} />
      <ShareContent>
        <SearchContainer>
          <HomeHeader search={search} setSearch={setSearch} tab={tab} />
        </SearchContainer>
        <Itens
          collections={collections}
          setCollections={setCollections}
          search={search}
          tab={tab}
          setTab={setTab}
        />
      </ShareContent>
    </ShareContainer>
  )
}
