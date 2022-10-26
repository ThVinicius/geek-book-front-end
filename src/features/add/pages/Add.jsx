import { useEffect, useState } from "react"
import { useGlobal } from "../../../context/globalContext"
import useApi from "../../../hooks/useApi"
import useToast from "../../../hooks/useToast"
import getStatus from "../api/getStatus"
import AppContainer from "../../../containers/app/App"
import Content from "../../../containers/content/Content"
import Sidebar from "../../../components/sidebar/Sidebar"
import Card from "../../../components/card/Card"
import HeaderMobile from "../../../components/headerMobile/HeaderMobile"
import Steps from "../../../components/steps/Steps"
import StepsForm from "../components/stepsForm/StepsForm"

export default function Add() {
  const [step, setStep] = useState(0)
  const { global } = useGlobal()
  const [response, fetch] = useApi()

  useToast(response)

  useEffect(() => {
    if (global.status === null) fetch(...getStatus())
  }, [])

  return (
    <AppContainer>
      <HeaderMobile />
      <Sidebar />
      <Content>
        <Card>
          <Steps step={step} />
        </Card>
        <StepsForm step={step} setStep={setStep} />
      </Content>
    </AppContainer>
  )
}
