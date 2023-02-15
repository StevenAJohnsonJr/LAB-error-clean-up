import htmlStructure from '../components/htmlStructcture';
import header from '../components/header';
import startSortingBtn from '../components/startSortingbtn';

import events from './events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};
export default startApp;
