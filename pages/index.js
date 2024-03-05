import { useState } from "react";
import axios from "axios";
import Input from "../components/input";

export default function Home({ symbols }) {
  const [convertFrom, setConvertFrom] = useState("AED");
  const [convertTo, setConvertTo] = useState("AED");
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  // FETCH
  const convertCurrency = () => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/api/convert",
      params: { convertFrom, convertTo, amount },
    };

    axios.request(options).then(function (response) {
        const { data } = response;
        setConvertedAmount((data.result));
        setError(null); // Clear any previous errors
      }).catch(function (error) {
        console.error(error);
        setError('An error occurred during conversion.'); // Set an error message
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-junge font-bold text-primary text-6xl md:text-3xl pt-20 pb-6">
        Currency <span className="text-secondary">Converter</span>
      </h1>
      <h2 className="font-junge font-bold text-primary text-2xl md:text-base mb-16">
        Powered by RapidAPI
      </h2>
      <div className="flex flex-col justify-between w-3/6 md:w-5/6 text-lg md:text-sm">
        <Input
          label="From:"
          dropdown={true}
          onChange={setConvertFrom}
          symbols={symbols}
        />
        <Input
          label="To:"
          dropdown={true}
          onChange={setConvertTo}
          symbols={symbols}
        />
        <Input
          label="Amount:"
          dropdown={false}
          onChange={setAmount}
          symbols={{}}
        />
        </div>
        <div className="flex flex-col items-end w-3/6 md:w-5/6 text-lg md:text-sm">
        <button
          className="bg-secondary text-lg md:text-sm w-2/5 py-2 rounded-lg uppercase font-quicksand font-bold transition duration-300 hover:shadow-custom"
          onClick={convertCurrency}
        >
          Convert
        </button>
        {convertedAmount && (
          <div className="flex flex-col items-end w-3/5 md:w-full text-primary my-6">
            <p className="font-quicksand font-bold text-lg md:text-sm uppercase tracking-wider">
              Converted Amount:{" "}
              <span className="text-secondary">{`${convertedAmount} ${convertTo}`}</span>
            </p>
          </div>
        )}
        </div>

      <div className="flex justify-center items-end h-52 md:h-44">
        <p className="text-primary text-base md:text-xs font-junge font-bold pb-12 md:w-60 md:text-center">
          © Created and developed by {" "}
          <a className="underline" href="https://rumeysagelgi.com/" target="_blank">
            Rumeysa Gelgi
          </a>
          {" "} | 2024
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    "http://localhost:3000/api/symbol"
  );
  const { data } = res;
  const { symbols } = data;

  if (!symbols) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      symbols,
    },
  };
}
