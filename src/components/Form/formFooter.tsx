import React, { useContext } from 'react'
import { Button } from '../../material'
import { isEmpty } from '../../utils'
import { FormContext, IContext } from './formContext'
import { accept, changeStage } from './actions'
import {
  ButtonBack,
  ButtonWrapper,
  Footer,
  FooterCheckbox,
  FooterText,
  FooterContent,
  FooterTop,
  CheckboxSVG
} from './styles'

interface IFormFooterProps {
  isValid: boolean
  fields: string[]
  back?: boolean
  stage?: number
}

export const FormFooter: React.FC<IFormFooterProps> = ({
  isValid,
  fields,
  back = true,
  stage
}) => {
  const {state: {accepted}, dispatch} = useContext<IContext>(FormContext)

  const isDisabled = !(isValid && isEmpty(fields)) || !accepted

  return (
    <Footer>
      <FooterTop>
        <svg fill='grey' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9 5H11V7H9V5ZM9 9H11V15H9V9Z"/>
        </svg>
        <FooterText>Все поля обязательные для заполнения.</FooterText>
      </FooterTop>
      <FooterContent>
        <CheckboxSVG width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" rx="3" fill="#EF4123"/>
          <path
            d="M5.13846 11.021C5.04615 10.9297 5 10.7928 5 10.7015C5 10.6102 5.04615 10.4732 5.13846 10.3819L5.78462 9.74291C5.96923 9.56033 6.24615 9.56033 6.43077 9.74291L9.01538 12.4816C9.10769 12.5729 9.24615 12.5729 9.33846 12.4816L15.5692 6.13694C15.7538 5.95435 16.0308 5.95435 16.2154 6.13694L16.8615 6.77597C17.0462 6.95855 17.0462 7.23242 16.8615 7.415L9.47692 14.9921C9.38462 15.0834 9.29231 15.1291 9.15385 15.1291C9.01538 15.1291 8.92308 15.0834 8.83077 14.9921L5.13846 11.021Z"
            fill="white"/>
        </CheckboxSVG>
        <FooterCheckbox
          checked={accepted}
          type="checkbox"
          onChange={() => dispatch(accept())}
        />
        <FooterText>
          Я внимательно ознакомился с условиями регистрации, даю соглашение на использование моего организма в
          человеческой многоножке.
        </FooterText>
      </FooterContent>
      <ButtonWrapper>
        {back && <ButtonBack onClick={() => dispatch(changeStage(stage))}>
          Вернуться назад
        </ButtonBack>}
        <Button disabled={isDisabled} type="submit">
          {stage === 1 ? 'Создать аккаунт' : 'Продолжить'}
        </Button>
      </ButtonWrapper>
    </Footer>
  )
}
