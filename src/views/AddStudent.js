import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../StudentForm';

const AddStudent = ({ setStudents }) => {
  console.warn('hi');
  return (
    <div>
      <StudentForm
      formTitle='Add a Student'
      setStudents={setStudents}
      />
    </div>
  );
};

AddStudent.propTypes = {
  setStudents: PropTypes.func
};

export default AddStudent;
