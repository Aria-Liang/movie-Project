const path = require('path');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const likeRouter = require('./routes/likeRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/like', likeRouter);

app.get('/', (req, res) => {

});

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' }, 
    };
  
    const errorObj = Object.assign({}, defaultErr, err);
    console.log('errorObj', errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
}); 
  

app.listen(port, () => {
    console.log(`App running on Port ${port}`);
})

module.exports = app;