/*
Item 30:
Don’t Repeat Type Information in Documentation
*/

type Color = {
  r: number;
  g: number;
  b: number;
};

/** Get the foreground color for the application or a specific page. */
function getForegroundColor(page?: string): Color {
  return page === 'login' ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
}

function sort(nums: readonly number[]) {}
