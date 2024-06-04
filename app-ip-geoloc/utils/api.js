export const fetchGeolocationData = async (ip, apiKey) => {
  const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ip}`;
  const options = { method: "GET" };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data && data.latitude && data.longitude) {
      return data;
    } else {
      console.error("Invalid response format", data);
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};
