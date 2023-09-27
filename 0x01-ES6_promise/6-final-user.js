import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [user, photoUrl] = await Promise.all([userPromise, photoPromise]);

    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photoUrl }
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error.message }];
  }
};

export default handleProfileSignup;
