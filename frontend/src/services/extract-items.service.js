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
  const dataJson = JSON.parse(dataJsonString);
  return dataJson;
}

export default extractItemsService;
