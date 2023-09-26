import navValues from "@/helpers/navValues";
import HouseList from "@/components/HouseList";
import House from "@/components/house";

const ComponentPicker = ({navigationValue}) => {
    switch (navigationValue) {
        case navValues.home:
            return <HouseList/>;
        case navValues.house:
            return <House />;
        default:
            return (
              <h3>No navigation component to render for this selection {navigationValue}</h3>
            );
    }
}

export default ComponentPicker;