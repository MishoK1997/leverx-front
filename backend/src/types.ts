export interface Visa {
  issuing_country: string;
  type: string;
  start_date: string;
  end_date: string;
}

export interface Manager {
  id: string;
  first_name: string;
  last_name: string;
}

export interface DateBirth {
  year: string;
  month: string;
  day: string;
}

export interface User {
  _id: string;
  isRemoteWork: boolean | null;
  user_avatar: string;
  first_name: string;
  last_name: string;
  first_native_name: string;
  last_native_name: string;
  middle_native_name: string;
  department: string;
  building: string;
  room: string;
  date_birth: DateBirth;
  desk_number: string;
  manager: Manager;
  phone: string;
  email: string;
  skype: string;
  cnumber: string;
  citizenship: string;
  visa: Visa[];
  role: string;
  password?: string;
}
