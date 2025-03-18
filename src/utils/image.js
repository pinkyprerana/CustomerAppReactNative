import ImagePicker from 'react-native-image-crop-picker';
import React, {useState} from 'react';
import normalize from './normalize';

// -------------- image picker from camera--------------------------------------

const imagePickerCamera = async (type = null) => {
  let imagePath = '';
  await ImagePicker.openCamera({
    width: normalize(100),
    height: normalize(50),
    cropping: true,
    freeStyleCropEnabled: true,
  }).then(image => {
    imagePath = image.path;
  });
  return imagePath;
};

// ---------------- image picker from  gallery-------------------------------------

const imagePickerGallery = async (type = null, Width = 400, Height = 300) => {
  let imagePath = '';
  await ImagePicker.openPicker({
    // multiple: true,
    width: normalize(100),
    height: normalize(50),
    cropping: true,
    freeStyleCropEnabled: true,
  }).then(image => {
    imagePath = image.path;
  });
  return imagePath;
};

export {imagePickerCamera, imagePickerGallery};
