import { Grid } from "@mui/material";
import React from 'react';
import VideoItem from "./VideoItem";

function VideoList({videos,onVideoSelect}) {
    const listOfVidoes = videos.map(video=>(<VideoItem onVideoSelect = {onVideoSelect} key={video.id.videoId} video={video}></VideoItem>))
    return(
        <><Grid container spacing={10}>
            {listOfVidoes}
        </Grid>
        
        </>
    )
}
export default VideoList;