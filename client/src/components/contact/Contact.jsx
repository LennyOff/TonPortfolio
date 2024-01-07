import { useState } from "react";
import './contact.css'
import axios from "axios";
import { SectionWrapper } from "../../hoc";

const Contact = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
    
        const data = {
          email,
          message,
          name,
        };
    
        const response = await axios.post(
            "https://ton-portfolio.vercel.app/api/sendemail",
          data
        );
        console.log(response.data);
    };
    

  return (
    <div className='contact'>
        <form onSubmit={sendEmail}>
            <div className='contactInfos'>
                <div className='contactInfosTitle'>
                    <h1>Me Contacter</h1>
                </div>
                <div className='contactInfosInputs'>
                    <label htmlFor="name">nom</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} required value={name} placeholder="Joe Dalton" />
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required value={email} placeholder="joe.dalton@gmail.com" />
                </div>
            </div>
            <div className='contactMessage'>
                <div className='contactMessageText'>
                <label htmlFor="message">message</label>
                    <textarea name="message" id="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Ecrivez ici ..' cols="30" rows="10"></textarea> 
                </div>
                <button className='contactButton'>Envoyer un message</button>
            </div>
        </form>
    </div>
  )
}

export default SectionWrapper(Contact, "");