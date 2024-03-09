import { CategoryGridTile } from '../../components';

export const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile color={itemData.item.color} title={itemData.item.title} />
  );
};
