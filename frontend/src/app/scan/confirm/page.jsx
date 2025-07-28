import Item from "@/components/shared/ListItemBase.jsx";
import "../../globals.css";
import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";

export default function Root() {
  return (
    <html>
      <body>
        <Item></Item>
        <Item
          name="test"
          value="10.0"
          fillColor={AppColor.background.DARK}
        ></Item>
        <Item borderWidth={Border.ACTIVE}></Item>
        <Item></Item>
      </body>
    </html>
  );
}
