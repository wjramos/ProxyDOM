'use strict';

import DocProxy from 'doc-proxy';
import JqProxy from 'jq-proxy';

/* Window Proxy */
export default class WinProxy {
    constructor ( config ) {

        /* If in a browser, use that window instead */
        if ( window ) {
            this = window;
            return this;
        }

        this.document = new DocProxy( config.document );
        this.location = {
            hostname: config.location.hostname || ''
        }

        this.navigator = {
            appName: config.location.appName || '',
            userAgent: config.location.userAgent || ''
        }

        if ( config.jquery ) {
            this.jquery = new JqProxy( config.jquery );
        }

        return this;
    }
}
