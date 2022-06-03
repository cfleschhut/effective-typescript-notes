"use strict";
/*
Item 33:
Prefer More Precise Alternatives to String Types
*/
const kindOfBlue = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: new Date('1959'),
    recordingType: 'studio',
};
const albums = [kindOfBlue, kindOfBlue];
function getAlbumsOfType(recordingType) {
    return albums.filter((album) => album.recordingType == recordingType);
}
getAlbumsOfType('live');
function pluck(records, key) {
    return records.map((r) => r[key]);
}
pluck(albums, 'releaseDate');
pluck(albums, 'artist');
pluck(albums, 'recordingType');
