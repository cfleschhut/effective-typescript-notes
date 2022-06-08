"use strict";
/*
Item 30:
Don’t Repeat Type Information in Documentation
*/
/** Get the foreground color for the application or a specific page. */
function getForegroundColor(page) {
    return page === 'login' ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
}
function sort(nums) { }
