import Banner from "@/components/Banner";
import React, { useCallback, useState} from "react";
import navValues from "@/helpers/navValues";
import ComponentPicker from "@/components/ComponentPicker";

const navigationContext = React.createContext(navValues.home);
const App = () => {

    const navigate = useCallback(
        (navTo, param) => setNav({current : navTo, param, navigate}),[]
    );

    const [nav, setNav] = useState({ current : navValues.home, navigate});
    return(
    <navigationContext.Provider value = {nav}>
        <Banner>
            <div>Providing good houses to the world!!</div>
        </Banner>
        <ComponentPicker navigationValue = {nav.current}/>
    </navigationContext.Provider>

    );
};
export default App;
export { navigationContext };
