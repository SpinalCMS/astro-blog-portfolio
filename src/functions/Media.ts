// modules
import fs from 'fs'
import path from 'path';
import sizeOf from 'image-size';
import exifr from 'exifr'

// config
import { imageConfig } from '../config'

// build the public image url
// relative to the web root
export function buildPublicPath(file) {
    return `/${imageConfig.directory.public}${file}`;
}
// build the local path
// relative to the 'public' directory
export function buildLocalPath(file) {
    return `${imageConfig.directory.local}${file}`;
}
// I need the full file path minus the extension
// for the single image detail pages
export function buildFileDetailPath(file) {
    return path.dirname(file) + "/" + path.basename(file, path.extname(file))
}

// get the width and height dimensions of an image
export function getDimensions(file) {
    const localPath = buildLocalPath(file);

    // get the image dimensions
    const dimensions = sizeOf(localPath);

    return dimensions;
}

export async function getMetadata(file, data = "all") {
    const localPath = buildLocalPath(file);

    // collect all the exif, iptc and ifd0 data from the image
    const exifrOptions = {
        iptc: ['ObjectName', 'Caption', 'Byline'],
        exif: ['LensModel', 'FNumber', 'ISO', 'ExposureTime', 'DateTimeOriginal', 'FocalLength'],
        ifd0: ['Make', 'Model'],
        gps: false,
        mergeOutput: true,
    }
    // read the image into fs
    const fsFile = fs.readFileSync(localPath); // read the image
    const metadata = await exifr.parse(fsFile, exifrOptions);
    const dimensions = getDimensions(file);

    // return the array to hold all the image data
    const imageData = {
        "filename": path.basename(localPath, '.jpg'),
        "width": dimensions.width,
        "height": dimensions.height,
        "date": metadata.DateTimeOriginal,
        "title": metadata.ObjectName,
        "caption": metadata.Caption,
        "author": metadata.Byline,
        "cameraMake": metadata.Make,
        "cameraModel": metadata.Model,
        "lens": metadata.LensModel,
        "aperture": metadata.FNumber,
        "iso": metadata.ISO,
        "focalLength": metadata.FocalLength,
        "shutterSpeed": 1 / metadata.ExposureTime,
    };

    // return the whole array if data isn't specified
    // otherwise return the specific piece of metadata
    if (data == "all") {
        return imageData;
    } else {
        return imageData[data];
    }
}