import React, { createContext, useReducer } from 'react'
import {
  accepted,
  age,
  city,
  country,
  email,
  nickname,
  phone,
  reset,
  stage,
  surname,
  username
} from '../../types'

interface IInitialState {
  stage: number
  accepted: boolean
  age: string
  username: string
  surname: string
  nickname: string
  phone: string
  email: string
  country: string
  city: string
}

export const FormContext = createContext({})

export const FormContextProvider: React.FC = ({children}) => {

  const reducer = (state: IInitialState, action: { type: {}, payload?: {} }) => {

    const returnFromPayloadTo = (name: string): any => {
      return {...state, [name]: action.payload}
    }

    switch (action.type) {
      case reset: {
        return initialState
      }
      case accepted: {
        return {...state, accepted: !state.accepted}
      }
      case stage:
        return returnFromPayloadTo(stage)
      case age:
        return returnFromPayloadTo(age)
      case username:
        return returnFromPayloadTo(username)
      case surname:
        return returnFromPayloadTo(surname)
      case nickname:
        return returnFromPayloadTo(nickname)
      case phone:
        return returnFromPayloadTo(phone)
      case email:
        return returnFromPayloadTo(email)
      case country:
        return returnFromPayloadTo(country)
      case city:
        return returnFromPayloadTo(city)
      default: {
        return state
      }
    }
  }

  const initialState: IInitialState = {
    stage: 0,
    accepted: false,
    age: '',
    username: '',
    surname: '',
    nickname: '',
    phone: '',
    email: '',
    country: '',
    city: ''
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = {state, dispatch}

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  )
}
