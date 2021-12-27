import { NextFunction, Request, Response } from "express";
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response) {
        res.send(`
        <form method="POST">
        <div>
            <label>Email:</label>
            <input name="email" />
        </div>
        <div>
            <label>Password:</label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
        `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const {email, password } = req.body;
    
        if (email && password && email === 'abc@gmail.com' && password === 'qwerty') {
            req.session = {loggedIn:true};
            res.redirect('/');
        } else {
            res.send('You need to provide a valid Email & Password.')
        }



    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/');
    };
    
}