import RemoteStorage from 'remotestoragejs';
import RemoteStorageWidget from 'widgetjs';

// Initialize remoteStorage instance
const rs = new RemoteStorage({logging: true});

// Claim access to appropriate storage
rs.access.claim('mar', 'rw');

// Sync all items in storage to/from server/local
rs.caching.enable('/mar/');

// Initialize Connect Widget
const rsw = new Widget(remoteStorage);

// Register Google Drive as Storage Option
rs.setApiKeys({
    googledrive: 'key-goes-here'
})

// Attach to DOM
rsw.attach();

/**
 * Create Client
 */

const client = rs.scope('/mar/');

// List all items in the category/folder
// Should use data modules.
client.getListing('')
    .then(() => console.log("data has been saved"));


/**
 * Basic Logging
 */
rs.on('connected', () => {
    const userAddress = rs.remote.userAddress;
    console.debug(`${userAddress} connected their remote Storage.`);
})

rs.on('network-offline', () => {
    console.debug(`Network is now offline.`);
})

rs.on('network-online', () => {
    console.debug(`Network is now online.`);
})