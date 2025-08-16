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

  CONTAINERIZED: {
    ACTIVE:
      AppColor.text.DARK +
      " " +
      AppColor.background.LIGHT +
      " " +
      AppColor.border.REGULAR +
      " " +
      Border.PASSIVE +
      // Scale down to 36% of the original size
      " h-7 w-7",
    INACTIVE:
      AppColor.text.LIGHT +
      " " +
      AppColor.background.WHITE +
      " " +
      AppColor.border.LIGHT +
      " " +
      Border.NONE +
      // Scale down to 36% of the original size
      " h-7 w-7",
  },
};

export default PersonState;
