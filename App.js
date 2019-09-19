import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const baseUrl = 'http://127.0.0.1:8000';

export default () => {
  const [data, setData] = useState(null);

  const fetchAndSaveData = async () => {
    const fetcher = await fetch(`${baseUrl}/v1/launches`);
    const fetchedData = await fetcher.json();

    return setData(fetchedData.data);
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
          }),
        );

  const renderItem = ({ item }) => (
    <Text style={{ margin: 10 }}>{item.missionName}</Text>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 75 }}>
        {data === null ? (
          <Text>loading</Text>
        ) : (
          <FlatList data={flatListData} renderItem={renderItem} />
        )}
      </View>
    </ScrollView>
  );
};
