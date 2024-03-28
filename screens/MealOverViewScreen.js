import { View, StyleSheet, FlatList } from 'react-native';

import { MealItem } from '../components';
import { MEALS, CATEGORIES } from '../data/dymmy-data';
import { useLayoutEffect } from 'react';

export function MealOverViewScreen({ route, navigation }) {
  const categoryId = route.params.mealId;

  const selectedMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find(
      (category) => category.id === categoryId
    );

    navigation.setOptions({
      title: selectedCategory.title,
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: selectedCategory.color },
      headerTintColor: '#000',
      contentStyle: {
        backgroundColor: selectedCategory.color,
      },
    });
  }, [categoryId, navigation]);

  const renderMealItem = (itemData) => {
    return <MealItem itemData={itemData} />;
  };

  return (
    <View style={[styles.screen]}>
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
