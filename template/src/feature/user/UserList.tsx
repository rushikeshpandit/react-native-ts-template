import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from '../../container/user/Slice';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const UserList = (props: any) => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.userSlice.userList);

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    dispatch(getUserList(null));
  }, []);

  useEffect(() => {
    if (userList.length > 0) {
      setDataSource(userList);
    }
  }, [userList]);

  const Item = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>
          {item.item.item.name.title +
            ' ' +
            item.item.item.name.first +
            ' ' +
            item.item.item.name.last}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {dataSource && dataSource.length > 0 ? (
        <FlatList
          data={dataSource}
          renderItem={(item: any) => <Item item={item} />}
          keyExtractor={(item: any) => item.login.uuid}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#000',
  },
  item: {
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#fff',
  },
});

export default UserList;
