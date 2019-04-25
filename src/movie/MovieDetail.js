import React,{Component} from 'react'
import { Button, Icon,Spin } from 'antd';
import fetchJSONP from 'fetch-jsonp'
export default class About extends Component{
    constructor(props){
        super(props)
        this.state={
            info:{},
            isloading:true
        }
    }
    componentWillMount(){
        fetchJSONP('http://api.douban.com/v2/movie/subject/'+this.props.match.params.id)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                info:data,
                isLoading:false
            })
        })
    }
    render(){
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />返回电影列表页面
            </Button>
            {this.renderInfo()}
        </div>
    }
    goBack=()=>{
        this.props.history.go(-1)
    }
    renderInfo=()=>{
        if(this.state.isLoading){
            return <Spin tip="Loading...">
            <Alert
              message="正在加载中"
              description="精彩内容马上呈现..."
              type="info"
            />
          </Spin>
            }else{
                return <div>
                <h1 style={{textAlign:'center'}}>{this.state.info.title}</h1>
                {/* <img src={this.state.info.images.large}></img> */}
                <p style={{textIndent:'2em'}}>{this.state.info.summary}</p>
                </div>
            }
    }
}