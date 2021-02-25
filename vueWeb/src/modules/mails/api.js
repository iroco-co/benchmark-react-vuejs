import axios from "axios";

export async function fetchMails(limit = 50) {
  const { data } = await axios.get("https://iroco.herokuapp.com/mails", {
    params: {
      limit,
    },
  });

  return data;
}

export async function fetchMail(id) {
  const { data } = await axios.get(`https://iroco.herokuapp.com/mails/${id}`);

  return data;
}
