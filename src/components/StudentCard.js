import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const StudentCard = ({
  name,
  grade,
  teacher,
  handleClick
}) => (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>{grade}</CardText>
      <CardText>{teacher}</CardText>
    {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''}
    </Card>
);

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default StudentCard;
