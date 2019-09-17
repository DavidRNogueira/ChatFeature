import React , {Component} from 'react'
import Messages from './Messages'
import NewMessage from './NewMessage'

class App extends Component{
  state={
    message:[
      {content:'Welcome! Begin chatting!', id:1},
      {content:"Hi, I'm David and I hope you enjoy my app!", id:2}
    ]
    
  }

  newMessage = (addedMessage) =>{
    //addedMessage.id = Math.random();
    const message = {content:addedMessage, id:[Math.random()]  }
    const newArray = [...this.state.message,message]
    this.setState({
      message:newArray
     
    })
  }
  
  
  
  
  
  
  render(){
    return(
      <div className='ChatApp'>
        <h1>Start Chatting!</h1>
        <Messages Messages={this.state.message}/>
        <NewMessage NewMessage = {this.newMessage}/>
      </div>
    )
  }
}

export default App;
