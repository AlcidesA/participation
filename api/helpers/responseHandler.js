export const successMessage = (data) => {
  return {
    data,
    success: true,
    errorMessage: undefined
  };
};

export const errorMessage = (errorMessage) => {
  return {
    data: undefined,
    success: false,
    errorMessage: errorMessage
  };
};
