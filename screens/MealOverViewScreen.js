import { View, Text, StyleSheet, FlatList } from 'react-native';

import { MealItem } from '../components';
import { MEALS } from '../data/dymmy-data';

export function MealOverViewScreen({ route }) {
  const categoryId = route.params.mealId;

  const selectedMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return <MealItem itemData={itemData} />;
  };

  return (
    <View style={[styles.screen, { backgroundColor: '#fffff0' }]}>
      <FlatList
        data={selectedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
