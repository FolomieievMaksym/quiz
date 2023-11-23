const express = require("express");
const app = express();

// Middleware для обработки CORS-запросов
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Обработчик GET-запроса к серверу для получения списка подразделений
app.get("/roles.json", (req, res) => {
   const fileData = require("./json/roles.json");
   res.json(fileData);
});
app.get("/questions.json", (req, res) => {
   const fileData = require("./json/questions.json");
   res.json(fileData);
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
   console.log("Сервер запущен на порту 3000");
});
