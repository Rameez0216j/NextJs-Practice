import React from "react";
import LineChart from "./LineChart";
import BarChart from "./components/BarChart";
import ComponentsChart from "@/components/ComponentsChart";


const LocalComponent = () =>{
    return(
        <div>Local Component</div>
    )
}

const DashBoard = () => {
    return(
        <div>
            <div>DashBoard</div>
            <LineChart />
            <BarChart />
            <LocalComponent/>
            <ComponentsChart/>
        </div>
    )
};

export default DashBoard;
