import React, { PropTypes } from 'react'; 
import { 
  StyleSheet, 
  View 
} from 'react-native'; 
import SmallText from './SmallText'; 
import * as globalStyles from '../styles/global'; 
 
const Byline = ({ date, author, location }) => ( 
  <View> 
    <View style={styles.row}>

<SmallText> 
        {date.toLocaleDateString()} 
      </SmallText> 
      <SmallText> 
        {author} 
      </SmallText> 
    </View> 
 
    {location ? ( 
      <View style={styles.row}> 
        <SmallText style={styles.location}> 
          {location} 
        </SmallText> 
      </View> 
    ) : null} 
  </View> 
); 
 
Byline.propTypes = { 
  date: PropTypes.instanceOf(Date).isRequired, 
  author: PropTypes.string.isRequired, 
  location: PropTypes.string 
}; 
 
const styles = StyleSheet.create({ 
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 5
  }, 
  location: { 
    color: globalStyles.MUTED_COLOR 
  } 
}); 
 
export default Byline; 
//  Here we are adding the View component to the react-native import:
 import { 
  StyleSheet, 
  View 
} from 'react-native'; 
//  We then use that component to group and lay out a visual row of SmallText components showing a news article's author and date of publication: 
<View style={styles.row}> 
  <SmallText> 
    {date.toLocaleDateString()} 
  </SmallText> 
  <SmallText> 
    {author} 
  </SmallText> 
</View>


{location ? ( 
  <View style={styles.row}> 
    <SmallText style={styles.location}> 
      {location} 
    </SmallText> 
  </View> 
) : null} 
//  Finally, we use a third View component to group together these two rows:
 <View> 
  <View style={styles.row}> 
    <SmallText> 
      {date.toLocaleDateString()} 
    </SmallText> 
    <SmallText> 
      {author} 
    </SmallText> 
  </View> 
 
  {location ? ( 
    <View style={styles.row}> 
      <SmallText style={styles.location}> 
        {location} 
      </SmallText> 
    </View> 
  ) : null}
</View>
