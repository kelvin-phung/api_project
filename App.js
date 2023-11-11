import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Button, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [request, setRequest] = useState('');
  const [data, setData] = useState(null); // Initialize data as null

  const fetchData = async () => {
    console.log("Making GET Request");
    try {
      // GET Request
      const response = await axios.get(request);
      console.log(response);
      setData(response.data);
    } catch (error) {
      // Handle any errors
      console.error('Failed to fetch data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, marginBottom: 10 }}
        placeholder="Type something!"
        onChangeText={newText => setRequest(newText)}
      />

      <Button
        title="Request"
        onPress={fetchData}
      />

      {data && (
        <ScrollView style={styles.resultContainer}>
          <Text style={styles.resultText}>{JSON.stringify(data, null, 2)}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '80%',
    maxHeight: 200,
    overflow: 'scroll',
  },
  resultText: {
    fontSize: 16,
  },
});
