import { Button } from "../Button/Button";
import './Card.css';

export const Card = () => {
    return(
        <div className="card">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="*******" id="password" name="password" required/>
            <Button>ENTRAR</Button>
        </div>
    );
}