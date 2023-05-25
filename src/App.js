import React from 'react'
import './App.css'
import FileDrop from './components/FileDrop'
function App() {

    return (
      <div className=' p-20'>
        <h1 className='text-2xl py-10'>Upload XML files</h1>
        <p className='py-5'>Choose the size of the field you would like to convert to. <br></br>
        Upload an XML file and then click download once complete</p>
        <p>Future installments will implement an interactive Heatmap and a scoring table to update the scores</p>
        <p>Default values for field size are set for AC Milan</p>
        <FileDrop />
      </div>
    );
  }

export default App;

