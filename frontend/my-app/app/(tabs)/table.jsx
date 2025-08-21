import { Text, View } from "react-native";
import styles from '../styles';

export default function Table() {
  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text>
          This page hosts tables of past spendings, with options to edit 
          and rate purchase satisfaction.
        </Text>
      </View>
    </View>
  );
}
