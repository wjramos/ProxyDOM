'use strict';

import _first from 'lodash/first';

/* Element Proxy */
export default class ElementProxy {
  constructor ( config ) {
    this.id = config.id || '';
    this.tagName = config.tagName.toUpperCase( );
    this.style = config.style || {};
    this.children = config.children || [];
    this.innerHTML = config.innerHTML || '';
    this.attributes = config.attributes || [];
    this.classList = config.classList || [];
    this.classList.add = {
      apply ( classList, classes ) {
        this.classList = classList.concat( classes.split( ' ' ) );
      }
    };

    config.attributes.forEach( attribute => setValueByName( this.attributes, attribute, value ) );

    return this;
  }

  querySelector ( selector ) {
    _first( getBySelector( this.children, selector ) );
    return this;
  }

  getAttribute ( attribute ) {
    getByName( this.attributes, attribute );
    return this;
  }

  hasAttribute( attribute ) {
    getByName( this.attributes, attribute ) !== '';
    return this;
  }

  setAttribute ( attribute, value ) {
    setValueByName( this.attributes, attribute, value );
    return this;
  }


  /* Custom Prototypes */
  triggerEvent ( event ) {

  }
}
