// npm install - g nodemon
// nodemon当文件改变会自动重启js

//引入 express
const express = require('express');

//创建应用对象
const app = express();

// 创建路由规则
// request是请求报文的封装
// response是响应报文的封装
// app.get('/server', (request, response) => {
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     //设置响应
//     response.send("HELLO AJAX GET");
// })
// app.post('/server', (request, response) => {
//     //设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     //设置响应
//     response.send("HELLO AJAX GET");
// })
//可以接受任何类型的请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //所有请求头都可以设置
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应
    response.send("HELLO AJAX POST");
})

//json对象
app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //所有请求头都可以设置
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应数据
    const data = {
        name: 'zengrflalalal'
    };
    let str = JSON.stringify(data);
    //设置响应
    response.send(str);
})

//IE缓存
app.all('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send("HELLO IE -3");
})

//请求超时和网络异常处理 abort处理
app.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        response.send("延迟响应。。。");
    }, 1000)
})

//jQuery服务
app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        type: 'jQuery',
    }
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(JSON.stringify(data));
})

//axios服务
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        type: 'axios',
    }
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(JSON.stringify(data));
})

//fetch服务
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        type: 'fetch',
    }
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send(JSON.stringify(data));
})

app.all('/jsonp-server', (request, response) => {
    // 应该返回js代码
    const data = {
        name: 'zrf',
    }
    let str = JSON.stringify(data);
    // 返回函数调用的字符串
    response.send(`handle(${str})`);
})

// 用户名检测
app.all('/check-username', (request, response) => {
    // 应该返回js代码
    const data = {
        exist: true,
        msg: '用户名已经存在'
    }
    let str = JSON.stringify(data);
    // 返回函数调用的字符串
    response.send(`handle(${str})`);
})

// jQuery jsonp请求
app.all('/jquery-jsonp-server', (request, response) => {
    // 应该返回js代码
    const data = {
        name: 'zrf',
        age: 18
    };
    let str = JSON.stringify(data);
    // 返回函数调用的字符串

    // 接受callback参数
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
})

// CORS请求
app.all('/cors-server', (request, response) => {
    //设置响应头 设置允许跨域 *表示所有网页
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Method', '*');
    response.send(`hello cors`);
})
//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中");
})