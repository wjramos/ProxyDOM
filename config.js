'use strict';

domJSON = {
  'html' : {
    'head' : [],
    'body' : [
      // {
      //   'tagName': 'DIV',
      //   'id': 'test1',
      //   'classList': [ 'class1', 'class2' ],
      //   'textContent' : 'TEXT',
      //   'children' : [
      //     {
      //       'tagName': 'DIV',
      //       'id': 'test2',
      //       'classList': [ 'class1', 'class2' ],
      //       'textContent' : 'TEXT',
      //       'children' : [ ]
      //     }
      //   ]
      // }
    ]
  }
};

export default {

  /* Document */
  document: {
    cookie: '',
    innerHTML: ''
    body: {},
    childNodes: [],
    children: [],
    documentElement: {},
    head: {}
  },

  /* Location */
  location: {
    hostname: ''
  },

  /* Navigator */
  navigator: {
    appName: '',
    userAgent: ''
  },

  // Make presets for breakpoints
  innerHeight: 100,
  innerWidth: 100
}
