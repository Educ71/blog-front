const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const validateEmail = (email: string): boolean => {
  if (!email || !emailRegex.test(email)) {
    return false;
  }

  return true;
};

export const validatePassword = (password: string): boolean => {
  if (!password || !passwordRegex.test(password)) {
    return false;
  }

  return true;
};
