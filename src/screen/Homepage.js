import React  from "react";
import Pizza from "../component/Pizza";
import pizzas from '../pizzasdata';

export default function Homescreen() {
    return(
        <div>
            <div className="row">
                {pizzas.map(pizza=>{
                   return <div className="col-md-4 p-3">
                       <div >
                           <Pizza pizza={pizza}/>
                           </div>
                           </div>
                })}
            </div>
        </div>
    )
}