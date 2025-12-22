// Fetchable data types

interface DateOfBirth {
  year: number;
  month: number;
  day: number;
}

interface Manager {
  id: string;
  first_name: string;
  last_name: string;
}

interface Visa {
  issuing_country: string;
  type: string;
  start_date: number;
  end_date: number;
}

export interface Employee {
  _id: string;
  isRemoteWork: boolean;
  user_avatar: string;
  first_name: string;
  last_name: string;
  first_native_name: string;
  last_native_name: string;
  middle_native_name: string;
  department: string;
  building: string;
  room: string;
  date_birth: any;
  desk_number: number;
  manager: Manager;
  phone: string;
  email: string;
  skype: string;
  cnumber: string;
  citizenship: string;
  visa: Visa[];
  role: string;
}

export const advancedKeys: readonly string[] = [
  "name",
  "email",
  "phone",
  "skype",
  "building",
  "room",
  "department",
];

export interface LoginResponse {
  message: string;
  user: Employee;
}

export interface SignUpResponse {
  message: string;
  payload: Payload;
}

export interface Payload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface ActionResponse {
  error?: string;
  message?: string;
}

// Context section

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  avatar: string;
}

export interface UserProfileContextType {
  user: UserProfile | undefined;
  login: (userData: Employee) => void;
  logout: () => void;
}

export interface UserProfileState {
  user: UserProfile | undefined;
}

///////////////

export interface RowProps {
  user: Employee;
  currentUser: UserProfile | undefined;
}


export type SearchMode = "basic" | "advanced";


export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  role: "employee" | "hr" | "admin";
  user_avatar: string;
}
