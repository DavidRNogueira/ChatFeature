import React,{Component} from 'react'

class NewMessage extends Component{
state={
    message:[
        {content:'', id:''}
    ]}

handleSubmit = (e) =>{
    e.preventDefault();
    this.props.NewMessage(this.state.message)
    
}
    
    

handleChange = (e) =>{
    this.setState({message:e.target.value})
}
render(){
    return(
        <form className='form' onSubmit={this.handleSubmit}>
            <label>Enter Message Here:</label>
            <input onChange ={this.handleChange}type='text'/>
            <button className='submitbtn'>Submit</button>
        </form>
    )
}
}
export default NewMessage