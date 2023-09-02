export const delay = (time: number = 500) =>
  new Promise(res => {
    setTimeout(() => {
      res('resolved');
    }, time);
  });

export const getErrorMessage = (error: any): string => {
  if (error?.response?.data?.error?.message) {
    return error?.response?.data?.error?.message;
  } else if (error.message === 'Network Error') {
    return 'Please check your internet connection!';
  } else if (error?.message) {
    return error.message;
  }
  return 'Something went wrong';
};
