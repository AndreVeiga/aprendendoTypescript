import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [
  { name: 'Elton Veiga', email: 'soutomachado1@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendEmail({
      to: { name: 'Tiago Henrique', email: 'tiagohenrique@gmail.com'},
      message:  { subject: 'Bem Vindo ao Sistema', body: 'Bem vindo ao time'}
    });

    return res.send();
  }
};