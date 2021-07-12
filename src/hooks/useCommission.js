import moment from 'moment';

const useCommission = (value, days) => {
  const showPayDay = () => {
    moment.locale();
    return moment().add(days, 'days').format('DD.MM.YYYY');
  };

  const commission = () => (days * value) / 100;

  const overallPayment = () => value + commission();

  return { showPayDay, commission, overallPayment };
};

export default useCommission;
