import React from "react";
import { View, Text } from "react-native";

import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

interface InfoContainerState {
  isReady: boolean;
}

export class InfoContainer extends React.Component<{}, InfoContainerState> {
  state = {
    isReady: false
  };

  componentDidMount() {
    this.initTensorFlow();
  }

  initTensorFlow = async () => {
    await tf.ready();
    this.setState({
      isReady: true
    });

    const a = tf.tensor([
      [1, 2],
      [3, 4]
    ]);
    console.log("shape:", a.shape);
  };

  render() {
    if (!this.state.isReady) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Ready</Text>
      </View>
    );
  }
}
