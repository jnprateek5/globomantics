import HouseRow, {HouseRowMem, HouseRowMemo} from "@/components/houseRow";
import {useEffect, useState} from "react";
import useHouses from "@/hooks/useHouses";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "@/components/loadingIndicator";

const houseList = ({selectHouse}) =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {houses, setHouses, loadingState} = useHouses();

    if (loadingState!==loadingStatus.loaded){
        return <LoadingIndicator loadingState={loadingState}/>
    }
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id : 5,
                address : "01A, new hamp site, Queensland",
                country : "AUS" ,
                price : 365000
            }
        ]);
    };

    return(
      <>
        <div className= "row mb-2">
            <h5 className="themeFontColor text-center">
                Houses currently on the market
            </h5>
        </div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Asking Price</th>
                </tr>
            </thead>
            <tbody>
            {houses.map(h=>  <HouseRow key = {h.id} house={h} selectHouse = {selectHouse}/> )}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>
            Add
        </button>
      </>
    );
};


export default houseList;