import { FlatList, Text } from 'react-native';

export function IngrediensList({ ingredients }) {
  const renderIngredientItem = (ingredientItem) => {
    return <Text>{ingredientItem}</Text>;
  };

  return (
    <FlatList
      data={ingredients}
      keyExtractor={(item, index) => index}
      renderItem={renderIngredientItem}
    />
  );
}
