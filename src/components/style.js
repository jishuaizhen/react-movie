export default{
    bianju:{padding:'10px',width:'100%'},
    item:{border:'1px solid #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'},
    user:{fontSize:'18px'},
    content:{fontSize:'14px'}
}

// css样式模块化的几种方案
// 1.使用对象的形式编写css样式，然后引入使用对象点属性的形式调用
// 2.直接写css样式表，一样以对象的形式引入在webpack.config.js文件中为css-loader追加参数？module
// 3.在webpack.config.js中css-loader追加参数?modules&localIdentName=[path],path指代文件目录,将样式表中的类名和自定义的类名映射
// 4.被 :local() 包裹起来的样式类被模块化（模块化的默认效果），:global() 包裹起来的为全局