import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from '../styles';

export default function Index() {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  const submitSpending = async() => {
    try {
      
    } catch (error) {

    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text>Date:</Text>
        <TextInput
          value={date}
          onChangeText={setDate}
          placeholder="MM-DD-YYYY"
        />

        <Text>Reason:</Text>
        <TextInput
          value={reason}
          onChangeText={setReason}
        />

        <Text>Amount:</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.section}>
        <Text>Edit index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
