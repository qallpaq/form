import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { Input } from '../Input'
import { validateNumber, validateRequired } from '../../utils'
import { FormContext } from './formContext'
import { FormFooter } from './formFooter'
import { changeStage } from './actions'
import * as types from '../../types'

interface IInitialValues {
  age: string
  username: string
  surname: string
  nickname: string
}

export const StageOne: React.FC = () => {
  const {state, dispatch} = useContext<any>(FormContext)
  const {age, username, surname, nickname} = state

  const initialValues: IInitialValues = {
    age: '',
    username: '',
    surname: '',
    nickname: ''
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => dispatch(changeStage(1))}>
      {({errors, touched, isValid}) => (
        <Form>
          <Input
            errors={errors}
            touched={touched}
            name={types.age}
            validate={() => validateNumber(age)}
            label='Возраст'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.username}
            validate={() => validateRequired(username)}
            label='Имя'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.surname}
            validate={() => validateRequired(surname)}
            label='Фамилия'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.nickname}
            validate={() => validateRequired(nickname)}
            label='Nickname'
          />
          <FormFooter
            fields={[age, username, surname, nickname]}
            isValid={isValid}
            back={false}
          />
        </Form>
      )}
    </Formik>
  )
}
