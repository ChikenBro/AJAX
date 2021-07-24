const express = require('express');

const app = express();

app.all('/home', (request, response) => {
  //响应一个界面
  response.sendFile(__dirname + '/12-同源策略.html');
});
app.all('/data', (request, response) => {
  response.send('用户数据');
})
app.listen(9000, () => {
  console.log('9000端口已启用');
});