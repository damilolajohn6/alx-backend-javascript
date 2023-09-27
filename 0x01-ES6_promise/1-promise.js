const getFullResponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      reject(new Error("The API is fake"));
    }
  });
};

export default getFullResponseFromAPI;
