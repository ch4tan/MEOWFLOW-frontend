const Home = () => {
    return (
        <div className="flex flex-col h-full w-full text-center justify-between items-center bg-[#EA925E] border-b-2 border-t-2 text-white gap-2 md:gap-0">
            <div className="flex flex-col justify-center items-center w-80 gap-3 md:gap-0 md:w-full pt-10">
                <h1 className="font-bitcount md:text-5xl md:pt-10">MEOWFLOW B64 RECURSIVE ENCODER/DECODER</h1>
                <h2 className="flex md:text-xl font-playfair md:w-[50rem] md:pt-5 font-bold">
                    MEOWFLOW est un outil pour encoder et décoder récursivement en base64.
                </h2>
            </div>
            <div className="flex h-full items-center">
                <img src="/catan.jpg" alt="ch4tan" className="rounded-full w-52 h-52 md:w-80 md:h-80 shadow-xl shadow-white md:hover:scale-105 md:hover:opacity-90 " />
            </div>
        </div>   
    );
};

export default Home;
