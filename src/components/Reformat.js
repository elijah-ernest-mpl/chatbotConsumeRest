import React, { useEffect, useState } from "react";
import "./widgetStyle.css";

const Reformat = (props) => {

    const url = "https://localhost:7078/api/Reformats";

    const [arr, setData] = useState([

        useEffect(() => {
            fetchInfo();
        }, [])

    ]);

    const fetchInfo = () => {
        return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }


    const [index, setIndex] = useState(0);

    function addElement() {
        if (index < arr.length) {
            setIndex(index + 1);
        }
    }

    const menuHandler = () => {
        props.actionProvider.menuHndlr(event.target.value);
    };


    function getElements(arr, index) {
        return arr.slice(0, index).map((el) => {
            return <div className="para-item" key={el.id}>{el.steps} <br/>
            <button onClick={menuHandler} className="btnback">Back to Menu</button>
            <button onClick={addElement} className="btnNext">Next</button>
            </div>
            
            ;            
        });
    }
   
    return (
        <div>
            <button onClick={addElement} className="widget-button">Click to see Procedure</button>
            {getElements(arr, index)}
        </div>
        
    );

};

export default Reformat;