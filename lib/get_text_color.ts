import get_theme from "./get_theme";

function getTextColor(rgbaParam: any, window: any, localStorage: any) {
  let rgba = rgbaParam.match(/\d+/g);
  if (rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[2] * 0.114 > 186) {
    const theme = get_theme(window, localStorage);
    if (theme === true) {
      return "white";
    } else {
      return "black";
    }
  } else {
    return "null";
  }
}

function componentFromStr(numStr: string, percent: string) {
  var num = Math.max(0, parseInt(numStr, 10));
  return percent
    ? Math.floor((255 * Math.min(100, num)) / 100)
    : Math.min(255, num);
}

function rgbToHex(rgb: string) {
  var rgbRegex =
    /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
  var result,
    r,
    g,
    b,
    hex = "";
  if ((result = rgbRegex.exec(rgb))) {
    r = componentFromStr(result[1], result[2]);
    g = componentFromStr(result[3], result[4]);
    b = componentFromStr(result[5], result[6]);

    hex = "0x" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return hex;
}

function adjust(color: string, amount: number) {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color: string) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

function hex_to_rgb(hex: string) {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) return normal.slice(1).map((e: string) => parseInt(e, 16));
  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand)
    return shorthand.slice(1).map((e: string) => 0x11 * parseInt(e, 16));
  return null;
}

const get_text_color = (num: number, window: any, localStorage: any) => {
  const theme = get_theme(window, localStorage);

  if (num === 0) {
    if (theme === true) {
      return "rgb(255, 255, 255)";
    }
    if (theme === false) {
      return "rgb(0, 0, 0)";
    }
  }

  num >>>= 0;
  var b = num & 0xff,
    g = (num & 0xff00) >>> 8,
    r = (num & 0xff0000) >>> 16;
  const rgbColor = "rgb(" + [r, g, b].join(",") + ")";
  if (getTextColor(rgbColor, window, localStorage) === "null") {
    return rgbColor;
  }
  if (getTextColor(rgbColor, window, localStorage) === "black") {
    let hex = rgbToHex(rgbColor);
    hex = hex.substring(2);
    hex = "#" + hex;
    const adjusted = adjust(hex, -50);
    const rgb = hex_to_rgb(adjusted);
    if (rgb?.length === 3) {
      const formattedRGB =
        "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
      return formattedRGB;
    }
  }
  if (getTextColor(rgbColor, window, localStorage) === "white") {
    let hex = rgbToHex(rgbColor);
    hex = hex.substring(2);
    hex = "#" + hex;
    const adjusted = adjust(hex, 50);
    const rgb = hex_to_rgb(adjusted);
    if (rgb?.length === 3) {
      const formattedRGB =
        "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
      return formattedRGB;
    }
  }
};

export default get_text_color;
