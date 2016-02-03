'use strict';

import _filter from 'lodash/takeWhile';

export default function ( nodeList, selector ) {
  if ( selector.indexOf( '#' ) > -1 ) {
      return _filter( nodeList, node => node.id === selector.replace( '#', '' ) );
  }

  if ( selector.indexOf( '.' ) > -1 ) {
      return _filter( nodeList, node => node.classList.indexOf( selector.replace( '.', '' ) ) > -1 );
  }

  return _filter( nodeList, node => node.tagName === selector ) || null;
}
