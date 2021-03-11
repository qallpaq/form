import React, { useContext } from 'react'
import { FormContext, IContext } from '../Form/formContext'
import { phoneMask } from '../../utils'
import {
  InputError,
  InputInner,
  InputLabel,
  InputContainer
} from './styles'

interface IInput {
  errors: any
  touched: any
  name: string
  validate: (value: string) => string
  label: string
}

export const Input: React.FC<IInput> = ({
  errors,
  touched,
  name,
  validate,
  label
}) => {
  const hasError: boolean = errors[name] && touched[name]

  const {state, dispatch} = useContext<IContext>(FormContext)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: name, payload: e.target.value})
  }

  let value: string = state[name]

  if (name === 'phone') {
    value = phoneMask(value) || ''
  }

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputInner
        value={value}
        onChange={onInputChange}
        haserror={String(hasError)}
        name={name}
        validate={validate}
      />
      {hasError && <InputError>{errors[name]}</InputError>}
    </InputContainer>
  )
}
