export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
export const validatePassword = (pass: string) => /^(?=.*[a-z])(?=.*\d).{8,}$/i.test(pass);
