import { api_key, endpoint } from "../Keys/Keys";
import axios from "axios";
type getDog = {
  limit: number;
  page: number;
  pesquisa: string;
  setEndPage: React.Dispatch<React.SetStateAction<never[]>>;
  setDogs: React.Dispatch<React.SetStateAction<never[]>>;
};
const getDogs = async ({
  limit,
  page,
  pesquisa,
  setEndPage,
  setDogs,
}: getDog) => {
  try {
    const res = await axios.get(`${endpoint}`, {
      headers: {
        "x-api-key": api_key,
      },
    });
    const data = res.data;
    setEndPage(data);
    if (pesquisa === "") {
      const res = await axios.get(`${endpoint}?limit=${limit}&page=${page}`, {
        headers: {
          "x-api-key": api_key,
        },
      });

      const data = res.data;
      setDogs(data);
    } else {
      const res = await axios.get(`${endpoint}/search?name=${pesquisa}`, {
        headers: {
          "x-api-key": api_key,
        },
      });

      const data = res.data;
      setDogs(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getDogs;
