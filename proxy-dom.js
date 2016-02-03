'use strict';

import _find from 'lodash/find';
import _takeWhile from 'lodash/takeWhile';
import _matchesProperty from 'lodash/matchesProperty';
import _capitalize from 'lodash/capitalize';
import _kebabCase from 'lodash/kebabCase';

class ElementProxy {
    constructor ( config ) {
        this.id = config.id || '';
        this.tagName = capitalize( config.tagName );
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

        for ( let attribute in config.attributes ) {
          this.attributes.push( {
              'name': _kebabCase( attribute ),
              'value': config.attributes[ attribute ]
          } );
        }
    }

    querySelector ( selector ) {
        if ( selector.indexOf( '#' ) > -1 ) {
            return _find( this.children, elem => elem.id === selector.replace( '#', '' ) );
        }

        if ( selector.indexOf( '.' ) > -1 ) {
            return _find( this.children, elem => elem.classList.indexOf( selector.replace( '.', '' ) ) > -1 );
        }

        return _find( this.children, elem => elem.tagName === 'selector' ) || null;
    }

    getAttribute ( attribute ) {
        return _find( this.attributes, _matchesProperty( 'name', _kebabCase( attribute ) ) ).value || '';
    }

    hasAttribute( attribute ) {
        return _matchesProperty( this.attributes, 'name', _kebabCase( attribute ) )[ 0 ].value !== '';
    }

    setAttribute ( attribute, value ) {
        _union(
            this.attributes,
            [ {
                name: _kebabCase( attribute ),
                value: value
            } ]
        );

        return this;
    }
}


class DocProxy {
    constructor ( config.body ) {
        this.cookie = config.cookie || '';
        this.body = config.body;
        this.documentElement = config.documentElement;
    }

    getElementById ( id ) {
        return _find( this.body, elem => elem.id === id ) || null;
    }

    querySelector ( selector ) {
        if ( selector.indexOf( '#' ) > -1 ) {
            return _find( this.body, elem => elem.id === selector.replace( '#', '' ) );
        }

        if ( selector.indexOf( '.' ) > -1 ) {
            return _find( this.body, elem => elem.classList.indexOf( selector.replace( '.', '' ) ) > -1 );
        }

        return _find( this.body, elem => elem.tagName === 'selector' ) || null;
    }

    querySelectorAll ( selector ) {
        if ( selector.indexOf( '#' ) > -1 ) {
            return _takeWhile( this.body, elem => elem.id === selector.replace( '#', '' ) );
        }

        if ( selector.indexOf( '.' ) > -1 ) {
            return _takeWhile( this.body, elem => elem.classList.indexOf( selector.replace( '.', '' ) ) > -1 );
        }

        return _takeWhile( this.body, elem => elem.tagName === 'selector' ) || null;
    }
}

class WinProxy {
    constructor ( config ) {
        if ( window ) {
            this = window;
            return this;
        }

        this.document = new DocStub( config.document );
        this.location = {
            hostname: config.location.hostname || ''
        }
        this.navigator = {
            appName: config.location.appName || '',
            userAgent: config.location.userAgent || ''
        }

        return this;
    }
}

