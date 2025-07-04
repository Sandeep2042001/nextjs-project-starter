import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen({ navigation }) {
  const user = auth().currentUser;

  const signOut = () => {
    auth()
      .signOut()
      .then(() => navigation.replace('Login'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Phone Number:</Text>
      <Text style={styles.value}>{user ? user.phoneNumber : 'N/A'}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 18, marginTop: 10 },
  value: { fontSize: 16, color: '#555', marginBottom: 20 },
});
