import React from 'react';
import { View, Text, StyleSheet } from "react-native"
import { createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  MyOrders,
  RestaurantCategories,
  RestaurantProducts,
  BarCategories,
  BarProducts,
  HookahCategories,
  HookahProducts,
} from '../../screens';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BLACK_40, BLACK } from '../../utils/colors';
import { SFUITEXT_MEDIUM } from '../../utils/fonts';
import HomeIcon from '../../../assets/icons/home.svg';
import HomeFocusedIcon from '../../../assets/icons/home_focused.svg';
import RestaurantIcon from '../../../assets/icons/restaurant.svg';
import RestaurantFocusedIcon from '../../../assets/icons/restaurant_focused.svg';
import BarIcon from '../../../assets/icons/bar.svg';
import BarFocusedIcon from '../../../assets/icons/bar_focused.svg';
import HookahIcon from '../../../assets/icons/hookah.svg';
import HookahFocusedIcon from '../../../assets/icons/hookah_focused.svg';
import ShapeIcon from '../../../assets/icons/shape.svg';
import ShapeFocusedIcon from '../../../assets/icons/shape_focused.svg';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  { headerMode: 'none' }
);

const RestaurantStack = createStackNavigator(
  {
    Restaurant: RestaurantCategories,
    Menu: RestaurantProducts,
  },
  { headerMode: 'none' }
);

const BarStack = createStackNavigator(
  {
    Bar: BarCategories,
    Menu: BarProducts,
  },
  { headerMode: 'none' }
);

const HookahStack = createStackNavigator(
  {
    Hookah: HookahCategories,
    Menu: HookahProducts,
  },
  { headerMode: 'none' }
);

const MyOrdersStack = createStackNavigator(
  {
    MyOrders: MyOrders,
  },
  { headerMode: 'none' }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Restaurant: {
      screen: RestaurantStack,
    },
    Bar: {
      screen: BarStack,
    },
    Hookah: {
      screen: HookahStack,
    },
    MyOrders: {
      screen: MyOrdersStack,
    }
  },
  {
    defaultNavigationOptions: ({ navigation, screenProps: { t } }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        return tabItem(t, focused, routeName);
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      showLabel: false,
      style: {
        height: 45,
        justifyContent: 'center',
        alignItem: 'center',
      }
    }

  }
);

AppNavigator.navigationOptions = ({ navigation, screenProps: { t } }) => ({
  tabBarIcon: ({ focused }) => {
    const { routeName } = navigation.state;
    return tabItem(t, focused, routeName);
  },
});

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 150,
  },
  tabLabelFocused: {
    fontSize: 15,
    fontFamily: SFUITEXT_MEDIUM,
    color: BLACK,
  },
  tabLabel: {
    fontSize: 15,
    fontFamily: SFUITEXT_MEDIUM,
    color: BLACK_40,
  }
});

const tabItem = (t, focused, routeName) => {
  const Icon = () => {
    switch (routeName) {
      case 'Home':
        return focused ? <HomeFocusedIcon /> : <HomeIcon />;
      case 'Restaurant':
        return focused ? <RestaurantFocusedIcon /> : <RestaurantIcon />;
      case 'Bar':
        return focused ? <BarFocusedIcon /> : <BarIcon />;
      case 'Hookah':
        return focused ? <HookahFocusedIcon /> : <HookahIcon />;
      case 'MyOrders':
        return focused ? <ShapeFocusedIcon /> : <ShapeIcon />;
    }
  };
  const label = () => {
    switch (routeName) {
      case 'Home':
        return t('HOME');
      case 'Restaurant':
        return t('RESTAURANT');
      case 'Bar':
        return t('BAR');
      case 'Hookah':
        return t('HOOKAH');
      case 'MyOrders':
        return t('MY_ORDER');
    }
  };
  return (
    <View style={styles.tabItem}>
      <Icon />
      <Text style={focused ? styles.tabLabelFocused : styles.tabLabel}>{label()}</Text>
    </View>
  );
};

export const RootNavigator = () => createAppContainer(AppNavigator);