import React,{Component} from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import Home from '@/movie/Home'
import Movie from '@/movie/Movie'
import About from '@/movie/About'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from '@/movie/css/app.scss'
export default class App extends Component{
    constructor(){
        super()
        this.state={}
    }
    componentWillMount(){
        // console.log(window.location.hash.split('/')[1])
        console.log(styles.logo)
    }
    render(){
        return <HashRouter>
        <Layout className="layout" style={{height:'100%'}}>
            <Header>
            <div className={styles.logo}/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/movie/in_theaters/1">电影</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/about">关于</Link>
                </Menu.Item>
            </Menu>
            </Header>

            <Content style={{background: '#fff',flex:1 }}>
                <Route path="/home" component={Home}></Route>
                <Route path="/movie" component={Movie}></Route>
                <Route path="/about" component={About}></Route>
            </Content>

            <Footer style={{ textAlign: 'center',background: '#fff' }}>
            Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
        </HashRouter>
    }
}