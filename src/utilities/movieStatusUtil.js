const getMonthAsWord = (releaseDate) => {
  switch (releaseDate.slice(5, 7)) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
    default:
      return '';
  }
};

const getOrdinalSuffix = (releaseDate) => {
  const dayNumber = releaseDate.slice(8, 10);
  switch (dayNumber.slice(1)) {
    case '1':
      return 'st';
    case '2':
      return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }
};

const getReleaseDateVerbiage = (releaseDate) => {
  const monthAsWord = getMonthAsWord(releaseDate);
  const ordinalSuffix = getOrdinalSuffix(releaseDate);
  const day = releaseDate.slice(8, 9) === '0' ? releaseDate.slice(9, 10) : releaseDate.slice(8, 10);
  const year = releaseDate.slice(0, 4);

  return `${monthAsWord} ${day}${ordinalSuffix}, ${year}`;
};

const getMovieStatusVerbiage = ({ status, release_date: releaseDate }) => {
  const releaseDateVerbiage = getReleaseDateVerbiage(releaseDate);

  switch (status) {
    case 'Released':
      return releaseDate ? `Released on ${releaseDateVerbiage}` : '';
    case 'Rumored':
      return releaseDate
        ? `Rumored to be released on ${releaseDateVerbiage}`
        : 'Rumored to be released on a future date.';
    case 'Planned':
      return releaseDate
        ? `Planned to be released on ${releaseDateVerbiage}`
        : 'Planned to be released on a future date.';
    case 'In Production':
      return releaseDate
        ? `In production, planned to be released on ${releaseDateVerbiage}`
        : 'In production, planned to be released on a future date.';
    case 'Post Production':
      return releaseDate
        ? `In post-production, planned to be released on ${releaseDateVerbiage}`
        : 'In post-production, planned to be released on a future date.';
    case 'Canceled':
      return 'Production and/or production for this film has been cancelled.';
    default:
      return '';
  }
};

export { getMovieStatusVerbiage };
