import { getCookie } from "cookies-next";

export type OS =
  | "undetermined"
  | "macos"
  | "ios"
  | "windows"
  | "android"
  | "linux";

function getOS(): OS {
  const { userAgent } = navigator;
  const macosPlatforms = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i;
  const windowsPlatforms = /(Win32)|(Win64)|(Windows)|(WinCE)/i;
  const iosPlatforms = /(iPhone)|(iPad)|(iPod)/i;

  if (macosPlatforms.test(userAgent)) {
    return "macos";
  }
  if (iosPlatforms.test(userAgent)) {
    return "ios";
  }
  if (windowsPlatforms.test(userAgent)) {
    return "windows";
  }
  if (/Android/i.test(userAgent)) {
    return "android";
  }
  if (/Linux/i.test(userAgent)) {
    return "linux";
  }

  return "undetermined";
}

export function useOs(): OS {
  if (typeof window !== "undefined") {
    return getOS();
  }

  return "undetermined";
}

export const mobile = () => {
  const os = useOs();
  if (os == "ios") {
    return true;
  } else if (os == "android") {
    return true;
  } else {
    return false;
  }
};

export const pointer = "cursor-auto md:cursor-pointer";

export const darkTheme = getCookie("theme") == "dark" ? true : false;
