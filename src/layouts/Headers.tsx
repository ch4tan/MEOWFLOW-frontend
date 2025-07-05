import { useContext,useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import AppContext from "../services/AppContext";

const Headers = () => {
    const { activeTab, setActiveTab } = useContext(AppContext);
    const location:string = useLocation().pathname.toString();

    useEffect(() => {
        if(location === "/encode") setActiveTab("/encode");
        else if(location === "/decode") setActiveTab("/decode");
        else setActiveTab("/");
    }, []);
  
    return(
        <header className="flex w-full h-12 md:h-16 md:text-2xl bg-[#B13026] text-[#EBE3F5] justify-center items-center font-bitcount">
            <nav className="flex flex-row gap-12 2xl:gap-20">
                <NavLink onClick={() => setActiveTab("/")} to="/" 
                        className={`cursor-pointer text-[#FEFEFF] hover:scale-125 hover:text-[#EBE3F5] 
                                    ${activeTab === "/" && "scale-125 text-[#EA925E] font-bold"}`}>
                            Accueil
                </NavLink>
                <NavLink onClick={() =>setActiveTab("/encode")} to="/encode"
                        className={`cursor-pointer text-[#FEFEFF] hover:scale-125 hover:text-[#EBE3F5] 
                                    ${activeTab === "/encode" && "scale-125 text-[#EA925E] font-bold"}`}>
                            Encoder
                </NavLink>
                <NavLink onClick={() =>setActiveTab("/decode")} to="/decode"
                        className={`cursor-pointer text-[#FEFEFF] hover:scale-125 hover:text-[#EBE3F5] 
                                    ${activeTab === "/decode" && "scale-125 text-[#EA925E] font-bold"}`}>
                            Décoder
                </NavLink>
            </nav>
        </header>
    );
};

export default Headers;