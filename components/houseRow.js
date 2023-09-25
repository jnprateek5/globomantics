import currencyFormatter from "@/helpers/currencyFormatter";
import {memo} from "react";
const HouseRow = ({house, selectHouse}) =>{
    return (
        <tr onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td className={`${house.price>=500000?"text-primary" :""}`}>{currencyFormatter.format(house.price)}</td>
        </tr>
    )
};

const HouseRowMem = memo(HouseRow);

export default HouseRow;
export {HouseRowMem};