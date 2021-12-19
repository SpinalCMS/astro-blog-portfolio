import sizeOf from 'image-size';
import settings from '../data/settings.json'

export function buildPublicPath(file) {
    return `/${settings.image.directory.public}${file}`;
}
export function buildLocalPath(file) {
    return `${settings.image.directory.local}${file}`;
}

export function getDimensions(file) {
    const localPath = buildLocalPath(file);

    // get the image dimensions
    const dimensions = sizeOf(localPath);

    return dimensions;
}