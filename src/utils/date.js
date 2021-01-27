const { addDays, subDays, isAfter, format } = globalThis.dateFns;

export const formatDate = (date) => {
  const formattedDate = format(date, "YYYY-MM-DD");
  return formattedDate;
};
/**
 * @description A api só aceita datas até o dia atual, use essa
 * função para validar
 */
export const dateIsAfterToday = (date) => {
  const today = new Date();
  return isAfter(date, today);
};

export const addDays;

export const subDays;
