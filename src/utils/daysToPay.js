const daysToPay = (created, days) => {
  const result = new Date(created);
  result.setDate(result.getDate() + days);
  return result.toLocaleDateString();
};

export default daysToPay;
