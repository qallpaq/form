import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { Input } from '../Input'
import { validateRequired } from '../../utils'
import { FormContext } from './formContext'
import { FormFooter } from './formFooter'
import { resetState } from './actions'
import * as types from '../../types'

interface IInitialValues {
  film: string
  weather: string
  group: string
  color: string
}

export const StageThree: React.FC = () => {
  const initialValues: IInitialValues = {
    film: '',
    weather: '',
    group: '',
    color: ''
  }

  const {state, dispatch} = useContext<any>(FormContext)
  const {film, weather, group, color} = state

  return (
    <Formik initialValues={initialValues} onSubmit={() => dispatch(resetState())}>
      {({errors, touched, isValid}) => (
        <Form>
          <Input
            errors={errors}
            touched={touched}
            name={types.film}
            validate={() => validateRequired(film)}
            label='Любимый фильм'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.weather}
            validate={() => validateRequired(weather)}
            label='Любимая погода'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.group}
            validate={() => validateRequired(group)}
            label='Любимая группа'
          />
          <Input
            errors={errors}
            touched={touched}
            name={types.color}
            validate={() => validateRequired(color)}
            label='Любимый цвет'
          />
          <FormFooter
            fields={[film, weather, group, color]}
            isValid={isValid}
            stage={1}
          />
        </Form>
      )}
    </Formik>
  )
}
