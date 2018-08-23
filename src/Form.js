import React,{Component} from 'react'


class Form extends Component{
    constructor(){
        super();
        this.state={
            //Default value for the customer field/ Placeholder
            name:"Paras",
            country:"",
            numbers:""
        }
        //bind is used to access the element events triggering these functions
        this.customerName=this.customerName.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.selectChange=this.selectChange.bind(this)
    }
    customerName(event){
        this.setState({
            name:event.target.value
        })
    }
    selectChange(event){
        this.setState({
            country:event.target.value
        })
    }
    handleChange(event){
        //fetching the numbers option using refs
        this.setState({
            numbers:this.refs.numbers.value
        })
        alert("Name entered :" +this.state.name+" Country :"+this.state.country+"Number :"+this.state.numbers)
        event.preventDefault();
    }
    render(){
        //REACT forms fields are strictly bound to the state. Until an onChange is not defined, it wont be editable
        //form onSubmit is equivalent to form action
        return(
            <div>
                <h2>Form</h2>
                <form onSubmit={this.handleChange}>
                Enter First Name:
                <input type="text" value={this.state.name} onChange={this.customerName} />
                <select value={this.state.country} onChange={this.selectChange}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Peru">Peru</option>
                    <option value="Nepal">Nepal</option>
                </select>
                <select ref="numbers">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }   
}

export default Form