import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);

  const takePicture = async () => {
    if(camera) {
        const data = await camera.takePictureAsync(null);
        setImage(data.uri);
    }
  }


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.cameraContainer}>
            <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} ratio={'1:1'} type={type} />
        </View>

        {image && <Image source={{uri: image}} style={{flex: 1}}/>}

        <Button title="Take Picture" onPress={() => takePicture()}/>

        <TouchableOpacity
        style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
            setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
        }}>
            <Text style={{fontSize: 18, marginBottom: 10, color: 'black'}}> Flip Image</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }
})