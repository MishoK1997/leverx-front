import { useState } from "react";
import { AdvancedFilters } from "./search.types";

type Props = {
  onSearch: (filters: AdvancedFilters) => void;
  defaultValues: AdvancedFilters;
};

/**
 *
 * @onChange event listener on input allows to catch an input value
 * @filters state is for default values handle in order to display previously entered data when you refresh
 * @onSearch param is received core function intended to advanced search.
 */

export function AdvancedSearch({ onSearch, defaultValues }: Props) {
  const [filters, setFilters] = useState<AdvancedFilters>(defaultValues);

  const update = (key: keyof AdvancedFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <section id="advanced-search-section" className="search-bar">
      <form id="advanced-form" onSubmit={submit}>
        <label>Name</label>
        <input
          placeholder="John Smith"
          value={filters.name || ""}
          onChange={(e) => update("name", e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="m.k@laverx.com"
          value={filters.email || ""}
          type="email"
          onChange={(e) => update("email", e.target.value)}
        />

        <div className="phone-sk">
          <div className="phone-gp">
            <label>Phone</label>
            <input
              onChange={(e) => update("phone", e.target.value)}
              type="number"
              placeholder="Phone Number"
              value={filters.phone || ""}
            />
          </div>

          <div>
            <label>Skype</label>
            <input
              onChange={(e) => update("skype", e.target.value)}
              value={filters.skype || ""}
              placeholder="SkypeID"
            />
          </div>
        </div>

        <div className="building-room">
          <div className="building-gp">
            <label>Building</label>
            <select
              value={filters.building || ""}
              onChange={(e) => update("building", e.target.value)}
            >
              <option value="">Any</option>
              <option value=""></option>
            </select>
          </div>

          <div>
            <label>Room</label>
            <input
              value={filters.room || ""}
              onChange={(e) => update("room", e.target.value)}
              type="number"
              placeholder="303.1"
            />
          </div>
        </div>

        <label>Department</label>
        <select
          value={filters.department || ""}
          onChange={(e) => update("department", e.target.value)}
        >
          <option value="">Any</option>
          <option value=""></option>
        </select>

        <button className="search-btn" type="submit">
          SEARCH
        </button>
      </form>
    </section>
  );
}
