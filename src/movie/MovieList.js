import React,{Component} from 'react'
import { Spin, Alert, Pagination  } from 'antd';
import fetchJSONP from 'fetch-jsonp'
import MovieItem from '@/movie/MovieItem'

export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],//电影列表
            nowPage:parseInt(props.match.params.page)||1,//当前显示多少页
            pageSize:12,//每页显示多少数据
            total:0,//当前分类总共多少数据
            isLoading:true,
            movieType:props.match.params.type
        }
    }
    componentWillMount(){
        this.loadMovie()
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.match.params)
        this.setState({
            isLoading:true,
            nowPage:parseInt(nextProps.match.params.page)||1,
            movieType:nextProps.match.params.type,
        },function(){
            this.loadMovie()
        })
    }
    render(){
        return <div>{this.renderList()}</div>

    }
    loadMovie = ()=>{
        const start = this.state.pageSize*(this.state.nowPage - 1)
        const url = `http://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`
        fetchJSONP(url)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                isLoading:false,
                movies:data.subjects,
                total:data.total
            })
        })
        // const data = require('@/movie/test_data/'+this.state.movieType+'.json')
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading:false,
        //         movies:data.subjects,
        //         total:data.total
        //     })
        // },1000)
        
    }
    pageChange=(page)=>{
        // window.location.href='/#/movie/'+this.state.movieType+'/'+page
        this.props.history.push('/movie/'+this.state.movieType+'/'+page)
    }
    renderList = ()=>{
        if(this.state.isLoading){
        return <Spin tip="Loading...">
        <Alert
          message="正在请求电影列表"
          description="精彩内容马上呈现..."
          type="info"
        />
      </Spin>
        }else{
            return <div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.movies.map(item=>{
                    return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                })}
            </div>
            <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChange}/>
            </div>
        }
    }
}