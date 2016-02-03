'use strict';

import _find from 'lodash/find';

export default function ( nodeList, id ) {
  return _find( nodeList, node => node.id === id ) || null;
}
