import React from 'react';
import { Button } from '@mui/material';

import './App.css';
import Slider from '@mui/material/Slider';

function App() {
  return (
    <div className="App">
      <div>
        <Button variant="contained">Hello World</Button>
        <button
          type="button"
          className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        >
          ...
        </button>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-teal-600" />
      </div>
    </div>
  );
}

export default App;
