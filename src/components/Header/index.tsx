import React from 'react'
import {
  HeaderItem,
  HeaderContainer,
  HeaderTitle,
  Icon,
  HeaderLogo
} from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderItem>
        <HeaderLogo>
          <span>
            отмоем все деньги
          </span>
          ГОСМОСГАРАНТ
        </HeaderLogo>
      </HeaderItem>
      <HeaderTitle>
        Регистрация на «Джакомбо Забота»
      </HeaderTitle>
      <HeaderItem border>
        <Icon width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 21.5C0 19.3783 0.842855 17.3434 2.34315 15.8431C3.84344 14.3429 5.87827 13.5 8 13.5C10.1217 13.5 12.1566 14.3429 13.6569 15.8431C15.1571 17.3434 16 19.3783 16 21.5H14C14 19.9087 13.3679 18.3826 12.2426 17.2574C11.1174 16.1321 9.5913 15.5 8 15.5C6.4087 15.5 4.88258 16.1321 3.75736 17.2574C2.63214 18.3826 2 19.9087 2 21.5H0ZM8 12.5C4.685 12.5 2 9.815 2 6.5C2 3.185 4.685 0.5 8 0.5C11.315 0.5 14 3.185 14 6.5C14 9.815 11.315 12.5 8 12.5ZM8 10.5C10.21 10.5 12 8.71 12 6.5C12 4.29 10.21 2.5 8 2.5C5.79 2.5 4 4.29 4 6.5C4 8.71 5.79 10.5 8 10.5Z"
            fill="#696969"/>
        </Icon>
        Личный кабинет
      </HeaderItem>
      <HeaderItem border>
        <Icon width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 0H0V8.5H25V0Z" fill="white"/>
          <path d="M25 8.5H0V17H25V8.5Z" fill="#D52B1E"/>
          <path d="M25 5.66669H0V11.3334H25V5.66669Z" fill="#0039A6"/>
          <rect x="0.25" y="0.25" width="24.5" height="16.5" stroke="#E9E9E9" strokeWidth="0.5"/>
        </Icon>
        Русский
      </HeaderItem>
    </HeaderContainer>
  )
}
