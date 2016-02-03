'use strict';

import assert from 'assert';
import getById from '../getById';

describe( 'getById', () => {
  it( 'should return the node with matching id', () => {
    assert( getById( [ { id: 1, val: 1 }, { id: 2, val: 2 } ], 2 ).val === 2 );
  } );

  it( 'should return null for no match', () => {
    assert( getById( [ { id: 1, val: 1 }, { id: 2, val: 2 } ], 3 ) === null );
  } );
} );
