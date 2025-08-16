import AppColor from "./AppColor.js";
import Border from "./Border.js";

const PersonState = {
  NORMAL:
    AppColor.text.REGULAR +
    " " +
    AppColor.background.WHITE +
    " " +
    AppColor.border.LIGHT +
    " " +
    Border.PASSIVE,

  SELECTED:
    AppColor.text.REGULAR +
    " " +
    AppColor.background.WHITE +
    " " +
    AppColor.border.REGULAR +
    " " +
    Border.ACTIVE,

  DISPLAY_WITHIN_CONTAINER:
    AppColor.text.DARK +
    " " +
    AppColor.background.LIGHT +
    " " +
    AppColor.border.REGULAR +
    " " +
    Border.PASSIVE +
    // Scale down to 36% of the original size
    " scale-36",
};

export default PersonState;
