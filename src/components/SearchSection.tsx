import BasicSearch from "./search/BasicSearch";
import { AdvancedSearch } from "./search/AdvancedSearch";

import {SearchMode} from "../types"

type AdvancedFilters = {
  [key: string]: string | number | boolean;
};

type SearchSectionProps = {
  basicSearch: (term: string) => void;
  advancedSearch: (filters: AdvancedFilters) => void;
  mode: SearchMode;
  activeBasicTerm: string;
  activeAdvancedFilters: AdvancedFilters;
};


/**
 * @SearchSection component displays conditionally the basic or advanced search tabs
 * This component receives search and mode setter functions as props, prepare and attach to
 * the relevant search component
 *
 * @function handleBasicSearch uses @useFilterEmployee 's filter search eventually
 * @function handleAdvancedSearch same happens with this.
 */

export default function SearchSection({
  basicSearch,
  advancedSearch,
  mode,
  activeBasicTerm,
  activeAdvancedFilters,
  }: SearchSectionProps) {

  const handleBasicSearch = (term: string) => {
      basicSearch(term);
    }

const handleAdvancedSearch = (filters: AdvancedFilters) => {
  advancedSearch(filters);
};


  return mode === "basic" ? (
    <BasicSearch onSearch={handleBasicSearch} defaultValue={activeBasicTerm} />
  ) : (
    <AdvancedSearch
      onSearch={handleAdvancedSearch}
      defaultValues={activeAdvancedFilters}
    />
  );
}
