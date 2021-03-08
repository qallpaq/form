import styled from 'styled-components/macro'
import accept from '../../assets/accept-min.png'

const red = '#EF4123'
const grey = '#BDBDBD'

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FormBar = styled.div`
  width: 30%;
`

export const FormBarItem = styled.div`
  margin-bottom: 20px;
  color: #BDBDBD;
`

export const Stages = styled.div`
  display: flex;
  margin-bottom: 50px;
`

export const StagesItem = styled.span`
  position: relative;
  margin-right: 10px;
  width: 32%;
  transition: .2s;
  color: ${props => props.state ? red : grey};
  border-bottom: 1px solid ${props => props.state ? red : grey};
  padding-bottom: 10px; 
  
  &:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    background: ${props => props.state ? red : grey};
    bottom: -7.5px;
    border-radius: 50%;
    border: 4px solid #fff;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ButtonBack = styled.button`
  color: #828282;
  font-weight: 500;
  padding: 15px 20px;
  margin-right: 40px;
  background-color: #fff;
  border-radius: 3px;
  transition: .2s;
  
  &:hover {
    background-color: rgba(123, 123, 123, .1);
  }
`

export const Footer = styled.div`
  margin-top: 20px;
`

export const FooterTop = styled.div`
  display: flex;
`

export const FooterContent = styled.div`
  display: flex;
  margin-bottom: 25px;
  position: relative;
  margin-top: 40px;
  
  &:before {
    top: -20px;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #CCCCCC;
  }
`

export const CheckboxSVG = styled.svg`
  display: none;
`

export const FooterCheckbox = styled.input`
  width: 25px;
  height: 25px;
  position: relative;
  
  &:before, &:after {
    display: none;
    position: absolute;
    content: '';
    background: #EF4123;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  
  &:after {
    background: url('${accept}') 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    filter: invert(1);
    transform: scale(.6);
  }
  
  &:checked:after, &:checked:before {
    display: block;
  }
`

export const FooterText = styled.p`
  margin-left: 10px;
  font-size: 12px;
`
