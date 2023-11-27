import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css'

function Landing() {
    function manClick () {
        console.log("manClick");
        window.location.href = "/man";
        }
    function workClick () {
        console.log("workClick");
        window.location.href = "/work";
        }
    function callClick () {
        console.log("callClick");
        window.location.href = "/call";
        }

    return (
        <>
        <div class='landing'>

            <div class='intro'>
                <h1>Matthew Shuman</h1>
                <img src="../assets/images/matt1.jpg" alt="Matthew Shuman" height='250px' width='200px'/>
                <p>{"{webDeveloper}"};</p>

            </div>
            <div onClick={manClick} class='man'>
                <h2>The Man...</h2>
                <img src="../assets/images/man.png" alt="stick figure man" height='50px' width='50px'/>
            </div>
            <div onClick={workClick} class='man'>
                <h2>The Works...</h2>
            </div>
            <div onclick={callClick} class='man'>
                <h2>The Call...</h2>
            </div>
        </div>
        </>
    );
}


export default Landing;