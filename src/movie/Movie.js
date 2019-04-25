import React,{Component} from 'react'
import {Layout, Menu} from 'antd';
import {Route,Link,Switch} from 'react-router-dom'
import MovieList from '@/movie/MovieList'
import MovieDetail from '@/movie/MovieDetail'
const { Content, Sider,} = Layout;
export default class Movie extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return <Layout style={{ height: '100%'}}>
        <Sider width={200} style={{ background: '#fff'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            style={{ height: '100%' }}
          >
            <Menu.Item key="in_theaters">
                <Link to="/movie/in_theaters/1">正在热映</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon">
                <Link to="/movie/coming_soon/1">即将上映</Link>
            </Menu.Item>
            <Menu.Item key="top250">
                <Link to="/movie/top250/1">top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
            {/* 从路由里面提取参数 this.props.match.params */}
            {/* 使用路由的Switch组件可以优先匹配前面的路由，放弃后面的匹配 */}
            <Content style={{background: '#fff'}}>
            <Switch>
                <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
                <Route exact path="/movie/:type/:page" component={MovieList}></Route>
            </Switch>
                
            </Content>
        </Layout>
      </Layout>
    }
}