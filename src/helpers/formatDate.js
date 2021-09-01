import moment from 'moment';

const formatDate = (value) => (
  moment(value).format('LL')
);

export default formatDate;
