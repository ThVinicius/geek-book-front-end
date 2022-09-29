import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { Label } from './stepsStyles'

const steps = ['categoria', 'descrição', 'último capítulo']

export default function Steps({ step }) {
  return (
    <Stepper activeStep={step} alternativeLabel={true}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>
            <Label>{label}</Label>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
