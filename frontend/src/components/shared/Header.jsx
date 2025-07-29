import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";

export default function Header({ heading, description, children }) {
  return (
    <>
      <div
        className={`fixed w-full h-23 border-b-2 border-x-0 border-t-0 ${
          AppColor.border.LIGHT +
          " " +
          AppColor.background.WHITE +
          " " +
          Border.PASSIVE
        }`}
      >
        <div className="m-auto max-w-100 w-297/316 h-fit mt-5">
          <p className={`w-fit px-4 text-xl ${AppColor.text.DARK}`}>
            {heading}
          </p>
          <p className={`w-fit px-4 ${AppColor.text.REGULAR}`}>{description}</p>
        </div>
        {children}
      </div>
      <div className="h-23"></div>
    </>
  );
}
