import React from "react";
import nopic from "../img/No-Profile.png"
import "../scss/App.scss"

export default function Item(props) {

    const {item} = props

    if (item.teams == null){
        <div className="container-item">
        <div className="grid"  key={item}>
            <div className="start-picture">
                <img src={nopic} alt={item.name}/>
            </div> 
            <div className="left-side">
                <h4 className="name"> {item.name}</h4>
                <small className="sport-name">{item.sport.name}</small>
            </div>
            <div className="type-name">
                {item.type.name.slice(0,10)}
            </div>
            <div className="favourite">
                <input className="native-hidden" type="checkbox" />
            </div>
        </div>                          
        </div>   
    }

    if (item.images[1] === undefined&& item.teams !== null){
        const teams = item.teams.filter(team => team.kind === "TEAM");
        const teamName = teams.map(t => t.name)
        return (
            <div className="container-item">
                <div className="grid"  key={item}>
                    <div className="start-picture">
                        <img src={nopic} alt={item.name}/>
                    </div> 
                    <div className="left-side">
                        <h4 className="name"> {item.name}</h4>
                        <small className="sport-name">{item.sport.name}, {teamName}</small>
                    </div>
                    <div className="default-country">
                        {item.defaultCountry.name}
                    </div>
                    <div className="favourite">
                        <input className="native-hidden" type="checkbox" /> 
                    </div>
                </div>                          
            </div> 
        );
    }

    if (item.type.name === "Team" &&item.images[1] !== undefined){
        const url = "https://www.livesport.cz/res/image/data/"
        const imageID = item.images[1].path;
        const img = url + imageID; 
        return(
        <div className="container-item">
        <div className="grid">
            <div className="start-picture">
            <img src={img} alt={item.name}/> 
            </div> 
            <div className="left-side">
                <h4 className="name"> {item.name}</h4>
                <small className="sport-name">{item.sport.name}</small>
            </div>
            <div className="default-country">
                {item.defaultCountry.name}
            </div>
            <div className="favourite">
                <input className="native-hidden" type="checkbox" /> 
            </div>
        </div>                          
        </div>  
        )
        
    }

    if (item.type.name === "Player" || item.type.name === "PlayerInTeam"){
        const url = "https://www.livesport.cz/res/image/data/"
        const imageID = item.images[1||0].path;
        const img = url + imageID;
        const teams = item.teams.filter(team => team.kind === "TEAM");
        const teamName = teams.map(t => t.name)

        return (
            <div className="container-item">
                <div className="grid"  key={item}>
                    <div className="start-picture">
                        <img src={img} alt={item.name}/>
                    </div> 
                    <div className="left-side">
                        <h4 className="name"> {item.name}</h4>
                        <small className="sport-name">{item.sport.name}, {teamName}</small>
                    </div>
                    <div className="default-country">
                        {item.defaultCountry.name}
                    </div>
                    <div className="favourite">
                        <input className="native-hidden" type="checkbox" /> 
                    </div>
                </div>                          
            </div> 
        );
    } 

    if (item.type.name === "TournamentTemplate"){
        return(
        <div className="container-item">
        <div className="grid"  key={item}>
            <div className="start-picture">
                <img src={"https://www.livesport.cz/res/image/data/"+item.images[0].path} alt={item.name}/>
            </div> 
            <div className="left-side">
                <h4 className="name"> {item.name}</h4>
                <small className="sport-name">{item.sport.name}</small>
            </div>
            <div className="type-name">
                {item.type.name.slice(0,10)}
            </div>
            <div className="favourite">
                <input className="native-hidden" type="checkbox" />
            </div>
        </div>                          
        </div>  
        )
    }

    return (
        <div className="container-item">
            <div className="grid"  key={item}>
                <div className="start-picture">
                    <img src={nopic} alt={item.name}/>
                </div> 
                <div className="left-side">
                    <h4 className="name"> {item.name}</h4>
                    <small className="sport-name">{item.sport.name}</small>
                </div>
                <div className="default-country">
                    {item.defaultCountry.name}
                </div>
                <div className="favourite">
                    <input className="native-hidden" type="checkbox" /> 
                </div>
            </div>                          
        </div>
    );
}