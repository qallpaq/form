import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { Input } from '../Input'
import { validateEmail, validateRequired } from '../../utils'
import { FormContext } from './formContext'
import { FormFooter } from './formFooter'
import { resetState } from './actions'

interface IInitialValues {
  phone: string
  email: string
  country: string
  city: string
}

export const StageThree: React.FC = () => {
  const initialValues: IInitialValues = {
    phone: '',
    email: '',
    country: '',
    city: ''
  }

  const {state, dispatch} = useContext<any>(FormContext)
  const {phone, email, country, city} = state

  return (
    <Formik initialValues={initialValues} onSubmit={() => dispatch(resetState())}>
      {({errors, touched, isValid}) => (
        <Form>
          <Input
            errors={errors}
            touched={touched}
            name='phone'
            validate={() => validateRequired(phone)}
            label='Номер телефона'
          />
          <Input
            errors={errors}
            touched={touched}
            name='email'
            validate={() => validateEmail(email)}
            label='Ваш E-mail'
          />
          <Input
            errors={errors}
            touched={touched}
            name='country'
            validate={() => validateRequired(country)}
            label='Страна'
          />
          <Input
            errors={errors}
            touched={touched}
            name='city'
            validate={() => validateRequired(city)}
            label='Город'
          />
          <FormFooter
            fields={[phone, email, country, city]}
            isValid={isValid}
            stage={1}
          />
        </Form>
      )}
    </Formik>
  )
}
