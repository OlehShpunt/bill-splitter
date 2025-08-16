import ItemState from "@/utils/ItemState";

export default function Item({
  name = "Not specified",
  value = "0.00",
  state = ItemState.NORMAL,
  onClick = () => {},
}) {
  return (
    <div
      className={`m-auto my-2 max-w-100 w-297/316 h-18 rounded-[10] ${state}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center px-4 h-full">
        <span id="name">{name.toString()}</span>
        <span id="value">{value.toString()}</span>
      </div>
    </div>
  );
}
