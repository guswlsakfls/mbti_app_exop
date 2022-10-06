import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
      source={{ uri: 'https://mbti-face.shop' }} style={{marginTop: 30}}
    />
  );
}