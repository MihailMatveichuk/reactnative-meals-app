import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealOverViewScreen } from './screens/MealOverViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#311333' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#352333' },
          }}
        >
          <Stack.Screen
            name="CategoriesMeals"
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen
            name="MealOverView"
            component={MealOverViewScreen}
            options={({ route }) => {
              const categoryId = route.params.mealId;

              return {
                title: categoryId,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
