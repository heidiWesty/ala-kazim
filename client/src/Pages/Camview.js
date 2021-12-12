import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router-dom';
import './styles.css';


<h1>Video Feed</h1>

const Cam = () => {

    const history = useHistory();

    return (
        <div className="camera-feed">
            <img
                src="http://localhost:5000/video_feed"
                alt="Video"
            />
            <div>
                <button>
                    <HomeIcon className="svg_icons" onClick={() => history.push("admin")}> </HomeIcon>
                </button>
            </div>
        </div >
    );
};
export default Cam;