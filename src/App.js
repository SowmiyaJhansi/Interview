import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
  
const App = () => {
  
  const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/word_here').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].word_here)
      }
      setMyOptions(myOptions)
    })
  }
  
  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Word Dictionary</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}
  
export default App


