import React from "react";
import { Text } from "react-native";
import { mean, std, round } from "mathjs";

interface InfoResultViewProps {
  results: number[];
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

  if (props.results.length === 0) {
    return <Text>Waiting for results</Text>;
  }

  return (
    <>
      <Text>Runs: {props.results.length}</Text>
      <Text>Avg: {round(mean(props.results), 2)}</Text>
      <Text>Std: {round(std(props.results), 2)}</Text>
      <Text>Results(ms): {props.results.join(", ")}</Text>
    </>
  );
};
