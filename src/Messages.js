import React from 'react'

const Messages = ({Messages}) =>{
    
    const allMessages = Messages.map(message=>{
        return(<span className='eachmessage'>{message.content}</span>)
    })
  
    return(
        <div>
            {allMessages}
        </div>
    ) 
    }
export default Messages