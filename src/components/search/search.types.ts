export type AdvancedFilters = {
  name?: string;
  email?: string;
  phone?: number;
  skype?: string;
  building?: string;
  room?: number;
  department?: string;
};

export type SearchMode = "basic" | "advanced";
