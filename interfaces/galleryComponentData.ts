import { PictureData } from "./pictureData";

export interface GalleryComponentData {
    galleryData?: PictureData[],
    loadPictures?: Function,
  }