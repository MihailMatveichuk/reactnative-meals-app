import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dymmy-data';
import { renderCategoryItem } from './lib/renderCategoryItem';

export function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
