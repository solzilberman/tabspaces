import React, { useState } from 'react';
import { TextField, Button, IconButton, Card } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './App.css';
import Tab from './components/Tab'
import logo from './components/logo.png'

function App() {
  const [currSpace, setCurrSpace] = useState("")
  const [spaces, setSpaces] = useState(
    JSON.parse(localStorage.getItem('spaces')) || {}
  );
  const handleSubmit = (e) => {
    e.preventDefault()
    var tempArr = spaces;
    tempArr[currSpace] = []
    localStorage.setItem('spaces', JSON.stringify(tempArr))
    setSpaces(() => JSON.parse(localStorage.getItem('spaces')))
    setCurrSpace("")
    console.log(spaces)
  }


  return (
    <div className="App">
      <div style={{ width: '100%' }}>
        <div className="header">
          <div>
            <img width="100" height="100" src={logo} />
          </div>
          <div>
            <h2 style={{ margin: '5px' }}><b>TabEnv</b></h2>
          </div>
          <div className="new-env">
            <div style={{ display: 'flex' }}>
              <div className="input-env">
                <TextField id="outlined-basic" label="New TabSpace" variant="outlined" value={currSpace}
                  onInput={e => setCurrSpace(e.target.value)} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                <IconButton aria-label="add an alarm" onClick={handleSubmit}>
                  <AddCircleIcon color="white" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className="tab-header">
        <h3 style={{ margin: '20px' }}>My Environments</h3>
      </Card>

      <div className="tab-container">
        {Object.keys(spaces).map((space) => <div>
          <Tab name={space} spaces={spaces} setSpaces={setSpaces} />
        </div>)}
      </div>
    </div>
  );
}

export default App;
