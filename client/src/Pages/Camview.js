import React, { useState } from "react";


<h1>Video Feed</h1>

const Cam = () => {
    return (
        <div className="camera-feed">
            <img
                src="http://localhost:5000/video_feed"
                alt="Video"
            />
        </div>
    );
};
export default Cam;