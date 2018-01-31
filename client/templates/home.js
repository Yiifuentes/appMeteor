Template.home.created=function () {
    console.log ('create template home');
};
Template.home.rendered=function () {
    console.log ('create template home');
};
Template.home.destroyed=function () {
    console.log ('create template home');
};

Template.home.helpers({
    ejemploHelper:function () {
        return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
    },
    // other helpers ...
    dataContextHelper: function(){
        return {
            someText: 'This text was set using a helper of the parent  template.',
            someNested: {
                text: 'That comes from "someNested.text"'
            }
        }; }
});