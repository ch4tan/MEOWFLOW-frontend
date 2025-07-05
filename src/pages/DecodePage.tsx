import { useState } from "react";
import DOMPurify from "dompurify";

const DecodePage = () => {
    const [pattern, setPattern] = useState("");
    const [rounds, setRounds] = useState("");
    const [error, setError] = useState("");
    const [resServ, setResServ] = useState("");
    const [copy, setCopy] = useState("");

    const triggerDecode = async (): Promise<void> => {
        try {
            setError("");
            setCopy("");

            if(rounds.length === 0 || parseInt(rounds) > 20 || parseInt(rounds) < 1) throw new Error("Veuillez choisir un chiffre entre 1 et 20");
            if(pattern.length === 0) throw new Error("Veuillez renseigner le code b64.");

            type optionsType = {
                method: string,
                headers: {"Content-Type": string;},
                body: string;
            };

            const options: optionsType = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    pattern,
                    rounds
                })
            };

            const res: Response = await fetch("http://localhost:3000/api/decode", options);
            const data = await res.json();

            if(res.status !== 200) throw new Error("error server");

            setResServ(data.data);
        }
        catch(e: unknown) {
            if(e instanceof Error){
                if(e.message === "Veuillez choisir un chiffre entre 1 et 20") setError("Veuillez choisir un chiffre entre 1 et 20");
                else if(e.message === "Veuillez renseigner le code b64.") setError("Veuillez renseigner le code b64.");
                else setError("Erreur serveur, veuillez réessayer.");
            }
        }
    };

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(resServ);
            setCopy("Copie réussie");
        }
        catch {
            setCopy("Echec de la copie");
        }
    };

    return (
        <div className="flex flex-col h-full w-full items-center bg-[#EA925E] font-playfair border-b-2 border-t-2 text-white">
            <h1 className="font-bitcount pt-10 text-4xl md:text-7xl text-[#EBE3F5]">Décoder</h1>
            <p className="absolute pt-20 md:pt-28 text-xl text-red-700">{error}</p>
            <div className="grid maxmd:grid-rows-2 md:grid-cols-2 w-full h-full">
                <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                    <div className="flex flex-row gap-10 justify-center items-center">
                        <label htmlFor="Nombre de tours">Nombre de tours:</label>
                        <select onChange={(e) => setRounds(e.target.value)} 
                            value={rounds} name="Nombre de tours" 
                            className="w-10 rounded-3xl justify-center items-center text-center outline-none text-black">
                                <option className="justify-center items-center"></option>
                                {[...Array(20).keys()].map(x => {
                                    return(<option key={x+1} value={x+1} className="justify-center items-center">{x+1}</option>);
                                })}
                        </select>
                    </div>
                    <textarea 
                        className="flex resize-none rounded-2xl w-80 h-20 md:w-96 md:h-80 text-center outline-none focus:scale-105 focus:shadow-md focus:shadow-black text-black"
                        onChange={(e) => setPattern(DOMPurify.sanitize(e.target.value) as string)}
                    />
                    <button onClick={triggerDecode} className="bg-[#B13026] w-20 md:h-8 rounded-3xl md:hover:scale-125 md:hover:shadow-md md:hover:shadow-black">DECODE</button>
                </div>
                <div className="flex flex-col w-full h-full justify-center items-center gap-5 md:pt-11">
                    <textarea 
                        className="flex resize-none rounded-2xl w-80 h-20 md:w-96 md:h-80 text-center outline-none focus:scale-105 focus:shadow-md focus:shadow-black bg-white text-black"
                        disabled
                        value={DOMPurify.sanitize(resServ) as string}
                    />
                    <button onClick={handleCopy} className="bg-[#B13026] w-20 md:h-8 rounded-3xl md:hover:scale-125 md:hover:shadow-md md:hover:shadow-black">COPY</button>
                    <p className="absolute text-red-700 translate-y-12 translate-x-24 md:translate-y-36 md:translate-x-32">{copy.length > 0 && copy}</p>
                </div>
            </div>
        </div>
    );
};

export default DecodePage;
