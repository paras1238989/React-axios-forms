import React,{Component} from 'react'
import axios from 'axios'


class AxiosExample extends Component{
    constructor(){
        super();
        this.state={
            postList:[]
        }
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response)
            var posts=response.data
            this.setState({postList:posts})}
        )
        .catch((reject)=>console.log("Error while fetching",reject))
    }
    render(){
        return(
            <div>
                <h2>Axios HTTP GET call</h2>
                <ul>{
                    this.state.postList.map((post) => <li>{post.id}--->{post.title}</li>)
                }
                </ul>
            </div>
        )
    }   
}

export default AxiosExample