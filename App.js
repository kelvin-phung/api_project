import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const BASE_URL = "https://swapi.dev/api/";
  const [request, setRequest] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    console.log("Making GET Request");
    try {
      // GET Request with the concatenated URL
      const response = await axios.get(BASE_URL + request.toLowerCase());
      console.log(response);
      setData(response.data);
    } catch (error) {
      // Handle any errors
      console.error('Failed to fetch data: ', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            <Text style={styles.resultText}>Name: {data.name}</Text>
            <Text style={styles.resultText}>Birth Year: {data.birth_year}</Text>
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
  },
});


