import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResults, userResults]) => {
      body = photoResults.body;
      firstName = userResults.firstName;
      lastName = userResults.lastName;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log("Signup system offline"));
}
