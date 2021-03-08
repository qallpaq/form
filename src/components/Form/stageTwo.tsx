import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { Input } from '../Input'
import { validateEmail, validateRequired } from '../../utils'
import { FormContext } from './formContext'
import { FormFooter } from './formFooter'
import { changeStage } from './actions'
import * as types from '../../types'

interface IInitialValues {
  phone: string
  email: string
  country: string
  city: string
}

export const StageTwo: React.FC = () => {
  const initialValues: IInitialValues = {
    phone: '',
    email: '',
    country: '',
    city: ''
  }

  const {state, dispatch} = useContext<any>(FormContext)
  const {phone, email, country, city} = state

  return (
    <Formik initialValues={initialValues} onSubmit={() => dispatch(changeStage(2))}>
      {({errors, touched, isValid}) => (
        <Form>
          <Input
            errors={errors}
            touched={touched}
            name={types.phone}
            validate={() => validateRequired(phone)}
            label='Номер телефона'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.email}
            validate={() => validateEmail(email)}
            label='E-mail'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.country}
            validate={() => validateRequired(country)}
            label='Страна'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.city}
            validate={() => validateRequired(city)}
            label='Город'
          />
          <FormFooter
            fields={[phone, email, country, city]}
            isValid={isValid}
            stage={0}
          />
        </Form>
      )}
    </Formik>
  )
}
