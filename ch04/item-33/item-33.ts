/*
Item 33:
Prefer More Precise Alternatives to String Types
*/

// const identity = <T>(param: T) => {
//   return param;
// };

// identity<boolean>(true);

/** What type of environment was this recording made in? */
type RecordingType = 'studio' | 'live';

interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}

const kindOfBlue: Album = {
  artist: 'Miles Davis',
  title: 'Kind of Blue',
  releaseDate: new Date('1959'),
  recordingType: 'studio',
};

const albums = [kindOfBlue, kindOfBlue];

function getAlbumsOfType(recordingType: RecordingType): Album[] {
  return albums.filter((album) => album.recordingType == recordingType);
}

getAlbumsOfType('live');

function pluck<T, K extends keyof T>(records: T[], key: K) {
  return records.map((r) => r[key]);
}

pluck(albums, 'releaseDate');
pluck(albums, 'artist');
pluck(albums, 'recordingType');
