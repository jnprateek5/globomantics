import Banner from "@/components/Banner";
import HouseList from "@/components/HouseList";
import House from "@/components/house";
import {useCallback, useState} from "react";


const App = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = useCallback((house) =>{
        setSelectedHouse(house);
    },[]);
    return(
        <>
            <Banner>
                <div>Providing good houses to the world!!</div>
            </Banner>
            { selectedHouse ? (<House house = {selectedHouse}/>) :
                (<HouseList selectHouse = {setSelectedHouse}/>)
            }
        </>
    );
};
export default App;