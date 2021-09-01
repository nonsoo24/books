import moment from 'moment';

const formatDate = (value) => (
  moment(value).format('MMM Do YYYY, h:mm:ss a')
);

export default formatDate;
