import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import { DescriptionTextItem } from './DescriptionTextItem';

export function MealItem({ itemData }) {
  const { title, imageUrl, complexity, duration, affordability } =
    itemData.item;

  return (
    <Pressable
      style={({ pressed }) => [styles.mealItem, pressed && { opacity: 0.5 }]}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.details}>
        <DescriptionTextItem>
          Duration: {duration} {duration > 1 ? 'minutes' : 'minute'}
        </DescriptionTextItem>
        <DescriptionTextItem>
          Complexity: {complexity.toUpperCase()}
        </DescriptionTextItem>
        <DescriptionTextItem>
          Affordability: {affordability.toUpperCase()}
        </DescriptionTextItem>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    gap: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    marginTop: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
