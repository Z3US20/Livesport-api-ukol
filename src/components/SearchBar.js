import React,{useState} from "react";
import "../scss/App.scss"
import Icon from "../img/cancel.svg"


function Searchbar(props){

    const [wordEntered, setWordEntered] = useState("");
    const { onSearch } = props;

    const handleInput = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        onSearch(searchWord);
    };

    const clearInput = () => {
        setWordEntered("");
        onSearch("")
    };

    return (
        <div>
            <div className="control">
                <input
                className="input"
                onChange={handleInput}
                value={wordEntered}
                type="text"
                placeholder="Zadejte hledaný text"
                />
                {wordEntered.length === 0 ? (false) : (
                <img src={Icon} alt="img" className="clear-btn" onClick={clearInput}/> 
                )}                      
            </div>
                {wordEntered.length < 3  ? (
                <div className="info-text">Zadejte alespoň 3 znaky</div>
                ) : (false)
                }
        </div>
    )
}   


export default Searchbar;
