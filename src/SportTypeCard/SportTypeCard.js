import React, { Component } from "react"
import "./SportTypeCard.css"
import bicycle from "../assest/bicycle.jpeg"

var dataCards = [{ img: bicycle, title: "bicycle" }]
class SportTypeCard extends Component {
    render() {
        return (<div className="card-menu">
            <div className="card-top-section">
            <div>
                <img src={dataCards[0].img} alt="bicycle"/>
                </div>
                <div className="card-name">
                <p>{dataCards[0].title}</p>

            </div>
            </div>
           
            <div className="card-top-section">
                <img src={dataCards[0].img} alt="bicycle"/>
                <div className="card-name">
                <p>{dataCards[0].title}</p>
                        </div>
            </div>
           
        </div>)
    }
}

export default SportTypeCard