import styles from "./banner.module.css"
import {navigationContext} from "@/components/App";
import {useContext} from "react";
import navValues from "@/helpers/navValues";
const Banner = ({children}) => {
    const {navigate} = useContext(navigationContext);
    return (
        <header className = "row mb-4">
            <div className = "col-5">
                <img src= "./GloboLogo.png" alt="logo" className={styles.logo}
                onClick={() => navigate(navValues.home)}/>
            </div>
            <div className = "col-7 mt-5" style={{fontStyle: "italic", font: "caption"}}>
                {children}
            </div>
        </header>
    );
};
export default Banner;