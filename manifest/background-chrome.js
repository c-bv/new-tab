/* eslint-disable no-undef */

chrome.runtime.onInstalled.addListener((details) => {
    details.reason === 'install' && chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
});