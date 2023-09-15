// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 设置静态文件目录
app.use(express.static('public'));



const fakeUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // 添加更多虚拟用户数据
];
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});
// 注册路由
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // 检查密码长度和包含数字和字母的要求
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: '密码必须包含至少一个字母和一个数字，且长度至少为8位' });
    }

    // 在这里添加将用户信息保存到数据库的代码

    // 返回成功响应
    res.status(200).json({ message: '注册成功' });
});

app.post('/validate', (req, res) => {
    const { username, password } = req.body;

    // 在这里添加从数据库中检查用户信息的代码

    // 示例：假设用户名和密码匹配
    const isUserValid = true;

    if (isUserValid) {
        res.status(200).json({ message: '验证成功' });
    } else {
        res.status(401).json({ message: '验证失败' });
    }
});

// 登录路由
app.post('/login', (req, res) => {
    // 登录处理程序的代码
});

app.get('/chat', (req, res) => {
    // 在这里渲染 chat.html 页面
    res.sendFile(__dirname + '/public/chat.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
})
// 连接到数据库（如果使用MongoDB）
// mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// 定义用户模型和路由
const User = require('./backEnd/models/User'); // 创建User模型
const authRoutes = require('./backEnd/routes/auth'); // 创建路由

app.use('/auth', authRoutes);

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});