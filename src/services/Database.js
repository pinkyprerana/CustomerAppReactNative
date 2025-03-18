import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'customerDB.db', location: 'default' },
  () => {},
  error => console.log('DB Error:', error),
);

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Customers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, mobile TEXT, email TEXT, address TEXT, latitude REAL, longitude REAL, geoAddress TEXT, image TEXT);',
      [],
      () => console.log('Table created successfully'),
      error => console.log('Table creation error:', error),
    );
  });
};

export const insertCustomer = (customer, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Customers (name, mobile, email, address, latitude, longitude, geoAddress, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
      [
        customer.name,
        customer.mobile,
        customer.email,
        customer.address,
        customer.latitude,
        customer.longitude,
        customer.geoAddress,
        customer.image,
      ],
      (_, result) => callback(result),
      error => console.log('Insert error:', error),
    );
  });
};

export const getCustomers = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Customers;',
      [],
      (_, { rows }) => callback(rows.raw()),
      error => console.log('Fetch error:', error),
    );
  });
};
