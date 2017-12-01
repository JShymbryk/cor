import React from 'react';
import { Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';


import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AskTheRabbi from '../screens/AskTheRabbi';
import KosherLists from '../screens/KosherLists';
import More from '../screens/More';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Restaurants: {
      screen: LinksScreen,
    },
    AskTheRabbi: {
      screen: AskTheRabbi,
    },
    KosherLists: {
      screen: KosherLists,
    },
    KosherLists: {
      screen: KosherLists,
    },
    More: {
      screen: More,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Restaurants':
            iconName =  Platform.OS === 'ios'
              ? `ios-restaurant${focused ? '' : '-outline'}`
              : 'md-restaurant';
            break;
          case 'AskTheRabbi':
          iconName =  Platform.OS === 'ios'
            ? `ios-chatboxes${focused ? '' : '-outline'}`
            : 'md-chatboxes';
            break;
            case 'KosherLists':
            iconName =  Platform.OS === 'ios'
              ? `ios-list-box${focused ? '' : '-outline'}`
              : 'md-list-box';
              break;
              case 'More':
              iconName =  Platform.OS === 'ios'
                ? `ios-more${focused ? '' : '-outline'}`
                : 'md-more';
                break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
