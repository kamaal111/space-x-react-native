import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import Launch from './Launch';

import styles from './styles';
import { allLaunches as allLaunchesQueries } from '../../queries/launches';

export default function LaunchList() {
  const { loading, error, data: queryData } = useQuery(allLaunchesQueries);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Oops something went wrong 😢</Text>;

  const flatListData = queryData.allLaunches.map(
    ({ flightNumber, missionName }, index) => ({
      flightNumber,
      missionName,
      key: String(index),
    }),
  );

  const launchStyles = {
    launchContainer: styles.launchContainer,
    launchText: styles.launchText,
  };

  const renderItem = ({ item }) => (
    <Launch
      flightNumber={item.flightNumber}
      missionName={item.missionName}
      styles={launchStyles}
    />
  );

  return (
    <ScrollView>
      <View>
        <FlatList data={flatListData} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
}
