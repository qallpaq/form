import React, { createContext, useReducer } from 'react'
import {
  accepted,
  age,
  city,
  color,
  country,
  email,
  film,
  group,
  nickname,
  phone,
  reset,
  stage,
  surname,
  username,
  weather
} from '../../types'

export interface IInitialState {
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
  film: string
  weather: string
  group: string
  color: string

  [index: string]: any
}

export interface IContext {
  state: IInitialState
  dispatch: any
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
  city: '',
  film: '',
  weather: '',
  group: '',
  color: ''
}

interface IAction {
  type: string
  payload?: any
}

export const FormContext = createContext<IContext>({state: initialState, dispatch: () => null})

export const FormContextProvider: React.FC = ({children}) => {

  const reducer = (state: IInitialState, action: IAction): IInitialState => {

    const returnFromPayloadTo = (name: string): IInitialState => {
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
      case film:
        return returnFromPayloadTo(film)
      case weather:
        return returnFromPayloadTo(weather)
      case group:
        return returnFromPayloadTo(group)
      case color:
        return returnFromPayloadTo(color)
      default: {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FormContext.Provider value={{state, dispatch}}>
      {children}
    </FormContext.Provider>
  )
}
