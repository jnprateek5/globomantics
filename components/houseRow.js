import currencyFormatter from "@/helpers/currencyFormatter";
import {memo, useContext} from "react";
import {navigationContext} from "@/components/App";
import navValues from "@/helpers/navValues";
const HouseRow = ({house}) =>{
    const {navigate} = useContext(navigationContext);
    return (
        <tr onClick={() => navigate(navValues.house, house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price
            && <td className={`${house.price>=500000?"text-primary" :""}`}>{currencyFormatter.format(house.price)}</td>}
        </tr>
    )
};

const HouseRowMem = memo(HouseRow);

export default HouseRow;
export {HouseRowMem};