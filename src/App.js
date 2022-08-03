import './App.css';
import { Grid } from "@mui/material";
import SearchBar from './components/SearchBar';
import youtube  from "./api/youtube"
import { useState } from 'react';
import { VideoDetails } from './components/VideoDetails';
import  VideoList  from './components/VideoList';

function App() {
  const [videos,setVideos]=useState([]);
  const[selectedVideo,setSelectedVideo] = useState([]);
  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
             <VideoDetails video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  async function handleSubmit(searchTerm) {
    const {data:{items:videos}}=await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCMbVuuv6hGTgwD2PQ1nVwqmA0KkES_tqw",
        q: searchTerm,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
