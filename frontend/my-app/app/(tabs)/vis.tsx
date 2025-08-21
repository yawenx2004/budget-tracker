import { Text, View } from "react-native";
import styles from '../styles';

export default function Vis() {
  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text>
          Edit vis.tsx to edit this screen. This page
          hosts graphs to visualize income & spendings.
        </Text>
      </View>
    </View>
  );
}
