import React,{Component} from 'react'
import reactTypes from 'prop-types'
export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:props.initCount
        }
    }
    static defaultProps = {
        initCount:reactTypes.number
    }
    componentWillMount(){//内存中的虚拟dom没创建
        console.log(document.getElementById('h3'))
    }
    render(){
        return <div>
            <h1>这是Counter计数器组件</h1>
            <input id='inp' type='button' value='+1'></input>
            <h3 id='h3'>当前的数量是：{this.state.count}</h3>
        </div>
    }
    componentDidMount(){
        document.getElementById('inp').onclick=()=>{
            console.log(document.getElementById('inp'))
            this.setState({
                count:this.state.count+1
            })
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        // 判断组件是否需要更新
        // 需求：数字为偶数的时候切换
        // return nextState.count % 2 === 0 ? true :false
        return true
    }
    componentWillUpdate(){
        // 此时页面上的dom节点都是旧的
    }
    componentDidUpdate(){
        // 此时页面上的dom节点和数据都是新的
    }
}