import ClassRoom from "./0-classroom.js";

const initializeRooms = () => {
  const sizes = [19, 20, 34];
  const classrooms = sizes.map((size) => new ClassRoom(size));
  return classrooms;
};

export default initializeRooms;
