const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const { login, createUser } = require('./controllers/users');
const errorHandler = require('./middlewares/errorHandler');
const { userValidation, loginValidation } = require('./middlewares/validationJoi');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const { NODE_ENV, BASE_URL } = process.env;
const app = express();

app.use(cors());

mongoose.connect(NODE_ENV === 'production' ? BASE_URL : 'mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);

app.post('/signin', loginValidation, login);
app.post('/signup', userValidation, createUser);

app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Ссылка на сервер: http://localhost:${PORT}`);
});
