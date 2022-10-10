import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useApi from "../../../hooks/useApi"
import getLink from "../api/getLink"
import useHandleRequest from "../../../hooks/useHandleRequest"
import useWindowResize from "../../../hooks/useWindowResize"
import SearchContainer from "../../../containers/search/Search"
import HomeHeader from "../../home/components/header/Header"
import Itens from "../components/itensContainer/Itens"
import HeaderRender from "../components/headerRender/HeaderRender"
import { ShareContainer, ShareContent } from "../../../containers/share/share"

export default function Shared() {
  const windowSize = useWindowResize()
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
      <HeaderRender
        collections={collections}
        search={search}
        setSearch={setSearch}
        tab={tab}
      />
      <ShareContent>
        {windowSize.width > 420 && (
          <SearchContainer>
            <HomeHeader search={search} setSearch={setSearch} tab={tab} />
          </SearchContainer>
        )}
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
