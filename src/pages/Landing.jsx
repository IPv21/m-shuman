import React from 'react';
import { Link } from 'react-router-dom';
import '../components/style.css'

function Landing() {
    return (
        <>
        <div class='landing'>

            <div class='intro'>
                <h1>Allow Myself to Introduce Myself...</h1>
            </div>
            <div class='man'>
                <h2>The Man...</h2>
            </div>
            <div class='man'>
                <h2>The Works...</h2>
            </div>
            <div class='man'>
                <h2>What You Need</h2>
            </div>
        </div>
        </>
    );
}

export default Landing;