import Item from "@/components/shared/ListItemBase.jsx";
import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";

export default function ScanConfirmPage() {
  return (
    <>
      <Item></Item>
      <Item
        name="test"
        value="10.0"
        fillColor={AppColor.background.DARK}
      ></Item>
      <Item></Item>
    </>
  );
}
