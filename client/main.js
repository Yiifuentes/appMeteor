import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './containers/App';


//import './main.html';

Meteor.startup(() => {
    render(<App />, document.getElementById('root'));
});
//
// Template.hellos.onCreated(
//     function hellosOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hellos.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hellos.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
