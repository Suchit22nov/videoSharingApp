import { Paper, Typography } from "@mui/material";
import React from "react";

export const VideoDetails=({video:{id:{videoId},snippet:{title,channelTitle,description}}})=>{
//    Todo spinner when the data is not loaded

// console.log(video);
console.log(title);



const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    return(
        <>
            <Paper elevation={6} style={{height:"70%"}}>
                <iframe frameBorder="0"
                height="100%"
                width="100%"
                title="video Player"
                src ={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding:"15px"}}>
                <Typography variant="h4">
                    {title}-{channelTitle}
                </Typography>
                <Typography variant="subtile1">
                    {channelTitle}
                </Typography>
                <Typography variant="subtile2">
                    {description}
                </Typography>
             </Paper>
        </>
    )
}

