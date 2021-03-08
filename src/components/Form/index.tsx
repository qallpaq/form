import React, { useContext } from 'react'
import { Container, Paper } from '../../material'
import { StageOne } from './stageOne'
import { StageTwo } from './stageTwo'
import { StageThree } from './stageThree'
import { FormContext } from './formContext'
import {
  FormBar,
  FormBarItem,
  FormWrapper,
  Stages,
  StagesItem
} from './styles'

export const RegistrationForm: React.FC = () => {
  const {state: {stage}} = useContext<any>(FormContext)

  return (
    <Container>
      <FormWrapper>
        <Paper width='67%'>
          <Stages>
            <StagesItem state={stage >= 0}>Шаг 1.</StagesItem>
            <StagesItem state={stage >= 1}>Шаг 2.</StagesItem>
            <StagesItem state={stage >= 2}>Шаг 3.</StagesItem>
          </Stages>
          {stage === 0 && <StageOne/>}
          {stage === 1 && <StageTwo/>}
          {stage === 2 && <StageThree/>}
        </Paper>
        <FormBar>
          <FormBarItem>
            <Paper>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Alias commodi deleniti dignissimos eveniet quis veritatis!
            </Paper>
          </FormBarItem>
          <FormBarItem>
            <Paper>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Alias aliquid atque dolore et eveniet molestiae nulla obcaecati odit quaerat ratione,
              rerum similique sunt velit, veritatis.
            </Paper>
          </FormBarItem>
        </FormBar>
      </FormWrapper>
    </Container>
  )
}
