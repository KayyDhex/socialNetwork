import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { DataContext } from '@/context/dataContext/DataContext';
import DetailScreen from '@/components/section/DetailScreen';

export default function page() {

  const { id } = useLocalSearchParams<{ id: string }>();
  const { state: { myPosts } } = useContext(DataContext);

  const [currentPost, setCurrentPost] = useState(undefined as any);

  useEffect(() => {
    setCurrentPost(myPosts.find((item: any) => item.id == id));
  }, [myPosts]);

  return (
    !currentPost ? <View /> : <DetailScreen currentPost={currentPost} />
  )
}