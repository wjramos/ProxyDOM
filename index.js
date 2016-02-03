'use strict';

import WinProxy from 'win-proxy';

export default function ( config ) {
    return window || new WinProxy( config );
}
