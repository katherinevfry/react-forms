import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent, updateStudents } from './helpers/data/StudentData';

const StudentForm = ({ formTitle, setStudents, ...args }) => {
  const [student, setStudent] = useState({
    name: args?.name || '',
    teacher: args?.teacher || '',
    grade: args?.grade || 0,
    firebaseKey: args?.firebaseKey || null
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      console.warn('wanna update');
      updateStudents(student).then((studentArray) => setStudents(studentArray));
    } else {
      addStudent(student).then((studentArray) => setStudents(studentArray));
    }
  };

  return (
    <>
      <div className="student-form">
        <form id="addStudentForm"
        autoComplete="off"
        onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={student.name.value}
            onChange={handleInputChange}
          ></input>
          <br/>
          <label>Teacher: </label>
          <input
            name="teacher"
            type="text"
            value={student.teacher.value}
            onChange={handleInputChange}
          ></input>
          <br/>
          <label>Grade: </label>
          <input
            name="grade"
            type="number"
            value={student.grade.value}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default StudentForm;
