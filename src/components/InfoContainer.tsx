import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

import { LinearSystemSolverType } from "../linearAlgebra/types";
import { InfoControlsView } from "./InfoControlsView";
import { InfoResultView } from "./InfoResultView";

interface InfoContainerState {
  results: number[];
  isReady: boolean;
  isRunning: boolean;
  numberOfRows: string;
  solverType: LinearSystemSolverType;
  errorMessage?: string;
}

export class InfoContainer extends React.Component<{}, InfoContainerState> {
  state = {
    results: [],
    isReady: false,
    isRunning: false,
    numberOfRows: "100",
    solverType: LinearSystemSolverType.NUMERIC,
    errorMessage: null
  };

  componentDidMount() {
    this.initTensorFlow();
  }

  initTensorFlow = async () => {
    await tf.ready();
    this.setState({
      isReady: true
    });
  };

  handleStartClick = () => {
    this.setState({
      isRunning: true,
      errorMessage: null
    });

    const rows = parseInt(this.state.numberOfRows);
    if (!rows) {
      this.setState({
        isRunning: false,
        errorMessage: "number of rows must be an integer"
      });
      return;
    }
  };

  handleNumberOfRowsChange = (numberOfRows: string) => {
    this.setState({
      numberOfRows
    });
  };

  handleSolverTypeChange = (solverType: LinearSystemSolverType.NUMERIC) => {
    this.setState({
      solverType,
      results: []
    });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View>
          <InfoResultView
            errorMessage={this.state.errorMessage}
            results={this.state.results}
          />
        </View>
        <View style={styles.results}>
          <InfoControlsView
            onStartClick={this.handleStartClick}
            solverType={this.state.solverType}
            numberOfRows={this.state.numberOfRows}
            isStartDisabled={this.state.isRunning}
            onNumberOfRowsChange={this.handleNumberOfRowsChange}
            onSolverTypeChange={this.handleSolverTypeChange}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10
  },
  results: {
    marginBottom: 20,
    width: "100%"
  },
  controls: {
    flexDirection: "row"
  }
});
