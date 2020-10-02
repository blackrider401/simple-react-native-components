import React from "react";
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const Elevation = (elevation: any) => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
        elevation,
        shadowColor: "#0001",
        shadowOffset: { width: 0, height: elevation * 0.6 },
        shadowOpacity: 0.8,
        shadowRadius: elevation * 0.5,
      });
  return response;
};

// -----------------------------------------------------------------------------
// ALL EXPORTS
// -----------------------------------------------------------------------------

export const scaleFont = (val: any) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

export const Height = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};
