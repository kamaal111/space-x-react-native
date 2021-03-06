import gql from 'graphql-tag';

const Cores = `
  coreSerial
  flight
  gridfins
  legs
  reused
  landingIntent
  landingType
  block
  landSuccess
  landingVehicle
`;

const FirstStage = `
  cores {
    ${Cores}
  }
`;

const OrbitParams = `
  referenceSystem
  regime
  longitude
  semiMajorAxisKm
  eccentricity
  periapsisKm
  apoapsisKm
  inclinationDeg
  periodMin
  lifespanYears
  epoch
  meanMotion
  raan
  argOfPericenter
  meanAnomaly
`;

const Payload = `
  payloadId
  reused
  nationality
  manufacturer
  payloadType
  payloadMassKg
  payloadMassLbs
  orbit
  customers
  noradId
  orbitParams {
    ${OrbitParams}
  }
`;

const SecondStage = `
  block
  payload {
    ${Payload}
  }
`;

const Fairings = `
  reused
  recoveryAttempt
  recovered
  ship
`;

const Rocket = `
  rocketId
  rocketName
  rocketType
  firstStage {
    ${FirstStage}
  }

  secondStage {
    ${SecondStage}
  }

  fairings {
    ${Fairings}
  }
`;

const LaunchSite = `
  siteId
  siteName
  siteNameLong
`;

const Links = `
  missionPatch
  redditCampaign
  redditLaunch
  redditRecovery
  redditMedia
  presskit
  articleLink
  redditMedia
  presskit
  articleLink
  wikipedia
  videoLink
  flickrImages
`;

const AllLaunches = `
  flightNumber
  missionName
  upcoming
  launchYear
  launchDateUnix
  isTentative
  tentativeMaxPrecision
  tbd
  missionId
  launchWindow
  ships
  launchSuccess
  details
  upcoming
  staticFireDateUnix

  rocket {
    ${Rocket}
  }

  launchSite {
    ${LaunchSite}
  }

  links {
    ${Links}
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const allLaunches = gql`
  {
    allLaunches {
      ${AllLaunches}
    }
  }
`;
