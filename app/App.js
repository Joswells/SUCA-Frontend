import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Axios from 'axios';

export default class App extends Component {
  state = {
    barcodes: [],
  }

  barcodeRecognized = ({ barcodes }) => {
    Axios.post(`10.11.84.136:3333/Funcionario/${barcodes}/entradaSaida`, {})
    .then(Response => {
      console.log(response.data)
    })
    this.setState({ barcodes })
  };

  renderBarcodes = () => (
    <View>
      {this.state.barcodes.map(this.renderBarcode)}
    </View>
  );

  renderBarcode = ({ bounds, data }) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 10,
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}
      >
        <Text style={{
          color: '#F00',
          flex: 1,
          position: 'absolute',
          textAlign: 'center',
          backgroundColor: 'transparent',
        }}>{data}</Text>
      </View>
    </React.Fragment>
  );
  
  render() {
    return (
      <RNCamera
        ref={ref => { this.camera = ref; }}

        style={{
          flex: 1,
          width: '100%',
        }}
        onGoogleVisionBarcodesDetected={this.barcodeRecognized}
      >
        {this.renderBarcodes()}
      </RNCamera>
    );
  }
}