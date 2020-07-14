import * as React from 'react'
import scriptjs from 'scriptjs'

interface Props {
  clientId: string
  redirectURI: string
  scope?: string
  state?: string
  responseType?: string | 'code' | 'id_token'
  responseMode?: string | 'query' | 'fragment' | 'form_post'
  nonce?: string
  usePopup?: boolean
  onSuccess?: Function
  onFailure?: Function
  render?: (props: {
    onClick: (e?: any) => void
    disabled?: boolean
  }) => JSX.Element
}

declare let window: any

export const AppleLogin = (props: Props) => {
  scriptjs(
    'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
    () => {
      const { clientId, scope, redirectURI, state, nonce, usePopup } = props
      window.AppleID.auth.init({
        clientId,
        scope,
        redirectURI,
        state,
        nonce,
        usePopup
      })
    }
  )

  const handleSuccess = (authorization: any) => {
    if (typeof props.onSuccess === 'function') {
      props.onSuccess(authorization)
    }
  }

  const handleFailure = (error: any) => {
    if (typeof props.onFailure === 'function') {
      props.onFailure(error)
    }
  }

  const onClick = async () => {
    try {
      const data = await window.AppleID.auth.signIn()
      handleSuccess(data)
    } catch (error) {
      handleFailure(error)
    }
  }

  if (typeof props.render === 'function') {
    return props.render({ onClick })
  }
  return (
    <div
      id='appleid-signin'
      data-color='black'
      data-border='true'
      data-type='sign in'
    />
  )
}
