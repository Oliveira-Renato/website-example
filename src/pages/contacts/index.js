import React, { useState } from 'react'

import '../../styles/variables.css'
import './styles.scss'

import  contactImg from '../../images/symbols/contact.png'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";



import toast from 'react-hot-toast';


export function ContactForm(){
    const [inputs, setInputs] = useState([]);
    const [status, setStatus] = useState('Enviar');
    const [verify, setVerify] = useState(true);
    const [loading, setLoading] = useState(false);


    function HandleCleanInputs(){
        var campos = document.querySelectorAll('input');
        var textArea= document.querySelectorAll('textarea');

        for (let i = 0;i <= campos.length-1; i++) {
            campos[i].value = '';     
        }
        if(textArea[0].value != '') {
                textArea[0].value = '';
        }

        setInputs([])
    }

    function HandleInputChanges(event){
        inputs[event.target.name] = event.target.value;

        setInputs(inputs)
    }

    async function HandleSubmitForm(event) {
        event.preventDefault();
        console.log(verify);
        // console.log(inputs);
        const data = Object.entries(inputs).map(([key, value]) => {
            return {
                [key] : value
            }
        })

        const dataObj = {
            name: data[0]?.name,
            lastname: data[1]?.lastname,
            email: data[2]?.email,
            subject: data[3]?.subject,
            message: data[4]?.message     
        }
        
        const wData = JSON.stringify(dataObj);

        try {

            $.ajax({
                type: 'POST',
                url: 'http://localhost:5000/contact',
                data: wData,
                contentType: "application/json; charset=utf-8",
                traditional: true,
                
            }).then((result) => {
                if(result.status == "success"){
                    setTimeout(function(){   
    
                        toast.success('Enviado com sucesso!',
                        {
                            icon: '👍',
                            style: {
                                background: 'var(--base-color)',
                                color: '#fff',
                                width: '300px',
                                fontSize: '1.6rem',
                            },
                        })
                    },1000)
                    
                    HandleCleanInputs();
                }else{
                    toast.error("Oops, Algo deu errado!", 
                    {
                        icon: '😱',
                        style: {
                            width: '300px',
                            background: '#EF2A2A',
                            color: '#fff',
                            fontSize: '1.6rem',
                        },
                    })
    
                    HandleCleanInputs()
                }
                
            }).catch((err) => {
                toast.error("Oops, Algo deu errado!", 
                {
                    icon: '😱',
                    style: {
                        width: '300px',
                        background: 'var(--error-color)',
                        color: '#fff',
                        fontSize: '1.6rem',
                    },
                })
                HandleCleanInputs()
                console.log("err ",err)
            });   

        } catch (error) {
            toast.error("Oops, Algo deu errado!", 
                {
                    icon: '😱',
                    style: {
                        width: '300px',
                        background: 'var(--error-color)',
                        color: '#fff',
                        fontSize: '1.6rem',
                    },
                })
            HandleCleanInputs()
            console.log('ERRO : ', error)
        }
    }
    

    function HandleOnChange(value) {
        setVerify(false)
        console.log(verify);
    }

    

    return (
       <div>
            <form  action="" name="form" method="POST" id='form' onSubmit={ HandleSubmitForm } >
                <h2 className="title">Envie-nos uma mensagem</h2>
                

                <div className="contactForm">
                    <div className="row">
                        <div className="col50">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Nome" onChange={ HandleInputChanges }  required/>
                        </div>
                        <div className="col50">
                            <label htmlFor="lastname"></label>
                            <input type="text" id="lastname" name="lastname" placeholder="Sobrenome" onChange={ HandleInputChanges } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col50">
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Email" onChange={ HandleInputChanges }  required />
                        </div>
                        <div className="col50">
                            <label htmlFor="subject"></label>
                            <input type="text" id="subject" name="subject" placeholder="Assunto" onChange={ HandleInputChanges } required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col100">
                            <label htmlFor="message"></label>
                            <textarea name='message' id="message" placeholder="Digite sua mensagem aqui..." onChange={ HandleInputChanges } required  />
                        </div>
                    </div>
                </div>
                
                <div className="send">
                    <button className="button" type="submit" >
                    <FontAwesomeIcon icon={faPaperPlane} />
                        {status}
                    </button>
                </div>
            </form>
       </div>
    )
}