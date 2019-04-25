import React,{Component} from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import {DatePicker} from 'antd'
// HashRouter表示路由的跟容器，所有的路由信息都要包裹在HashRouter中，一个网站内只要使用一次HashRouter即可
// Router表示路由规则，Router上有两个重要的属性，path和component
// Link表示路由的链接，<link to=''>
export default class App extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        // 当使用HashRouter之后就表示网站已经启用路由
        // 在一个HashRouter中只能有一个根元素
        return <HashRouter>
        <div>
            <h1>这是网站的App根组件</h1>
            <hr/>
            <DatePicker></DatePicker>
            <hr/>
            <Link to='/home'>首页</Link>&nbsp;&nbsp;
            <Link to='/movie/top250/10'>电影</Link>&nbsp;&nbsp;
            <Link to='/about'>关于</Link>
            <hr/>
            {/* Route就是我们创建的路由，path对应路由，component对应组件，Rroute为占位符替代router-view */}
            {/* 默认情况下路由是模糊匹配的，exact表示精确匹配属性 */}
            {/* 如果要匹配参数，可以在匹配规则中使用：修饰符 */}
            <Route path='/home' component={Home} exact></Route>
            <Route path='/movie/:types/:id' component={Movie}></Route>
            <Route path='/about' component={About}></Route>
        </div>
        </HashRouter>
    }
}