import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { loadNews } from '../actions/newsActions'; 
// import NewsFeed from '../components/NewsFeed'; 
import NewsFeedContainer from '../containers/NewsFeedContainer';
import { reshapeNewsData } from '../util/dataTransformations';

 
const mapStateToProps = state => ({ 
  news: allNewsSelector(state) 
});



const mapDispatchToProps = dispatch => ( 
  bindActionCreators({

    loadNews 
  }, dispatch) 
);

