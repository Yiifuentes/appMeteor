// import { Meteor } from 'meteor/meteor';
// import productsData from './insertData';
//
// Meteor.startup(() => {
//   // code to run on server at startup
//     //productsData();
//
// });


import { Meteor } from 'meteor/meteor';
// import {Products} from '../shared/collections/Products';
import productsData from './insertData';
Meteor.startup(() => {

    /*
    * sample data
    *
    */
    productsData();

});
