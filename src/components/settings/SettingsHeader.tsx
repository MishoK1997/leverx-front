import { memo, useRef, FormEvent } from "react";
import { SearchIcon } from "../icons/ListIcons";
import { Employee } from "../../types";

type HeaderProps = {
  allUsers: Employee[];
  // onSearch: (results: Employee[]) => void
  onSearch: (term: string) => void;
};

/**
 *
 * @param onSearch par is the setter function that allows a parent component to display searched users
 * and pass @UseRoleRow component in order to display
 * @function basicSearchUtil The core basic search functionality
 */

const SettingsHeader = ({ onSearch }: HeaderProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();
    const value = searchRef.current?.value ?? "";
    onSearch(value);
  };

  return (
    <>
      <h1 className="header-title">ROLES & PERMISSIONS</h1>

      <div className="grid-row table-header">
        <form className="search-wrapper" onSubmit={searchHandler}>
          <SearchIcon className="search-icon-setting" />
          <input
            className="search-input"
            placeholder="Type to search"
            ref={searchRef}
          />
        </form>

        <h2 className="col-header">Address book role</h2>
        <h2 className="col-header">Admin</h2>
      </div>
    </>
  );
};

export default memo(SettingsHeader);
