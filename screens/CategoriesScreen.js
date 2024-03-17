import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dymmy-data';
import { CategoryGridTile } from '../components';

export function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealOverView', {
        mealId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
