import React, { useRef } from "react"
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, Dimensions, Animated } from "react-native"
import FormHeader from "./app/components/FormHeader"
import FormSelectorBtn from "./app/components/FormSelectorBtn"
import LoginForm from "./app/components/LoginForm"
import SignupForm from "./app/components/SignupForm"

const {width} = Dimensions.get('window')

export default function App  () {
  const animation = useRef(new Animated.Value(0)).current;

  const scrollView = useRef()

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0]
  })

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40]
  })

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20]
  })

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)']
  })

  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
  })



  return (
    <View style={{flex:1,paddingTop: 120}}>
      <View style={{height:80 }}>
       <FormHeader leftHeading='Welcome' 
       rightHeading='Back' 
       subHeading='Company Task'
        rightHeaderOpacity={rightHeaderOpacity}
        leftHeaderTranslateX={leftHeaderTranslateX}
        rightHeaderTranslateY={rightHeaderTranslateY}
       />
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20}}>
        <FormSelectorBtn style={styles.borderLeft} backgroundColor ={loginColorInterpolate}
        title='Login'
          onPress={()=> scrollView.current.scrollTo({x: 0})}
        />
        <FormSelectorBtn style={styles.borderRight} backgroundColor={signupColorInterpolate} title='Sign up'
          onPress={()=> scrollView.current.scrollTo({x: width})}
        />
      </View>
      <ScrollView 
       ref = {scrollView}
       horizontal 
       pagingEnabled 
       showsHorizontalScrollIndicator={false}
       scrollEventThrottle={16}
       onScroll={Animated.event([{nativeEvent: {contentOffset: {x: animation}}}, 
      ],{useNativeDriver: false})}
      >
      
       <LoginForm/>
       <ScrollView >
        <SignupForm/>
       </ScrollView>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  borderRight: {
    borderTopRightRadius:8,
    borderBottomRightRadius: 8
  }
});