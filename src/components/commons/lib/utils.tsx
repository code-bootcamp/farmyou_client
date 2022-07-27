export const getDate = (value: Date) => {
  const createDate: Date = new Date(value);
  const year: string = String(createDate.getFullYear());
  const month: string = String(createDate.getMonth() + 1).padStart(2, "0");
  const date: string = String(createDate.getDate()).padStart(2, "0");
  const hours: string = String(createDate.getHours()).padStart(2, "0");
  const minutes: string = String(createDate.getMinutes()).padStart(2, "0");

  const today: Date = new Date();
  const todayYear: string = String(today.getFullYear());
  const todayMonth: string = String(today.getMonth() + 1).padStart(2, "0");
  const todayDate: string = String(today.getDate()).padStart(2, "0");

  if (todayYear === year && todayMonth === month && todayDate === date) {
    return `${month}/${date}`;
  } else {
    return `${year}-${month}-${date} ${hours}:${minutes}`;
  }
};
