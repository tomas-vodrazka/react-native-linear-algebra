import React from "react";
import { Text } from "react-native";
import { mean, std, round } from "mathjs";

interface InfoResultViewProps {
  times: number[];
  correlations: number[];
  errorMessage?: string;
}

export const InfoResultView: React.FC<InfoResultViewProps> = props => {
  if (props.errorMessage) {
    return (
      <Text style={{ textAlign: "center", color: "red" }}>
        Error: {props.errorMessage}
      </Text>
    );
  }

  if (props.times.length === 0) {
    return <Text>Waiting for results</Text>;
  }

  return (
    <>
      <Text>Runs: {props.times.length}</Text>
      <Text>Avg: {round(mean(props.times), 2)}</Text>
      <Text>Std: {round(std(props.times), 2)}</Text>
      <Text>Times(ms): {props.times.join(", ")}</Text>
      <Text>Correlations: {props.correlations.join(", ")}</Text>
    </>
  );
};
