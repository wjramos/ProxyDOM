'use strict';

import assert from 'assert';
import getByName from '../getByName';

describe( 'getByName', () => {
  it( 'should return the value of matching key name pair', () => {
    assert( getByName( [ { 'name': 2, 'value': 2 } ], 2 ) === 2 );
  } );

  it( 'should return null for no match', () => {
    assert( getByName( [ { 'name': 2, 'value': 2 } ], 3 ) === null );
  } );
} );
