export const formatDate = (date: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};
  