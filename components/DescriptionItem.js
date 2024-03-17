import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export function DescriptionItem({ data }) {
  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Ingrediences:</Text>
        <FlatList
          data={data.ingredients}
          renderItem={({ item, index }) => (
            <Text>
              {index + 1}
              {'. '}
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Steps:</Text>
        <FlatList
          data={data.steps}
          renderItem={({ item, index }) => (
            <Text>
              {index + 1}
              {'. '}
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
});
