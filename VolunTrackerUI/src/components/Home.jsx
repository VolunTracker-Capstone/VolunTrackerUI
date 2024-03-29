import React from 'react';
import {Button} from 'react-bootstrap';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={'home'}>
            <div className={'homeRows'}>
                <div className={'column'}>
                    <FaRegQuestionCircle size={150} style={{fill: '#e27602'}}/>
                    <p className={'iconTitles'}>FAQ</p>
                </div>
                <div className={'column'}>
                    <IoIosPeople size={150} style={{fill: '#e27602'}}/>
                    <p className={'iconTitles'}>Why VolunTracker?</p>
                </div>
                <div className={'column'} style={{position: "relative", top: "40px"}}>
                    <FaLocationDot size={110} style={{fill: '#e27602'}}/>
                    <p className={'iconTitles'}>Get Started</p>
                </div>

            </div>
            <div className={'homeRows'}>
                <div className={'column2'}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus.</p>
                </div>
                <div className={'column2'}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus.</p>
                </div>
                <div className={'column2'}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus.</p>
                </div>
            </div>
            <div className={'homeRows'}>
                <div className={'column'}>
                    <Link to="" className={'button'}>FAQ</Link>
                </div>
                <div className={'column'}>
                    <Link to="about" className={'button'}>VolunTracker</Link>
                </div>
                <div className={'column'}>
                    <Link to="create-account" className={'button'}>Join Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;