import React, { PropTypes } from 'react'; 
import { 
  StyleSheet, 
  Image 
} from 'react-native';

const Thumbnail = ({ url }) => { 
  return ( 
    <Image 
      style={[styles.image]} 
      source={{ 
        uri: url 
      }} 
    /> 
  ); 
}; 
 
Thumbnail.propTypes = { 
  url: PropTypes.string.isRequired 
}; 
 
const styles = StyleSheet.create({ 
  image: { 
    height: 100, 
    justifyContent: 'flex-end' 
  } 
}); 
 
export default Thumbnail;

