# react-sign-in-apple
> React Component for Sign in with Apple

[![NPM](https://img.shields.io/npm/v/react-sign-in-apple.svg)](https://www.npmjs.com/package/react-sign-in-apple) 

## Install

```bash
npm install --save react-sign-in-apple
```

## Usage

```js
import React from 'react'

import { AppleLogin } from 'react-sign-in-apple'

const AppleLoginComponent = () => {
  return (
    <AppleLogin
      clientId="[clientId]"
      redirectURI="[redirectURI]"
      onSuccess={console.log}
      onFailure={console.error}
      render={({ onClick }) => (
        <button onClick={onClick}>Sign in with Apple</button>
      )}
    />
  )
}
```

## Additional Info
See [link](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple) for docs on Sign in with Apple

## License

MIT © [Akshit Kr Nagpal](https://github.com/akshitkrnagpal)
