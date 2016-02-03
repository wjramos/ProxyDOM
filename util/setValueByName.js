'use strict';

import _union from 'lodash/union';
import _find from 'lodash/find';
import _kebabCase from 'lodash/kebabCase';

export default function ( collection, name, value ) {
  let existing = _find( collection, { 'name' : name } );
  if ( existing ) {
    return existing.value = value;
  }

  return _union(
      collection,
      [ {
          name: _kebabCase( name ),
          value: value
      } ]
  );
}

