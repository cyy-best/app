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
    res.redirect('login.html');// 可以根据需要返回适当的响应
});
// 注册路由
app.post('/register', (req, res) => {
    // 注册处理程序的代码
});

// 登录路由
app.post('/login', (req, res) => {
    // 登录处理程序的代码
});

// 连接到数据库（如果使用MongoDB）
// mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// 定义用户模型和路由
const User = require('./models/User'); // 创建User模型
const authRoutes = require('./routes/auth'); // 创建路由

app.use('/auth', authRoutes);

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});