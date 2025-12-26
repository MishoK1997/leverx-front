import "../scss/container.scss";
import ListHeader from "./UI/ListHeader";
import { useEmployeeSearch } from "../hooks/useFilterEmployee";
import MemoCards from "./Cards";
import MemoViewControls from "./UI/ViewControls";
import MemoSearchTabs from "./UI/SearchTabs";

import { ViewProvider } from "../context/ViewContext";
import SearchSection from "./SearchSection";
import { useGetUsersQuery } from "../store/api/usersApi";
import NotFound from "./NotFound";
import { useEffect } from "react";

/**
 * @useEmployeeSearch Custom hook that involves count, search and mode logics, URL based structure etc.
 * @useGetUsersQuery RTK Query that fetchs users list from a backend
 * @setMode Sets mode of search such as basic and advanced
 * @mode helps UI to hilight an active tab
 * @results Filtered data or all users as a default
 * @count sum of listed users
 * @activeBasicTerm and @activeAdvancedFilters are used to rerender entered data in search sections after refresh
 * ----------------------------------------------------------------------------
 * @ViewProvider allows switch view either grid or list
 * @SearchSection involves basic and advanced searches
 * There are passed all necessary functions
 * @ListHeader this component conditionally appears on a screen when the list view is active
 **/

export default function Portal() {


    useEffect(()=>{
      window.scrollTo(0,0);
    },[])


  const { data: allUsers = [], isLoading } = useGetUsersQuery();

  const {
    results,
    count,
    basicSearch,
    advancedSearch,
    setMode,
    mode,
    activeBasicTerm,
    activeAdvancedFilters,
  } = useEmployeeSearch(allUsers);

  if (isLoading){
    return <div id="progress-detail">Lever<span id="x">X</span></div>;
  
  }

  if(isLoading){
    return <div id="progress-detail">Lever<span id="x">X</span></div>;
  }

  return (
    <ViewProvider>
      <aside className="sidebar">
        <MemoSearchTabs mode={mode} setMode={setMode} />
        <MemoViewControls count={count} />
      </aside>

      <div className="content-container">
        <SearchSection
          basicSearch={basicSearch}
          advancedSearch={advancedSearch}
          mode={mode}
          activeBasicTerm={activeBasicTerm}
          activeAdvancedFilters={activeAdvancedFilters}
        />
        <main>
          <ListHeader />
          <MemoCards allUsers={results} />
        </main>
      </div>
    </ViewProvider>
  );
}
