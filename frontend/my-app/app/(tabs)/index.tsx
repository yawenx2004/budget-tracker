import { Text, View } from "react-native";
import styles from '../styles';

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text>This is where you enter spending or income.</Text>
      </View>

      <View style={styles.section}>
        <Text>Edit index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
