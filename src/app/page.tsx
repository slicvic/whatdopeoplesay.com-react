"use client";

import "./styles/app.scss";
import { askAI } from "./services/AI";
import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { SearchForm } from "./components/SearchForm";
import { SearchSpinner } from "./components/SearchSpinner";
import { SearchResults } from "./components/SearchResults";
import { AIResults, SearchTerm } from "./types/types";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerms, setSearchTerms] = useState<SearchTerm[]>();
  const [results, setResults] = useState<AIResults | null>();
  const urlParams = useSearchParams();
  const urlSearchTerms = urlParams.getAll("q");

  useEffect(() => {
    if (urlSearchTerms.length > 1) {
      setSearchTerms(urlSearchTerms.slice(0, 2));
    }
    if (urlSearchTerms.length > 0) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  const handleFormSubmit = async (values: SearchTerm[]) => {
    setIsSearching(true);
    setSearchTerms(values);
    const results = await askAI(values);
    if (results) {
      setResults(results);
    } else {
      // TODO handle
    }
    setIsSearching(false);
  };

  return (
    <div className="app">
      <header>
        <Logo />
      </header>

      {!results && (
        <SearchForm
          initialValues={searchTerms}
          onFormSubmit={handleFormSubmit}
        ></SearchForm>
      )}

      {isSearching && <SearchSpinner></SearchSpinner>}

      {results && searchTerms && (
        <SearchResults
          results={results}
          searchTerms={searchTerms}
          onBackClick={() => setResults(null)}
        ></SearchResults>
      )}

      <footer style={{ display: "none" }}>
        <small>
          With <i className="fa fa-heart"></i> by
          <a href="https://www.slicvic.com">slicvic.com</a>
        </small>
      </footer>
    </div>
  );
}
