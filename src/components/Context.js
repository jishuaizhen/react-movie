import React,{Component} from 'react'
import reactTypes from 'prop-types'
export default class Com1 extends Component{
    constructor(){
        super()
        this.state={
            color:'red'
        }
    }
    getChildContext(){
        return{
            color:this.state.color
        } 
    }
    static childContextTypes={
        color:reactTypes.string
    }
    render(){
        return <div>
    <h1>这是父组件</h1>
    <Com2></Com2>
    </div>
    }
    
  }
  class Com2 extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return <div>
        <h3>这是子组件</h3>
        <Com3></Com3>
        </div>
    }
    
  }
  class Com3 extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    static contextTypes={
        color:reactTypes.string
    }
    render(){
        return <div>
        <h5>这是孙组件---{this.context.color}</h5>
        </div>
    }
    
  }