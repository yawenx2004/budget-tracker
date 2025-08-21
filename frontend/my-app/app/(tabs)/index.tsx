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

      // error if no amount & no reason
      if (isNaN(numAmount)) {
        Alert.alert("Error", "Please enter a valid amount");
        return;
      }
      if (!reason) {
        Alert.alert("Error", "Please enter a reason for spending");
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
        Alert.alert("Success", "Entry added for spending");
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
      <Pressable 
        style={({ pressed }) => [
          styles.buttonHovering,
          pressed && styles.pressed
        ]}
      >
        <Text style={styles.textBig}>+</Text>
      </Pressable>

      <View style={styles.sectionMain}>
        <TextInput
          style={styles.textInputCta}
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
          placeholderTextColor='#b6bed3ff'
          keyboardType="numeric"
        />

        <TextInput
          style={styles.textInput}
          value={reason}
          onChangeText={setReason}
          placeholder="coffee, bus tickets, bribe money..."
          placeholderTextColor='#74809eff'
        />

        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed
          ]} 
          onPress={submitSpending}
        >
          <Text style={styles.textBold}>Submit</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Balances & goals shown here.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Spending pie charts shown here.</Text>
      </View>
    </View>
  );
}
