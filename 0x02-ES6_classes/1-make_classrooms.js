

// eslint-disable-next-line
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classrooms = [];
  for (const i of arr) {
    classrooms.push(new ClassRoom(i));
  }
  return classrooms;
}
