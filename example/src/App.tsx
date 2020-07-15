import React from 'react'

import { AppleLogin } from 'react-apple-login-popup'

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
