import { useEffect, useState } from 'react';
import axios from 'axios';
import Mail from './model';

export interface MailsState {
  mails: Mail[];
  pending: boolean;
  error: Error | null;
}

export function useMails(limit: number = 50): MailsState {
  const [mails, setMails] = useState<MailsState>({
    mails: [],
    pending: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://iroco.herokuapp.com/mails`, {
          params: {
            limit,
          },
        });

        setMails({
          mails: data,
          pending: false,
          error: null,
        });
      } catch (error) {
        setMails((prevState: MailsState) => ({
          ...prevState,
          pending: false,
          error,
        }));
      }
    })();
  }, [limit]);

  return mails;
}

export interface MailState {
  mail: Mail | null;
  pending: boolean;
  error: Error | null;
}

export function useMail(id: string): MailState {
  const [mail, setMail] = useState<MailState>({
    mail: null,
    pending: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://iroco.herokuapp.com/mails/${id}`,
        );

        setMail({
          mail: data,
          pending: false,
          error: null,
        });
      } catch (error) {
        setMail((prevState: MailState) => ({
          ...prevState,
          pending: false,
          error,
        }));
      }
    })();
  }, []);

  return mail;
}
