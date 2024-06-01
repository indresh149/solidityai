/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OrderScreen from './src/screens/OrderScreen';
import WalletScreen from './src/screens/WalletScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ClothesScreen from './src/screens/Clothes';
import ShoesScreen from './src/screens/Shoes';
import BagsScreen from './src/screens/Bags';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/home.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#FC6C85' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/shopping_bag.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#FC6C85' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/package_2.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#FC6C85' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/account_balance_wallet.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#FC6C85' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/account_circle.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#FC6C85' : 'gray',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#53C1BA',
          headerStyle: {backgroundColor: Colors.primary500},

          contentStyle: {backgroundColor: Colors.primary100},
        }}>
        <Stack.Screen
          name="DrawerScreen"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTintColor: '#53C1BA',
          }}
        />
        <Stack.Screen
          name="Clothes"
          component={ClothesScreen}
          options={{
            headerShown: true,
            headerTintColor: '#53C1BA',
          }}
        />
        <Stack.Screen
          name="Shoes"
          component={ShoesScreen}
          options={{
            headerShown: true,
            headerTintColor: '#53C1BA',
          }}
        />
        <Stack.Screen
          name="Bags"
          component={BagsScreen}
          options={{
            headerShown: true,
            headerTintColor: '#53C1BA',
          }}
        />
      </Stack.Navigator>
    );
  }

  function Navigation() {
    return (
      <NavigationContainer>
        <AuthenticatedStack />
      </NavigationContainer>
    );
  }

  function Root() {
    return <Navigation />;
  }

  return (
    <>
      <Root />
    </>
  );
}

export default App;
