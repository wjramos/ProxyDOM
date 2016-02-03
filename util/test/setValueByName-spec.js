'use strict';

import assert from 'assert';
import setValueByName from '../getBySelector';

describe( 'setValueByName', () => {
  it( 'should change an existing value by name', () => {
    assert( setValueByName( [ { 'name': 'test', 'value': 'test' } ], 'test', 'newValue' ).value !== 'test' );
  } );

  xit( 'should add a new name value pair object to collection if not present', () => {
    assert( setValueByName( [ { 'name': 'test', 'value': 'test' } ], 'newName', 'newValue' ).length > 1 );
  } );
} );
