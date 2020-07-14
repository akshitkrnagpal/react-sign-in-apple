import React from 'react'

import { AppleLogin } from 'react-apple-login-popup'
import 'react-apple-login-popup/dist/index.css'

const App = () => {
  return (
    <AppleLogin
      clientId='[clientId]'
      redirectURI={document.location.origin}
      usePopup
      onSuccess={console.log}
      onFailure={console.error}
    />
  )
}

export default App
