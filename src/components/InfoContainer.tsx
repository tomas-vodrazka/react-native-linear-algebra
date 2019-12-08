import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "@tensorflow/tfjs-react-native";

import { LinearSystemSolverType } from "../linearAlgebra/types";
import { InfoControlsView } from "./InfoControlsView";
import { InfoResultView } from "./InfoResultView";
import { testSolver } from "./InfoContainerService";

interface InfoContainerState {
  times: number[];
  correlations: number[];
  msErrors: number[];
  isRunning: boolean;
  numberOfRows: string;
  solverType: LinearSystemSolverType;
  errorMessage?: string;
}

export class InfoContainer extends React.Component<{}, InfoContainerState> {
  state = {
    times: [],
    correlations: [],
    msErrors: [],
    isRunning: false,
    numberOfRows: "100",
    solverType: LinearSystemSolverType.NUMERIC,
    errorMessage: null
  };

  handleStartClick = async () => {
    this.setState({
      times: [],
      correlations: [],
      msErrors: [],
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

    setTimeout(() => {
      testSolver({
        rows,
        cols: 16,
        runs: 1,
        solverType: this.state.solverType
      }).then(({ correlations, times, msErrors }) => {
        this.setState({
          correlations,
          times,
          msErrors,
          isRunning: false
        });
      });
    });
  };

  handleNumberOfRowsChange = (numberOfRows: string) => {
    this.setState({
      numberOfRows
    });
  };

  handleSolverTypeChange = (solverType: LinearSystemSolverType.NUMERIC) => {
    this.setState({
      solverType
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.results}>
          <InfoResultView
            errorMessage={this.state.errorMessage}
            times={this.state.times}
            correlations={this.state.correlations}
            msErrors={this.state.msErrors}
          />
        </View>
        <View style={styles.controls}>
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
    justifyContent: "flex-end",
    padding: 10
  },
  results: {
    marginBottom: 50,
    width: "100%"
  },
  controls: {
    width: "100%"
  }
});
