import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Percentage,
  StatList,
  StatListItem,
  StatSection,
  Title,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({id, label, percentage}) => (
          <StatListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
