import React, { useState } from 'react';
import {Paper,TextField } from "@mui/material"

function SearchBar() {
    const [first, setfirst] = useState(second);
  return (
    <>
<Paper elevation={6} style={{padding:"25px"}}>
    <TextField fullWidth
    label="Search..."
    value={searchTerm}/>
</Paper>
    </>
  )
}

export default SearchBar