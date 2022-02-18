import React from 'react'
import '../../styles/contact/styles.scss'
import { Button } from '../../components/Button';

import  contactImg from '../../images/symbols/contact.png'

export function ContactForm(){
    return (
        
       <div>
           
            <section className="contact" id="contact">
            
            <div className="contact_img">
                <img src={ contactImg} />
            </div>
            <div className="title white">
                <h2>Entre em Contato</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </div>
            <form  id='main-form'>
                <div className="contactForm">
                    <div className="row">
                        <div className="col50">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Primeiro Nome"   required/>
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
            
                <div className="row">
                    <div className="col100 btn-da-massa">
                         <Button /> 
                    </div>
                </div>
            </form>
        </section>
       </div>
    )
}