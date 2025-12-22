import { useRef, FormEvent } from "react";
import { SearchIcon } from "../icons/ListIcons";

type Props = {
  onSearch: (value: string) => void;
  defaultValue?: string;
};

/**
 *
 * @param onSearch receives basic search handler
 * @inputRef  Takes a value of input that is passed into the search function
 *
 */

export default function BasicSearch({ onSearch, defaultValue = "" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const value = inputRef.current?.value || "";
    onSearch(value);
  };

  return (
    <section id="basic-search-section" className="search-bar">
      <form className="basic-search" onSubmit={handleSubmit}>
        <SearchIcon />

        <input
          id="basic-name"
          ref={inputRef}
          type="text"
          placeholder="Jhon Smith"
          defaultValue={defaultValue}
        />

        <button type="button" className="search-btn" onClick={handleSubmit}>
          SEARCH
        </button>
      </form>
    </section>
  );
}
