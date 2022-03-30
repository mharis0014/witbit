import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

import {styles} from '../styles/Styles.js'

const BlogSubmission = ({navigation}) => {
  const {container, blogContainer, textBlack, imageStyle, button, textBold} =
      styles,
    {navigate} = navigation

  const [text, onChangeText] = useState('') // blog Text
  const [image, setImage] = useState() // blog Image
  const [blogData, setBlogData] = useState([]) // blog Data

  // on Add button click
  const onSubmit = () => {
    setBlogData([...blogData, {blogImages: image, blogTexts: text}])
    setImage(null)
    onChangeText('')
  }

  // on pick image
  const ChooseImage = () => {
    ImagePicker.openPicker({
      width: 420,
      height: 300,
      cropping: true,
    })
      .then(i => setImage(i.path))
      .catch(e => console.log(e))
  }
  // image path for blog image
  const src = image ? {uri: image} : require('../assets/imagePlaceholder.png')

  // on continue to next screen
  const onNavigate = () => navigate('Blog List', {blogs: blogData})

  return (
    <View style={container}>
      <View style={blogContainer}>
        <TextInput
          style={textBlack}
          placeholder="Write your blog here"
          multiline={true}
          placeholderTextColor={'#888'}
          value={text}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={ChooseImage}>
          <Image style={imageStyle} source={src} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onSubmit} style={button}>
        <Text style={textBold}>Add New</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNavigate} style={button}>
        <Text style={textBold}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlogSubmission
