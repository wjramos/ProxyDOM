'use strict';

import _find from 'lodash/find';
import _matchesProperty from 'lodash/matchesProperty';
import _isString from 'lodash/isString';
import _kebabCase from 'lodash/kebabCase';

export default function ( list, name ) {
  let attribute = _find( list, { 'name': _isString( name ) ? _kebabCase( name ) : name } );
  return attribute ? attribute.value : null;
}
