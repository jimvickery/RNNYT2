import { createSelector } from 'reselect'; 
// import { reshapeNewsData } from '../util/dataTransformations'; 
import { allNewsSelector } from '../selectors/newsSelectors';

const newsSelector = state => state.news; 
 
const reshapeNewsSelector = createSelector( 
  [newsSelector],

  reshapeNewsData 
  ); 
   
  export const allNewsSelector = createSelector( 
    [reshapeNewsSelector], 
    newsItems => newsItems 
  );
  
