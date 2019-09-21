import gql from 'graphql-tag';

export const allLaunches = gql`
  {
    allLaunches {
      flightNumber
      missionName
    }
  }
`;
