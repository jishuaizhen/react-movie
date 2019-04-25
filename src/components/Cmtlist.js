import React,{Component} from 'react'
import CmtItem from '@/components/CmtItem'
import CmtBox from '@/components/CmtBox'
class Cmtlist extends Component{
  constructor(){
    super()
    this.state={
      CommentList:[
        {id:1,user:'a1',content:'1'},
        {id:2,user:'a2',content:'2'},
        {id:3,user:'a3',content:'3'},
        {id:4,user:'a4',content:'4'},
        {id:5,user:'a5',content:'5'},
      ]
    }
  }
  componentWillMount(){
    this.loadCmts()
  }
  render(){
    return <div>
      <h1 style={{color:'red',fontSize:'35px',textAlign:'center'}}>这是评论列表组件</h1>
      <CmtBox reload={this.loadCmts}></CmtBox>
      {this.state.CommentList.map(item=><CmtItem key={item.id} {...item}></CmtItem>)}
    </div>
  }
  loadCmts=()=>{
    let list = JSON.parse(localStorage.getItem('cmts')||'[]')
    this.setState({
      CommentList:list
    })
  }
  
}
export default Cmtlist
