import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CropPriceTable = () => {
  // Sample data for crop prices
  const tableData = [
    ['Crops', 'Previous Year Price', 'Current Year Price', 'Kg'],
    ['Wheat', '5600', '7000', '100'],
    ['Rice Basmati Super (New)', '14695', '29400', '100'],
    ['Rice Basmati Super (Old)', '15695', '32400', '100'],
    ['Cotton', '7500-10000', '8500-10000', '40'],
    ['Sugar Cane', '290', '302', '40'],
    ['Maize', '1975', '2040', '100'],
    ['Barley', '9000', '10000', '100'],
    ['Sorghum', '120-485', '137-565', '1'],
    ['Millet (Bajra)', '5300', '9200', '100'],
    ['Oil Seeds', '3500', '3900' , '40'],
    ['Tobacco', '373', '425', '1'],
    ['Peanut', '520', '600', '1'],
    ['Watermelon', '35', '45', '1'],
    // Add more rows for other crops
  ];

  return (
    <View style={styles.container}>
      {tableData.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowData.map((cellData, cellIndex) => (
            <Text
              key={cellIndex}
              style={[
                styles.cell,
                {
                  fontWeight:
                    rowIndex === 0 || cellIndex === 0 ? 'bold' : 'normal',
                },
              ]}
            >
              {cellData}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#c8e1ff' },
  cell: {
    flex: 1,
    padding: 6,
    textAlign: 'center',
  },
});

export default CropPriceTable;
