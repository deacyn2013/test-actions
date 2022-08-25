// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


import { getImportantInform } from '@/api/index.js';

const tempBBB = [62,3,4];
const aabs = [123, ...tempBBB];
console.log('getImportantInform: ', getImportantInform(), aabs);