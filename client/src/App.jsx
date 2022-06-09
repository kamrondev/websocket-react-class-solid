import React, { Component } from 'react'
import TheChatClass from './components/TheChat'
import TheLogo from './components/TheLogo'

export default class App extends Component {
  render() {
    return (
      <div className='container flex flex-col items-center w-full max-w-4xl min-h-screen p-4 mx-auto space-y-2'>
        <TheLogo />
        <TheChatClass />
      </div>
    )
  }
}
