import { useState } from "react";
import { Text, TextInput, View, Pressable, Alert } from "react-native";
import styles from '../styles';

export default function Index() {
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  const submitSpending = async () => {
    try {
      // set date to today
      const today = new Date().toISOString().slice(0, 10);
      const numAmount = parseFloat(amount);

      // error if no reason & no amount
      if (!reason) {
        Alert.alert("Error", "Please enter a reason");
        return;
      }
      if (isNaN(numAmount)) {
        Alert.alert("Error", "Please enter a valid amount");
        return;
      }

      // post to server
      const response = await fetch("https://budget-tracker-5hqr.onrender.com/spending", {
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
        <TextInput
          style={[styles.textInput, styles.textInputCta]}
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
          placeholderTextColor='#677599ff'
          keyboardType="numeric"
        />

        <TextInput
          style={styles.textInput}
          value={reason}
          onChangeText={setReason}
          placeholder="Purpose: coffee, bus tickets, bribe money..."
          placeholderTextColor='#677599ff'
        />

        <Pressable style={styles.button} onPress={submitSpending}>
          <Text style={styles.textBold}>Submit</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Edit index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
