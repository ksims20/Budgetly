import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

const Testing = () => {
  const backendUrl = 'http://192.168.1.156:8080/api/expenses';

  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);

  // Helper to format date as "MM/DD/YYYY - h:mm AM/PM"
  const formatDate = (dateString) => {
  const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', ' -');
};

  const fetchExpenses = () => {
    fetch(backendUrl)
      .then(res => res.json())
      .then(data => setExpenses(data))
      .catch(err => console.error('Failed to fetch expenses:', err));
  };

 const addExpense = () => {
  const newExpense = {
    category,
    amount: parseFloat(amount),
    description,
    date: new Date().toISOString(), // ISO string for backend
    type: "EXPENSE"
  };

    fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExpense)
    })
      .then(async res => {
        const text = await res.text();
        console.log('POST response:', res.status, text);
        if (res.ok) {
          Alert.alert('Success', 'Expense added!');
          setCategory('');
          setAmount('');
          setDescription('');
          fetchExpenses();
        } else {
          Alert.alert('Error', `Failed to add expense: ${res.status}`);
        }
      })
      .catch(err => {
        console.error('Error posting expense:', err);
        Alert.alert('Error', 'Network error');
      });
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Test Expense POST</Text>

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Expense" onPress={addExpense} />

      <Text style={styles.heading}>Expenses:</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.category} - ${item.amount} - {item.description} - {formatDate(item.date)}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginVertical: 5, padding: 10, borderRadius: 5 },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 }
});

export default Testing;
