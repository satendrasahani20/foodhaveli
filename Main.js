import React from 'react'
import App from './App'
import {PaperProvider} from "react-native-paper"
import CustomTheme from './src/theming/CustomTheme'
const Main = () => {

  return (
    <PaperProvider theme={CustomTheme}>
      <App />
     </PaperProvider>
  )
}

export default Main