export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") throw new TypeError("name must be a string");
    if (typeof length !== "number")
      throw new TypeError("length must be a number");
    if (!Array.isArray(students))
      throw new TypeError("students must be an array");

    for (const student of students) {
      if (typeof student !== "string")
        throw new TypeError("students must be an array of strings");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name_) {
    if (typeof name_ !== "string") throw new TypeError("name must be a string");
    this._name = name_;
  }

  set length(length_) {
    if (typeof length_ !== "number")
      throw new TypeError("length must be a number");
    this._length = length_;
  }

  set students(students_) {
    if (!Array.isArray(students_))
      throw new TypeError("students must be an array");

    for (const student of students_) {
      if (typeof student !== "string")
        throw new TypeError("students must be an array of strings");
    }

    this._students = students_;
  }
}
