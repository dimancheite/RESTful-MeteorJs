import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  // When Meteor starts, create new collection in Mongo if not exists.
  Meteor.startup(function () {
    User = new Meteor.Collection('user');
  });
}
