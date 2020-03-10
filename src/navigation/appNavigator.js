import React, { memo, useMemo } from 'react';
import { withTranslation } from 'react-i18next';
import { RootNavigator } from './navigation';

const AppNavigation = ({ t, i18next }) => {

  const Navigator = useMemo(() => {
    return RootNavigator();
  }, []);
  return (
    <Navigator
      screenProps={{
        t, i18next,
      }}
    />
  );
};


export default memo(withTranslation()(AppNavigation));