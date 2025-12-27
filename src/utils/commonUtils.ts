import { Employee } from "../types";

// Get current user
export function getCurrUser<T>(): T | null {
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  if (!user) return null;
  try {
    return JSON.parse(user) as T;
  } catch (error: any) {
    console.error("Error parsing a user from storage:", error);
    return null;
  }
}

// Check if it's editable
export function canEdit(
  actor: Employee | null,
  target: Employee | null,
): boolean {
  if (actor?.role === "admin") return true;
  if (actor?._id === target?._id) return false;
  if (actor?.role === "hr" && target?.role === "employee") {
    return target?.manager.id === actor._id;
  }

  return false;
}

// Role editable checker

export function isRoleEditable(
  actor: Employee | null | undefined,
  target: Employee | null | undefined,
): boolean {
  if (actor?._id === target?._id) return false;
  if (actor?.role === "admin") return true;
  return false;
}

// Date formater

export const formatDateForInput = (dateObj: any) => {
  if (!dateObj) return "";
  const day = String(dateObj.day).padStart(2, "0");
  const month = String(dateObj.month).padStart(2, "0");
  return `${dateObj.year}-${month}-${day}`;
};
