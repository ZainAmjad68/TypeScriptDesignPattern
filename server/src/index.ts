import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express, {Request, Response} from 'express';
//import { router } from './routes/loginRoutes';
import './controllers/LoginController'
import './controllers/RootController'
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieSession({keys:['secret']}));
//app.use(router);
app.use(AppRouter.getInstance());

app.listen(3001, () => {
    console.log('server now running on Port 3001');
})