import { atom } from "recoil";

export const spaceState = atom({
  key: "raven-spaces",
  default: [{}],
});

export const userState = atom({
  key: "raven-user",
  default: null,
});
