import AppColor from "./AppColor.js";
import Border from "./Border.js";

const ItemState = {
  NORMAL:
    AppColor.text.DARK +
    " " +
    AppColor.background.WHITE +
    " " +
    AppColor.border.LIGHT +
    " " +
    Border.PASSIVE,

  ACTIVATED:
    AppColor.text.DARK +
    " " +
    AppColor.background.WHITE +
    " " +
    AppColor.border.REGULAR +
    " " +
    Border.ACTIVE,

  DEACTIVATED:
    AppColor.text.WHITE +
    " " +
    AppColor.background.LIGHT +
    " " +
    AppColor.border.LIGHT +
    " " +
    Border.NONE,
};

export default ItemState;
