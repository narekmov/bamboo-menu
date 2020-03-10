import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Header, Order } from '../components';
import { useTranslation } from 'react-i18next';
import { BLACK_43 } from '../utils/colors';

const MyOrders = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.wrapper}>
      <Header title={t('MY ORDERS')} />
      <Image
        style={styles.image}
        source={require('../../assets/images/orderBackground.png')}
        blurRadius={25}
        resizeMode="cover"
      />
      <View style={styles.background}>
        <View style={styles.orderContainer}>
          <Order />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    top: 45,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BLACK_43,
    zIndex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderContainer: {
    minWidth: 420,
    minHeight: 270,
    width: '37%',
    height: '34%',
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default MyOrders
