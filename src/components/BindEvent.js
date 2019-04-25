import React,{Component} from 'react'

export default class BindEvent extends Component{
    constructor(){
        super()
        this.state={
            msg:'hahaha'
        }
        
    }
    myClick=()=>{
        // console.log(this,a,b)
        this.setState({msg:'xixixi'})
    }
    textChange=(e)=>{
        // console.log(e.target.value)
        console.log(this.refs.txt.value)
        this.setState({
            // msg:e.target.value
            msg:this.refs.txt.value
        })
    }
    render(){
        return <div>BindEvent组件
            <hr/>
            <button onClick={this.myClick}>按钮</button>
            <div>{this.state.msg}</div>
            {/* 如果不绑定onChange处理函数，就绑定readonly属性 */}
            <input type='text' style={{width:'100%'}} 
            value={this.state.msg} 
            onChange={(e)=>this.textChange(e)}
            ref='txt'
            />
        </div>
    }
}
// 在onChange事件中获取文本框的值有两种方案
// 1.通过事件参数e来获取
// 2.vue中this.$refs获取dom元素


// 组件的生命周期
// vue:生命周期分为4个部分，8个钩子函数
// react：生命周期分为3个部分
// 1.组件创建阶段：componentWillMount、render、componentDidMount
// 2.组件运行阶段：（按需根据props属性或state属性状态的改变）componentWillReceiveProps、shouldComponentUpdate