import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols",
      headers: {
        "x-rapidapi-host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY
      },
    };

    axios.request(options).then(function (response) {
        res.status(200).json(response.data);
      }).catch(function (error) {
        console.error(error);
      });

  } else {
    res.status(400);
  };
};
