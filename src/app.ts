import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send(`Hello from Kenya's PetHome!!`);
});