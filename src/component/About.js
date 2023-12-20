import React from "react";
import 오도리공원 from '../img/오도리공원.jpg'
import 시로이 from '../img/시로이코이비토 파크.jpg'
import 오타루 from '../img/오타루운하.jpg'


function About(){

    return(
        <div>
            <h2>About Page</h2>
            <img src = {오도리공원} />
            <img src = {시로이} />
            <img src = {오타루} />
        </div>
    )
}

export default About;