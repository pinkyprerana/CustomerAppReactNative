/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomers } from '../redux/slices/CustomerSlice';
import { getCustomers } from '../services/Database';
import AppButton from '../components/buttons/AppButton';
import css from '../themes/css';

const CustomerListScreen = ({ navigation }) => {
  const customers = useSelector(state => state.customer.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    getCustomers(data => dispatch(setCustomers(data)));
  }, [dispatch]);

  const openMap = (lat, long) => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`);
  };

  return (
    <View style={[css.ml4, css.mr4]}>
      <FlatList
        data={customers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style= {[css.rowBetween]}>
            <Image source={{ uri: item.image === '' ? 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png' : item.image }} style={{ width: 50, height: 50 }} />
            <Text>{item.name}</Text>
            <Text>{item.mobile}</Text>
            <Text>{item.email}</Text>
            <Text>{item.geoAddress}</Text>
            <TouchableOpacity onPress={() => openMap(item.latitude, item.longitude)}>
              <Text>📍 Open in Maps</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={[css.mb0]}>
               <AppButton title={'Add Customer'} onPress={() => navigation.navigate('AddCustomer')}/>
      </View>

    </View>
  );
};

export default CustomerListScreen;
