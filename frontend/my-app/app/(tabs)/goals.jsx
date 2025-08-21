import { Text, View } from "react-native";
import styles from '../styles';

export default function Goalas() {
  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text>
          Set your goals here and determine goal progress.
        </Text>
      </View>
    </View>
  );
}
