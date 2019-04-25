import React,{Component} from 'react'

export default class BindThis extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:'哈哈哈'
        }
        
    }
    render(){
        return <div>
            <h1>绑定this并传参的几种方式</h1>
            <hr/>
            {/* <input type='button' value={this.state.msg} onClick={this.changeMsg1.bind(this)}></input> */}
            <input type='button' value={this.state.msg} onClick={()=>this.changeMsg2(1,2)}></input>
            <hr/>
            <input type='text' style={{width:'100%'}} value={this.state.msg}></input>
        </div>
    }
    changeMsg1(){
        console.log(this)
        this.setState({
            msg:'方式一'
        })
    }
    changeMsg2=(a,b)=>{
        this.setState({
            msg:'方式二'+a+b
        })
    }
}
// 方式一：使用箭头函数
// 方式二：使用bind，bind和call/apply区别：call和apply修改完this指向会立即调用，bind只负责修改传参的话在this后面加参数
// 方式三：bind有返回值，返回值是修改this指向之后的函数引用，不会修改原函数的this指向，给原函数重新赋值为修改过this指向的函数引用