'use strict';

import _first from 'lodash/first';

/* Document Proxy */
export default class DocumentProxy {
  constructor ( config ) {
    this.cookie = config.cookie || '';
    this.body = config.body;
    this.documentElement = config.documentElement;

    return this;
  }

  getElementById ( id ) {
    getById( this.body, id );
    return this;
  }

  querySelector ( selector ) {
    _first( getBySelector( this.body, selector ) );
    return this;
  }

  querySelectorAll ( selector ) {
    getBySelector( this.body, selector );
    return this;
  }

  /* Custom Prototypes */
  triggerEvent ( event ) {

  }
}
