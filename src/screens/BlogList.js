import React from 'react'
import {View, Text, Image, FlatList} from 'react-native'

import {styles} from '../styles/Styles.js'

const BlogList = ({route, navigation}) => {
  const {blogs} = route.params,
    {container, blogContainer, textBlack, imageStyle} = styles

  // render each blog post
  const renderItem = ({item}) => {
    const {blogTexts, blogImages} = item
    return (
      <View style={blogContainer}>
        <Text style={textBlack}>{blogTexts}</Text>
        <Image style={imageStyle} source={{uri: blogImages}} />
      </View>
    )
  }

  return (
    <View style={container}>
      {/* blog List */}
      <FlatList data={blogs} renderItem={renderItem} />
    </View>
  )
}

export default BlogList
