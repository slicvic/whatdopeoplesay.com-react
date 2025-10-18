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
  const [apiError, setApiError] = useState("");
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
    setApiError("");
    try {
      const results = await askAI(values);
      setResults(results);
    } catch (error) {
      setApiError("Something went wrong. Please try again.");
      console.log(error);
    }
    setIsSearching(false);
  };

  return (
    <div className="app">
      <header>
        <Logo />
      </header>

      {apiError && (
        <div className="alert alert-danger mt-4 mb-0 fs-5" role="alert">
          <i className="fa fa-triangle-exclamation me-1"></i> {apiError}
        </div>
      )}

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
          onBackClick={() => {
            setSearchTerms(["", ""]);
            setResults(null);
          }}
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
