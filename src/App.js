import './App.css';
import {Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid style={{justifyContent:"center"}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* <SearchBar onSubmit ={handleSubmit}/> */}
            </Grid>
            <Grid item xs={8}>
              {/* <VideoDetail video={selectedVideo} /> */}
            </Grid>
            <Grid item xs={4}>
            {/* <VideoList videos={videos} onVideoSelect={setSelectedVideo} /> */}
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// async function handleSubmit(){
// }

export default App;
