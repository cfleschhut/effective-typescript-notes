"use strict";
/*
Item 29:
Be Liberal in What You Accept and Strict in What You Produce
*/
function focusOnFeature(f) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const { center: { lat, lng }, zoom, } = camera;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
