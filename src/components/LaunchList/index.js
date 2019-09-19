import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { get } from 'superagent';

import Launch from './Launch';

import { baseUrl } from '../../../config';

export default function LaunchList() {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchAndSaveData = async () => {
    try {
      const { body } = await get(`${baseUrl}/v1/launches`);
      return setData(body.data);
    } catch (error) {
      return setErrors(error);
    }
  };

  useEffect(() => {
    fetchAndSaveData();
  }, []);

  const flatListData =
    data === null
      ? []
      : data.map(
          ({ flight_number: flightNumber, mission_name: missionName }) => ({
            key: String(flightNumber),
            missionName,
            flightNumber,
          }),
        );

  const renderItem = ({ item }) => (
    <Launch missionName={item.missionName} flightNumber={item.flightNumber} />
  );

  return (
    <ScrollView>
      <View>
        {errors === null ? <></> : <Text>{errors}</Text>}
        {data === null ? (
          <Text>loading</Text>
        ) : (
          <FlatList data={flatListData} renderItem={renderItem} />
        )}
      </View>
    </ScrollView>
  );
}
