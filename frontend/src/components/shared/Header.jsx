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
        <div className="m-auto max-w-100 w-297/316 h-fit">
          {heading && (
            <p className={`w-fit px-4 text-xl mt-5 ${AppColor.text.DARK}`}>
              {heading}
            </p>
          )}
          {description && (
            <p className={`w-fit px-4 ${AppColor.text.REGULAR}`}>
              {description}
            </p>
          )}
          <div className="m-auto overflow-x-auto whitespace-nowrap scrollbar-hide max-w-[380px]">
            {children}
          </div>
        </div>
      </div>
      <div className="h-23"></div>
    </>
  );
}
