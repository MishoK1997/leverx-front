import { Employee } from "../types";

export default function advancedSearchUtil(
  allUsers: Employee[],
  advancedFilters: any,
): Employee[] {
  return allUsers.filter((u) => {
    const fullName = `${u.first_name} ${u.last_name}`.toLowerCase();

    // Ensure we convert values to String() to handle numbers vs strings
    return (
      (!advancedFilters.name ||
        fullName.includes(advancedFilters.name.toLowerCase())) &&
      (!advancedFilters.email ||
        u.email?.toLowerCase().includes(advancedFilters.email)) &&
      (!advancedFilters.phone ||
        u.phone?.includes(String(advancedFilters.phone))) &&
      (!advancedFilters.skype ||
        u.skype?.includes(String(advancedFilters.skype))) &&
      (!advancedFilters.building || u.building === advancedFilters.building) &&
      (!advancedFilters.room ||
        u.room?.includes(String(advancedFilters.room))) &&
      (!advancedFilters.department ||
        u.department === advancedFilters.department)
    );
  });
}
