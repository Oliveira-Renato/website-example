<?php

    require_once 'phpmailer/class.phpmailer.php';
    
    class classEmail{
        
        private $mailer;

        public function __construct(){
            $this->mailer = new PHPMailer();
        }
        
        public function enviar($contato){
            
            //$conteudo = " De: " . $contato['email'] . " \n";
            $conteudo .= " Nome: ". $contato['nome'] . " <br />"; 
            $conteudo .= " Assunto: " . $contato['assunto'] . " <br />"; 
            $conteudo .= " Email: " . $contato['email'] . " <br />"; 
            $conteudo .= " Mensagem: " . $contato['mensagem'] . " <br />";
            
            $username = 'send@kennen.com.br';
            $password = 'Jskl12ujis0821';
            
            $from = "send@kennen.com.br";
            $fromName = "[Contato Site] " . $contato['nome'] . " - " . $contato['email'];

            // Define os dados do servidor e tipo de conexão
            $this->mailer->IsSMTP(); // Define que a mensagem será SMTP
            $this->mailer->SMTPAuth = true; // Usar autenticação SMTP (obrigatório para smtp.seudomínio.com.br)
            $this->mailer->Username = $username; // Usuário do servidor SMTP (endereço de email)
            $this->mailer->Password = $password; // Senha do servidor SMTP (senha do email usado)

            // Define o remetente
            $this->mailer->From = $from; // Seu e-mail
            $this->mailer->Sender = $from; // Seu e-mail
            $this->mailer->FromName = $fromName; // Seu nome

            // Define os destinatário(s)
            // $this->mailer->AddAddress('cicero@kennen.com.br');
            // $this->mailer->AddAddress('contato@kennen.com.br');
            $this->mailer->AddAddress('renato.printf@gmail.com');



            // Define os dados técnicos da Mensagem
            $this->mailer->IsHTML(true); // Define que o e-mail será enviado como HTML

            // Define a mensagem (Texto e Assunto)
            $this->mailer->Subject = $contato['assunto']; // Assunto da mensagem
            $this->mailer->Body = $conteudo;
            $this->mailer->AltBody = $conteudo;

            $enviado = $this->mailer->Send();

            $this->mailer->ClearAllRecipients();
            $this->mailer->ClearAttachments();

            // Exibe uma mensagem de resultado
            if($enviado){
                return true;
                //echo "E-mail enviado com sucesso!";
            }else{
                return false;
//                echo "Não foi possível enviar o e-mail. ";
//                echo "Informações do erro: " . $this->mailer->ErrorInfo;
            }
            
        }
        
    }
    
?>