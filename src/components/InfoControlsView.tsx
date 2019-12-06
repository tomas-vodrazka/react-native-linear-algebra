import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  Picker
} from "react-native";

import { LinearSystemSolverType } from "../linearAlgebra/types";

interface InfoControlsViewProps {
  onStartClick: () => void;
  isStartDisabled: boolean;
  onNumberOfRowsChange: (numberOfSeconds: string) => void;
  numberOfRows: string;
  onSolverTypeChange: (solverType: LinearSystemSolverType) => void;
  solverType: string;
}

export const InfoControlsView: React.FC<InfoControlsViewProps> = props => {
  return (
    <View>
      <View style={styles.controlGroup}>
        <Text>Number of rows</Text>
        <TextInput
          onChangeText={props.onNumberOfRowsChange}
          value={props.numberOfRows}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.controlGroup}>
        <Text>Solver type</Text>
        <Picker
          selectedValue={props.solverType}
          style={{ height: 50, width: "100%" }}
          onValueChange={props.onSolverTypeChange}
        >
          <Picker.Item
            label="numeric.js"
            value={LinearSystemSolverType.NUMERIC}
          />
          <Picker.Item
            label="TensorFlow"
            value={LinearSystemSolverType.TENSOR_FLOW}
          />
        </Picker>
      </View>
      <View>
        <Button
          onPress={props.onStartClick}
          title="Start"
          disabled={props.isStartDisabled}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlGroup: {
    marginBottom: 20
  }
});
