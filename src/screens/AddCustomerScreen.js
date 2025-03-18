import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { insertCustomer } from '../services/Database';

const AddCustomerScreen = ({ navigation }) => {
  const [customer, setCustomer] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    latitude: '',
    longitude: '',
    geoAddress: '',
    image: '',
  });

  const handleSave = () => {
    insertCustomer(customer, () => {
      navigation.goBack();
    });
  };

  return (
    <View>
      <TextInput placeholder="Full Name" onChangeText={text => setCustomer({ ...customer, name: text })} />
      <TextInput placeholder="Mobile No" onChangeText={text => setCustomer({ ...customer, mobile: text })} />
      <Button title="Save Customer" onPress={handleSave} />
    </View>
  );
};

export default AddCustomerScreen;
