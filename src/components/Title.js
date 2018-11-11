import React, { PropTypes } from 'react'; 
import { 
  StyleSheet, 
  Text 
} from 'react-native'; 
import AppText from './AppText'; 
import * as globalStyles from '../styles/global'; 
 
const Title = ({ style, children }) => ( 
  <AppText style={[styles.title, style]}> 
    {children} 
  </AppText> 
);
