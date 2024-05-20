const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

enum ImageSizes {
  Small = "w300",
  Medium = "w780",
  Large = "w1280",
  Original = "original"
}

const BACKDROP_SIZE = ImageSizes.Large;
const POSTER_SIZE = ImageSizes.Medium;

export {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE
};
