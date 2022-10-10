import useWindowResize from "../../../../hooks/useWindowResize"
import Header from "../header/Header"
import HeaderMobile from "../headerMobile/HeaderMobile"

export default function HeaderRender({ collections, search, setSearch, tab }) {
  const windowSize = useWindowResize()

  if (windowSize.width > 420) {
    return <Header collections={collections} />
  }

  return (
    <HeaderMobile
      collections={collections}
      search={search}
      setSearch={setSearch}
      tab={tab}
    />
  )
}
