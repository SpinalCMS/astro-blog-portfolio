// modules
import fs from "fs"
import path from "path"
import sharp from "sharp"
import exifr from "exifr"

// config
import { imageConfig } from "../config"

// get the public image url
// relative to the 'public' directory
export function getPublicPath(file) {
    return `/${imageConfig.directory.public}${file}`;
}

// get the local path
// relative to the project root
export function getLocalPath(file) {
    return `${imageConfig.directory.local}${file}`;
}

// get the base directory without the filename
export function getDirectory(file) {
    const publicPath = getPublicPath(file);

    return path.dirname(publicPath);
}

// get the base filename without the extension
export function getFilename(file) {
    const localPath = getLocalPath(file);

    const extension = getExtension(file); // extension of the image file
    return path.basename(localPath, extension); // filename of the image minus the extension
}

// get the extension of the image
export function getExtension(file) {
    const localPath = getLocalPath(file);

    return path.extname(file); // extension of the image file
}

// build a srcset with image sizes
export function buildSrcSet(file, type) {
    let dir = getDirectory(file);
    let filename = getFilename(file);

    return imageConfig.imageSizes.map(s =>
        dir + '/' + filename + `-w${s}${type} ${s}w`
    )
}

export function getMetadata(file) {
    const localPath = getLocalPath(file);
    const extension = path.extname(localPath); // extension of the image file
    const baseFilename = path.basename(localPath, extension); // filename of the image minus the extension
    const dirPath = path.dirname(localPath);

    const metaFile = dirPath + '/' + baseFilename + '.json';
    
    const fsFile = fs.readFileSync(metaFile); // read the JSON data
    const metaData = JSON.parse(fsFile);

    const imageData = {
        "filename": path.basename(localPath, ".jpg"),
        "width": metaData.width,
        "height": metaData.height,
        "date": metaData.DateTimeOriginal,
        "title": metaData.ObjectName,
        "caption": metaData.Caption,
        "author": metaData.Byline,
        "cameraMake": metaData.Make,
        "cameraModel": metaData.Model,
        "lens": metaData.LensModel,
        "aperture": metaData.FNumber,
        "iso": metaData.ISO,
        "focalLength": metaData.FocalLength,
        "shutterSpeed": 1 / metaData.ExposureTime,
    };

    return imageData;
}