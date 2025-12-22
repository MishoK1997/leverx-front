import { useMemo } from "react";
import { AdvancedFilters, SearchMode } from "../components/search/search.types";
import basicSearchUtil from "../utils/basicSearchUtil";
import advancedSearchUtil from "../utils/advancedSearchUtil";
import { useSearchParams } from "react-router-dom";
import { Employee } from "../types";

/**
 *
 * @useGetUsersQuery return all users from the backend with RTK Query
 * @useSearchParams allows handle URL
 * @function basicSearchUtil The core basic search function
 * @function advancedFilters this util contains a core handling functionality
 */

export function useEmployeeSearch(allUsers: Employee[] = []) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initial state management --------------

  // Determine initial mode based on URL
  const mode = (searchParams.get("mode") as SearchMode) || "basic";

  // Determine initial basic term from the url
  const basicTerm = searchParams.get("search") || "";

  // Determine initial advanced filters
  const advancedFilters = useMemo(() => {
    const filters: AdvancedFilters = {};
    const allowedKeys = [
      "name",
      "email",
      "phone",
      "skype",
      "building",
      "room",
      "department",
    ];

    allowedKeys.forEach((key) => {
      const val: any = searchParams.get(key);
      if (val) filters[key as keyof AdvancedFilters] = val;
    });
    return filters;
  }, [searchParams]);

  const results = useMemo(() => {
    if (mode === "basic") {
      if (!basicTerm.trim()) return allUsers;
      return basicSearchUtil(allUsers, basicTerm);
    } else return advancedSearchUtil(allUsers, advancedFilters);
  }, [mode, basicTerm, advancedFilters, allUsers]);

  const setBasicSearch = (term: string) => {
    if (term) {
      setSearchParams({ mode: "basic", search: term });
    } else {
      setSearchParams({ mode: "basic" });
    }
  };

  const setAdvancedSearch = (filters: AdvancedFilters) => {
    const params: any = { mode: "advanced", ...filters };

    Object.keys(params).forEach(
      (key) => params[key] === undefined && delete params[key],
    );

    setSearchParams(params);
  };

  const setMode = (newMode: SearchMode) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("mode", newMode);
    setSearchParams(newParams);
  };

  return {
    results,
    count: results.length,
    mode,
    basicSearch: setBasicSearch,
    advancedSearch: setAdvancedSearch,
    activeBasicTerm: basicTerm,
    activeAdvancedFilters: advancedFilters,
    setMode,
  };
}
