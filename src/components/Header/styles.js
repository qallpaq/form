import styled from 'styled-components/macro'

export const HeaderContainer = styled.header`
  margin-bottom: 50px;
  border-bottom: 1px solid #F4F4F4;
  height: 75px;
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  flex-grow: 1;
  padding-left: 50px;
`

export const HeaderItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  border-left: ${props => props.border ? '1px' : '0'} solid #F4F4F4;
`

export const Icon = styled.svg`
  margin-right: 10px;
`

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EF4123;
  width: 100%;
  height: 100%;
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  
  span {
    font-size: 10px;
    letter-spacing: 5px;
    font-weight: 300;
    margin-bottom: -8px;
  }
`
