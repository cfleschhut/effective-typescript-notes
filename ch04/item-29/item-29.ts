/*
Item 29:
Be Liberal in What You Accept and Strict in What You Produce
*/

interface LngLat {
  lng: number;
  lat: number;
}

type LngLatLike = LngLat | { lon: number; lat: number } | [number, number];

interface Camera {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
}

interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
  center?: LngLatLike;
}

type LngLatBounds =
  | { northeast: LngLatLike; southwest: LngLatLike }
  | [LngLatLike, LngLatLike]
  | [number, number, number, number];

type Feature = any;

declare function calculateBoundingBox(
  f: Feature,
): [number, number, number, number];

declare function viewportForBounds(bounds: LngLatBounds): Camera;

declare function setCamera(camera: CameraOptions): void;

function focusOnFeature(f: Feature) {
  const bounds = calculateBoundingBox(f);
  const camera = viewportForBounds(bounds);

  setCamera(camera);

  const {
    center: { lat, lng },
    zoom,
  } = camera;

  window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
