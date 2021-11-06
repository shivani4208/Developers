import emailjs from 'emailjs-com';
import { ButtonElement } from "../PageStyles/Button";
import './Contact.css';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_dpmmt64', 'template_y3ihpkm', e.target, 'user_yKXaJeuJ7MItyrM5MfRL5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <div className="container">
                <div className="header">
                    <h2>Create Account</h2>
                </div>
                <form id="form" className="form" onSubmit={sendEmail}>
                    <div class="form-control">
                        <label for="name">Name</label>
                        <input type="text" placeholder="Enter your name" name="name" id="username" required/>
                    </div>
                    <div className="form-control">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Enter your email" id="email" required/>
                    </div>
                    <div className="form-control">
                        <textarea className="msg" placeholder="Ask comments" required></textarea>
                    </div>
                    <ButtonElement>Submit</ButtonElement>
                </form>
            </div>
        </div>
    )
}



