import React from 'react'
import './styles.scss'

import  contactImg from '../../images/symbols/contact.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function ContactForm(){
    return (
        
       <div>
            <form  id='form'>
                <h2 className="title">Envie-nos uma mensagem</h2>
                

                <div className="contactForm">
                    <div className="row">
                        <div className="col50">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Nome"   required/>
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
                            <input type="text" id="subject" name="subject" placeholder="Assunto"  required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col100">
                            <label htmlFor="message"></label>
                            <textarea name='message' id="message" placeholder="Digite sua mensagem aqui..."  required ></textarea>
                        </div>
                    </div>
                </div>
                
                <div className="send">
                    <button className="button"><FontAwesomeIcon className="icones" icon={faPaperPlane} />Enviar</button>
                </div>
            </form>
       </div>
    )
}