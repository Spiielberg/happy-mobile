import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateOrphanage from './pages/CreateOrphanage';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanagesMap from './pages/OrphanagesMap';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen name='OrphanageDetails' component={OrphanageDetails} />
        <Screen name='CreateOrphanage' component={CreateOrphanage} />
      </Navigator>
    </NavigationContainer>
  );
}
