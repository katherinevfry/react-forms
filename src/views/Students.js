import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import StudentCard from '../components/StudentCard';

firebase.initializeApp(firebaseConfig);

function Students({ students, setStudents }) {
  return (
    <>
      <div id="cardContainer">
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          setStudents={setStudents}
          {...studentInfo}
        />
      ))}
      </div>
    </>
  );
}

Students.propTypes = {
  students: PropTypes.array,
  setStudents: PropTypes.func
};

export default Students;
