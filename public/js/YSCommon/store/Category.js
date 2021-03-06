'use strict';

Ext.define('YSCommon.store.Category', {
	extend 	: 'Ext.data.Store',

	alias	: 'store.app-categoryStore',
	storeId	: 'app-categoryStore',

	model  : 'YSCommon.model.Category',

    remoteSort      : true,
    remoteFilter    : true,

    proxy     : {
        type         : 'ajax',
        url          : YSConfig.url + '/application/category',
        actionMethods: {
            create : 'POST',
            read   : 'POST',
            update : 'POST',
            destroy: 'POST'
        },
        reader       : {
            rootProperty   : 'result',
            totalProperty  : 'totalRecords',
            messageProperty: 'message',
            successProperty: 'success'
        }
    },

    listeners   :  {
        beforeload  : function(store) {
            store.getProxy().setExtraParams( { isTree : false } );
        }
    }
});