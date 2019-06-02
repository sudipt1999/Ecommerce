import React, { Component} from 'react';


class SignIn extends Component {

    state={
        name:"",
        email:"",
        password:""
    }

    onFormChange=(change,event)=>{
        console.log("VALUE CHANGE ",event.target.value)
        if(change === "name")
            this.setState({name : event.target.value});
        else if (change === "password")
            this.setState({
                password: event.target.value
            })    
        else
            this.setState({email: event.target.value})
    }

    submitForm=()=>{
        console.log(this.state)
    }


    render(){
        return (
            <div>
                <h1>Sign In !!</h1>
                <input type="text" placeholder="name" onChange={(e)=>this.onFormChange("name", e)} value={this.state.name}/>
                <input type="email" placeholder="email" onChange={(e)=>this.onFormChange("email", e)} value={this.state.email}/>
                <input type="password" placeholder="password" onChange={(e)=>this.onFormChange("password", e)} value={this.state.password}/>
                <button onClick={this.submitForm}>Submit</button>
            </div>
            )
    }

}

export default SignIn;