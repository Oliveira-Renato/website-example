import React from 'react'
import './styles.scss'

import  contactImg from '../../images/symbols/contact.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function ContactForm(){
    return (
        
       <div>
            <form  action="classEmail.php" name="form" method="POST" id='form' >
                <h2 className="title">Envie-nos uma mensagem</h2>
                

                <div className="contactForm">
                    <div className="row">
                        <div className="col50">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="nome" placeholder="Nome"   required/>
                        </div>
                        <div className="col50">
                            <label htmlFor="lastname"></label>
                            <input type="text" id="lastname" name="lastname" placeholder="Sobrenome"  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col50">
                            <label htmlFor="email"></label>
                            <input type="text" id="email" name="email" placeholder="Email"   required />
                        </div>
                        <div className="col50">
                            <label htmlFor="subject"></label>
                            <input type="text" id="subject" name="assunto" placeholder="Assunto"  required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col100">
                            <label htmlFor="message"></label>
                            <textarea name='mensagem' id="message" placeholder="Digite sua mensagem aqui..."  required ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="send">
                    <input type="submit" className="button" />

                </div>
            </form>
       </div>
    )
}