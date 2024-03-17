import React from 'react';
import { Text } from 'react-native';

export function DescriptionTextItem({ children }) {
  return <Text style={{ fontStyle: 'italic' }}>{children}</Text>;
}
