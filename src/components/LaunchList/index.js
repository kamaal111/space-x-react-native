import React from 'react';
import { Text, FlatList, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import Launch from './Launch';

import styles from './styles';
import { allLaunches as allLaunchesQueries } from '../../queries/launches';

export default function LaunchList({ navigation }) {
  const { loading, error, data: queryData } = useQuery(allLaunchesQueries);

  if (loading)
    return (
      <>
        <Text>Loading...</Text>
      </>
    );

  if (error)
    return (
      <>
        <Text>Oops something went wrong 😢</Text>
      </>
    );

  const flatListData = queryData.allLaunches.map(
    (
      {
        flightNumber,
        missionName,
        details,
        launchDateUnix,
        launchSite,
        launchSuccess,
        links,
        rocket,
        upcoming,
        staticFireDateUnix,
      },
      index,
    ) => ({
      flightNumber,
      missionName,
      details,
      launchDateUnix,
      launchSite,
      launchSuccess,
      links,
      rocket,
      upcoming,
      staticFireDateUnix,
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
      details={item.details}
      launchDateUnix={item.launchDateUnix}
      launchSite={item.launchSite}
      siteNameLong={item.siteNameLong}
      launchSuccess={item.launchSuccess}
      launchYear={item.launchYear}
      links={item.links}
      rocket={item.rocket}
      upcoming={item.upcoming}
      staticFireDateUnix={item.staticFireDateUnix}
      navigate={navigation.navigate}
      styles={launchStyles}
    />
  );

  return (
    <ScrollView>
      <FlatList data={flatListData} renderItem={renderItem} />
    </ScrollView>
  );
}
