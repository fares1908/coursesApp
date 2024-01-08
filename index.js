const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json()) // بيحوب البفير 

const coursesRouter = require('./routes/courses.routs'); //اي حاجه فيها اسلاش هياخده علي الرس
const { default: mongoose } = require('mongoose');
const url = 'mongodb+srv://faressamymohamed:fares1907@fares-samy.nrf7uxx.mongodb.net/code-zone?retryWrites=true&w=majority';
mongoose.connect(url).then(() => {
    console.log('mongodb connect sucess');
});

app.use('/courses', coursesRouter)



app.listen(5000, () => {
    console.log('runnnming')
})