import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent } from './helpers/data/StudentData';

const StudentForm = ({ formTitle }) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
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
            placeholder="name"
            value={student.name.value}
            onChange={handleInputChange}
          ></input>
          <br/>
          <label>Teacher: </label>
          <input
            name="teacher"
            type="text"
            placeholder="teacher"
            value={student.teacher.value}
            onChange={handleInputChange}
          ></input>
          <br/>
          <label>Grade: </label>
          <input
            name="grade"
            type="number"
            placeholder="grade"
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
  formTitle: PropTypes.string.isRequired
};

export default StudentForm;
