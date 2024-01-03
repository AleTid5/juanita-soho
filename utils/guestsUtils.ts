type IFormatGuestOptions = {
  noInfants?: boolean;
};

export const formatGuests = (guests: any, options?: IFormatGuestOptions) => {
  if (!guests) return false;
  const { noInfants } = options || {};
  const { children, adults, infants, pets } = guests;
  const total = adults + children;
  if (!total) return 0;
  let template = `${total} guest`;
  if (total >= 2) template = `${total} guests`;
  if (infants && !noInfants) template += `, ${infants} infant`;
  if (pets && !noInfants) template += `, ${pets} pet`;
  return template;
};
