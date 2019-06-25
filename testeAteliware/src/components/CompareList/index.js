/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './style';

const CompareList = ({ repositorios }) => (
  <Container>
    {repositorios.map(repositorio => (
      <Repository key={repositorio.id}>
        <header>
          <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
          <strong>{repositorio.name}</strong>
          <small>{repositorio.owner.login}</small>
        </header>
        <ul>
          <li>
            {repositorio.stargazers_count}
            <small> stars</small>
          </li>
          <li>
            {repositorio.forks_count}
            <small> forks</small>
          </li>
          <li>
            {repositorio.open_issues_count}
            <small> issues</small>
          </li>
          <li>
            {repositorio.LastCommit}
            <small> last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.prototype = {
  repositorios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
