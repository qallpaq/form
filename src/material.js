import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`

export const Paper = styled.div`
  box-shadow: 0px 1px 5px rgb(121 121 121 / 30%);
  padding: 32px 43px;
  width: ${props => props.width || '100%'};
`

export const Button = styled.button`
  background-color: #EF4123;
  width: 100%;
  max-width: 319px;
  padding: 15px 20px;
  font-size: 15px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Bliss Pro', sans-serif;
  font-weight: 600;
  line-height: 18px;
  border-radius: 3px;
  text-transform: none;
  color: #fff;
  
  &:disabled {
    cursor: default;
    background-color: #BDBDBD;
  }
`
