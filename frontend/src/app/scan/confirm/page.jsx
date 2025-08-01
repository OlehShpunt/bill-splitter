import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import ItemList from "@/components/shared/ItemList";

export default async function ScanConfirmPage() {
  let itemListData;

  try {
    // TODO: use Context to save the image url in ScanPage and dynamically pass it below
    const imageUrl = encodeURIComponent("https://i.redd.it/43vg6ll5hz2b1.jpg");

    // Send the image to the backend and get the extracted items
    const response = await fetch(
      `http://127.0.0.1:8000/?image_url=${imageUrl}`,
      {
        cache: "default",
      }
    );

    // Convert the response into a JSON object
    const dataJsonString = await response.json();
    const dataJson = JSON.parse(dataJsonString);
    itemListData = dataJson;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }

  return (
    <>
      <Header
        heading="Confirm item list"
        description="Click an item to correct price or name"
      ></Header>
      <ItemList items={itemListData}></ItemList>
      <Button text="Confirm"></Button>
    </>
  );
}
