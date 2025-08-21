import { useState } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";
import styles from '../styles';

export default function Index() {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  const submitSpending = async () => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const numAmount = parseFloat(amount);

      if (!reason) {
        Alert.alert("Error", "Please enter a reason");
        return;
      }
      if (isNaN(numAmount)) {
        Alert.alert("Error", "Please enter a valid amount");
        return;
      }

      const response = await fetch("http://127.0.0.1:5000/spending", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: today,
          reason,
          amount: numAmount,
        }),
      });

      const data = await response.json();
      console.log("Submitting spending...", { reason, amount: numAmount });

      if (response.ok) {
        Alert.alert("Success", `Inserted ID: ${data.inserted_id}`);
        setReason("");
        setAmount("");
      } else {
        Alert.alert("Error", data.error);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", String(error));
      }
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.section}>
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

        <Button
          title="Add spending"
          onPress={submitSpending}
        />
      </View>

      <View style={styles.section}>
        <Text>Edit index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
