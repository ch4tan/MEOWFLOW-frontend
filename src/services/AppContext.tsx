import { createContext } from "react";

type AppContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const AppContext = createContext<AppContextType>({
    activeTab: "",
    setActiveTab: () => {},
});

export default AppContext;