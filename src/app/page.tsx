"use client";

import "./styles/app.scss";
import { askAI } from "./services/AI";
import { useEffect, useState } from "react";
import { Logo } from "./components/Logo";
import { SearchForm } from "./components/SearchForm";
import { SearchSpinner } from "./components/SearchSpinner";
import { SearchResults } from "./components/SearchResults";
import { AIResults, SearchPhrase } from "./types/types";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchPhrases, setSearchPhrases] = useState<SearchPhrase[]>();
  const [results, setResults] = useState<AIResults | null>();
  const urlParams = useSearchParams();
  const urlSearchPhrases = urlParams.getAll("q");

  useEffect(() => {
    if (isValidUrlSearchPhrases(urlSearchPhrases)) {
      setSearchPhrases(urlSearchPhrases);
      window.history.replaceState(null, "", "/");
    }
  }, []);

  const isValidUrlSearchPhrases = (phrases: any) => {
    if (phrases?.length === 2) {
      return (
        phrases.filter((phrase: any) => phrase && typeof phrase === "string")
          .length === 2
      );
    }
    return false;
  };

  const handleFormSubmit = async (values: SearchPhrase[]) => {
    setIsSearching(true);
    setSearchPhrases(values);
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
          initialValues={searchPhrases}
          onFormSubmit={handleFormSubmit}
        ></SearchForm>
      )}

      {isSearching && <SearchSpinner></SearchSpinner>}

      {results && searchPhrases && (
        <SearchResults
          results={results}
          searchPhrases={searchPhrases}
          onBackClick={() => setResults(null)}
        ></SearchResults>
      )}

      <footer>
        <small>
          With <i className="fa fa-heart"></i> by
          <a href="https://www.slicvic.com">slicvic.com</a>
        </small>
      </footer>
    </div>
  );
}
