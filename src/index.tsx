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
  mode?: string
  type?: string
  appearance?: {
    color?: 'black' | 'white'
    border?: boolean
    borderRadius?: number
    width?: number
    height?: number
  }
  render?: (props: { onClick: (event?: any) => void }) => JSX.Element
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

  const { mode, type, appearance } = props
  const { color, border, borderRadius, width, height } = appearance || {}

  return (
    <div
      id='appleid-signin'
      data-mode={mode}
      data-type={type}
      data-color={color}
      data-border={border}
      data-border-radius={borderRadius}
      data-width={width}
      data-height={height}
    />
  )
}
