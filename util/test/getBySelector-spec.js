'use strict';

import assert from 'assert';
import getBySelector from '../getBySelector';

describe( 'getBySelector', () => {
  it( 'should return array of elements in set matching given selector', () => {
    assert( getBySelector( [ { tagName : 'DIV' }, { tagName : 'DIV' }, { tagName : 'A' } ], 'DIV' ).length === 2 );
    assert( getBySelector( [ { classList : ['class'] }, { classList : ['class'] }, { classList : ['test'] } ], '.class' ).length === 2 );
    assert( getBySelector( [ { id : 'id' }, { id : 'id' }, { id : 'test' } ], '#id' ).length === 2 );
  } );

  it( 'should return empty array for no match', () => {
    assert( getBySelector( [ { tagName : 'DIV' }, { tagName : 'DIV' }, { tagName : 'A' } ], 'P' ).length === 0 );
    assert( getBySelector( [ { classList : ['class'] }, { classList : ['class'] }, { classList : ['test'] } ], '.new-class' ).length === 0 );
    assert( getBySelector( [ { id : 'id' }, { id : 'id' }, { id : 'test' } ], '#newId' ).length === 0 );
  } );
} );
