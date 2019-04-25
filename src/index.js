// 使用ReactDom把虚拟DOM渲染到页面上
// 参数1：要渲染的虚拟dom
// 创建虚拟dom的时候需要传递三个参数：1.创建元素的类型，即名称，字符串；2.创建元素的属性，对象或者null；3.子节点子元素
// 参数2：指定页面上的一个dom节点

//1. 在class的花括号内只能写构造器、静态方法、静态属性、实例方法
//2. 在使用constructor的时候必须引用super(),super为父级的构造器
//3. this只能放在super之后
//4. 在class关键字创建的组件中，想使用外界传的参数直接使用this.props接收就行，而且props只读


// 使用class关键字创建的组件和function的区别
// class有自己的私有数据，但是function只有props没有私有数据和生命周期函数
// 构造函数无状态组件，class有状态组件，本质区别有无state属性
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/movie/App.js'
// import 'antd/dist/antd.css'
ReactDOM.render(
  <App>
  </App>,document.getElementById('app')
)
