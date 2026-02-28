export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
export const isRequired = (value: any) => value !== undefined && value !== null && value !== '';