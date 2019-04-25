import React,{Component} from 'react'
import styles from '@/components/style'
class CmtBox extends Component{
  constructor(){
    super()
    this.state={
    }
  }
  render(){
    return <div style={styles.bianju}>
      <label>评论人：</label><br/>
      <input type='text' ref='user'></input><br/>
      <label>评论内容：</label><br/>
      <textarea ref='content' cols='60' rows='10'></textarea><br/>
      <input type='button' value='发表评论' onClick={this.postComment}></input><br/>
    </div>
  }
  postComment=()=>{
      let cmtInfo = {user:this.refs.user.value,content:this.refs.content.value}
      let list = JSON.parse(localStorage.getItem('cmts')||'[]')
      list.unshift(cmtInfo)
      localStorage.setItem('cmts',JSON.stringify(list))
      this.refs.user.value=this.refs.content.value=''
      this.props.reload()
  }
}
export default CmtBox
