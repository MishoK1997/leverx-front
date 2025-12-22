import { Employee } from "../src/types";

export const dateObjToString = (dateObj?: Employee['date_birth']): string => {
  if (!dateObj || !dateObj.year) return "";
  
  const y = dateObj.year;
  const m = String(dateObj.month).padStart(2, "0");
  const d = String(dateObj.day).padStart(2, "0");
  
  return `${y}-${m}-${d}`;
};


export const stringToDateObj = (dateStr: string): Employee['date_birth'] => {
  if (!dateStr) {
    const now = new Date();
    return { 
        day: now.getDate(), 
        month: now.getMonth() + 1, 
        year: now.getFullYear() 
    };
  }

  const [year, month, day] = dateStr.split("-").map(Number);

  return { 
    day, 
    month, 
    year 
  };
};