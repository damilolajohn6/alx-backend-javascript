export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    // Simulating API response after a delay
    setTimeout(() => {
      // Simulate a successful API response
      const responseData = { message: "API response received" };
      resolve(responseData);

    }, 2000); // Simulate a delay of 2 seconds
  });

  return myPromise;
}
