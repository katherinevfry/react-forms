import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/StudentData';
import StudentCard from '../components/StudentCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Form Title'
      setStudents={setStudents}
      />
      <hr/>
      <div id="cardContainer">
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          setStudents={setStudents}
          {...studentInfo}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
