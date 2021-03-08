import React from 'react'
import GlobalStyle from './styles'
import { RegistrationForm } from '../Form'
import { Header } from '../Header'
import { FormContextProvider } from '../Form/formContext'

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <FormContextProvider>
        <RegistrationForm/>
      </FormContextProvider>
    </div>
  )
}

export default App
