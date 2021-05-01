import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/StudentData';
import StudentForm from '../StudentForm';

const StudentCard = ({ setStudents, ...student }) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(student.firebaseKey)
          .then((studentArray) => setStudents(studentArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  const history = useHistory();

  function viewStudent() {
    history.push(`student/${student.firebaseKey}`);
  }

  return (
<Card id="card" body>
      <CardTitle tag="h5">{student.name}</CardTitle>
      <CardText>{student.grade}</CardText>
      <CardText>{student.teacher}</CardText>
      <Button color="warning" onClick={viewStudent}>View Student</Button>
     <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
     <Button color="info" onClick={() => handleClick('edit')}>
       {editing ? 'Close Form' : 'Edit Student'}
     </Button>
     {
        editing && <StudentForm
        formTitle='Edit Student'
        setStudents={setStudents}
        {...student}
     />
      }
    </Card>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
