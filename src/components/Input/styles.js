import styled from 'styled-components/macro'
import { Field } from 'formik'

const red = '#EF4123'

export const InputContainer = styled.div`
  margin-bottom: 15px;
`

export const InputLabel = styled.p`
  color: grey;
  font-size: 12px;
`

export const InputInner = styled(Field)`
  padding: 15px 10px;
  transition: .2s;
  background: transparent;
  border: ${({haserror}) => haserror === 'true' ? `1px solid ${red}` : '1px solid #CCCCCC'};
  margin-bottom: 2px;
  border-radius: 2px;
  width: 100%;
`

export const InputError = styled.div`
  color: ${red};
`
