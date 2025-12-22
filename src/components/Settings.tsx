import { useCallback, useEffect, useMemo } from "react";
import SettingsHeader from "./settings/SettingsHeader";
import UserRoleRow from "./settings/UserRoleRow";
import "../scss/settings.scss";
import { useGetUsersQuery } from "../store/api/usersApi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate, redirect, useSearchParams } from "react-router-dom";
import basicSearchUtil from "../utils/basicSearchUtil";

/**
 * @function handleRoleUpdate is responsible to update active buttons those are represented in @UserRoleRow
 * @function handleSearchResults sets searched result in @displayedUsers state
 */

export default function Settings() {

  const currentUser = useSelector((state: RootState) => state.auth.user);

  if(currentUser?.role !== "admin") return <Navigate to="/sign-in" replace />

  const { data: allUsers = [], isLoading } = useGetUsersQuery();


  // Allows handle search with URL
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])

  const displayedUsers = useMemo(() => {
    if (!searchTerm.trim()) return allUsers;
    return basicSearchUtil(allUsers, searchTerm);
  }, [allUsers, searchTerm]);

  /// Updates URL
  const handleSearch = useCallback(
    (term: string) => {
      if (term) setSearchParams({ search: term });
      else setSearchParams({});
    },
    [setSearchParams],
  );
  if(isLoading){
    return <div id="progress-detail">Lever<span id="x">X</span></div>;
  }

  return (
    <div className="settings-container">
      <div className="card">
        <SettingsHeader allUsers={allUsers} onSearch={handleSearch} />

        <div className="settings-rows-wrapper">
          {displayedUsers.map((user) => (
            <UserRoleRow key={user._id} user={user} currentUser={currentUser} />
          ))}

          {(displayedUsers.length === 0 && !isLoading)&& (
            <div className="no-results">
              There are only two industries that call their customers "users"
              illegal drugs and software{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
