// подключение express
const express = require("express");
const bodyParser = require("body-parser");
// создаем объект приложения
const app = express();
app.use(express.static(__dirname + "/../frontend"));
// определяем обработчик для маршрута "/"
// app.get("/", function(request, response){
//
//     // отправляем ответ
//     response.send("<h2>Привет Express!</h2>");
// });
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);