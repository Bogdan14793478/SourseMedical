export interface AuthFormData {
  name: string;
  password: string;
}

export interface FormAuthProps {
  param: (data: AuthFormData) => any;
}
