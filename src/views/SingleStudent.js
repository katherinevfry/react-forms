import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      { student?.name }
    </div>
  );
}

SingleStudent.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string
};
