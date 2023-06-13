const express = require('express'); //подключаем модуль express
const fs = require ('fs');
const app = express(); //записываем в переменную основные методы express

app.use(express.json());
app.use(express.static('./public'));

/**
 * @param req объект о котором хранится информация о запросе (request)
 * @param res объект о котором хранится информация о ответе (response)
 * @method send метод отправляет res
 * Когда браузер пришлёт запрос на /api/users, в ответ ему вернётся содержимое файла users.json.
 */


app.get('/api/users', (req, res) =>{
        fs.readFile('./server/DataBase/users.json', 'utf-8', (err, data) =>{
            if(err) res.send({result:0, text: err});
            else res.send(data);
        });
});

/**
 * метод принимает номер порта, на котором создаётся сервер
 */

app.listen (5555, () => {
    console.log ('server is running on port 5555!');
});