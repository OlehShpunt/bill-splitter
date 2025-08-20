async function extractItemsService(image) {
  const formData = new FormData();
  formData.append("file", image);

  const response = await fetch("http://127.0.0.1:8000", {
    method: "POST",
    body: formData,
    contentType: "multipart/form-data",
    headers: {
      Accept: "application/json",
    },
  });
  // Convert the response into a JSON object
  const dataJsonString = await response.json();
  const dataJson = JSON.parse(dataJsonString); // Format is array of objects {name: "itemName", value: "itemPrice"}

  return dataJson.map((itemJson) => {
    itemJson.key = Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000;
    return itemJson;
  });
}

export default extractItemsService;
