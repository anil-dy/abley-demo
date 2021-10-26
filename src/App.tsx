import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from '@esri/react-arcgis';
import ReactArcGIS, { WebMap } from '../src/ts/index'
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

// AAPK1c354a66a4644b35b997ca1532479ca6ETfSZtX5oBO5tSf1q6rwQV01QJZW32kXK5R_gr93jZr3Rjr-XXtvJ_ZcPXhLHRPI

function App() {
  return (
    <div className="App">
      <Map style={{ width: '100vw', height: '100vh' }}
        className="full-screen-map"
        viewProperties={{
          constraints: { snapToZoom: false },
          center: [-2.4443, 17.2529],
          zoom: 2
        }} />
      {/* <ReactArcGIS.WebMap id={'1'} mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
          center: [-122.4443, 47.2529],
          zoom: 6
        }} /> */}
      {/* <WebMap id={'2'} mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
          center: [-122.4443, 47.2529],
          zoom: 6
        }} /> */}
    </div>
  );
}

export default App;
