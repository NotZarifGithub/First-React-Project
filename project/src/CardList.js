import React from "react";
import Card from "./Card";

const CardList = ({tools}) => {
    const cardComponents = tools.map((user, i) =>{
        return (<Card 
            key={i} 
            id={tools[i].id} 
            name={tools[i].name} 
            link={tools[i].link}/>);
    })
    return (
        <div>
            {cardComponents }          
        </div>
    );
}

export default CardList;
