import React,{Component} from 'react'
export default class Parent extends Component{
    constructor(){
        super()
        this.state={
            pmsg:'这是父组件身上的消息'
        }
    }
    render(){
        return <div>
            <h1>这是父组件</h1>
            <hr/>
            <Son pmsg={this.state.pmsg}></Son>
        </div>
    }
}
class Son extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return <div>
            <h3>这是子组件---{this.props.pmsg}</h3>
        </div>
    }
    componentWillReceiveProps(){
        // 只有子组件接收到最新的props才会触发
        // 如果我使用this.props获取的是旧的，如果使用新的需要参数nextProps.props
        // 在更新阶段可以使用参数获取最新的数据，挂载阶段
    }
}