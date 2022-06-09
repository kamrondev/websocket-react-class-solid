import React, { Component } from 'react'
import io from 'socket.io-client'
const socket = io('http://localhost:8080')

export default class TheChatClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      chat: [],
    }
  }
  inputHandler = (e) => {
    this.setState({ message: e.target.value })
  }
  sendMessage = (e) => {
    e.preventDefault()
    socket.emit('message', { message: this.state.message })
    this.setState({ message: '' })
  }

  componentDidMount() {
    socket.on('message', (payload) => {
      this.setState({ chat: [...this.state.chat, payload] })
    })
  }

  render() {
    return (
      <div className='w-full space-y-4'>
        <div className='px-6 py-4 overflow-x-hidden overflow-y-auto border rounded h-96 chat-container'>
          <h1>
            Your ID: <span className='font-bold'>798</span>
          </h1>
          {this.state.chat.map((payload, index) => {
            return (
              <div key={index} className='space-x-3'>
                <span>{payload.message}</span>
              </div>
            )
          })}
        </div>
        <form className='flex' onSubmit={this.sendMessage}>
          <input
            className='w-full px-4 py-2 border rounded-tl rounded-bl outline-none'
            type='text'
            value={this.state.message}
            onChange={this.inputHandler}
            placeholder='Type a message...'
            required
          />
          <button
            className='px-4 py-2 text-white border rounded-tr rounded-br border-slate-900 bg-slate-900'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    )
  }
}
