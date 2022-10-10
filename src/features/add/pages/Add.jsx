import { useState } from "react"
import usePersistence from "../../../hooks/usePersistence"
import AppContainer from "../../../containers/app/App"
import Content from "../../../containers/content/Content"
import Sidebar from "../../../components/sidebar/Sidebar"
import Header from "../../../containers/search/Search"
import Steps from "../../../components/steps/Steps"
import StepsForm from "../components/stepsForm/StepsForm"

export default function Add() {
  const [step, setStep] = useState(0)

  usePersistence()

  return (
    <AppContainer>
      <Sidebar />
      <Content>
        <Header>
          <Steps step={step} />
        </Header>
        <StepsForm step={step} setStep={setStep} />
      </Content>
    </AppContainer>
  )
}
