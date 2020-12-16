interface IEmailTo {
  name: string,
  email: string
}

interface IMailMessage {
  subject: string,
  body: string,
  attachment?: Array<string> // ou string[]
}

interface IMessageDTO {
  to: IEmailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendEmail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendEmail({to, message }: IMessageDTO) {
    console.log(`Email enviado com sucesso para ${to.name}`);
  }
} 

export default EmailService;
