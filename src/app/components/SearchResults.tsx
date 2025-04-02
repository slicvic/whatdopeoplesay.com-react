import { Fragment, useEffect, useState } from "react";
import { AIResults, SearchTerm } from "../types/types";

type Props = {
  results: AIResults;
  searchTerms: SearchTerm[];
  onBackClick: () => void;
};

export const SearchResults = ({ results, searchTerms, onBackClick }: Props) => {
  const [shareUrl, setShareUrl] = useState("");
  const [didCopyShareUrl, setDidCopyShareUrl] = useState(false);

  useEffect(() => {
    const baseUrl = window.location.origin;
    const query = `?q=${encodeURIComponent(
      searchTerms[0]
    )}&q=${encodeURIComponent(searchTerms[1])}`;
    setShareUrl(baseUrl + query);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDidCopyShareUrl(false);
    }, 1000);
  }, [didCopyShareUrl]);

  const handleCopyClick = async () => {
    try {
      await window.navigator.clipboard.writeText(shareUrl);
      setDidCopyShareUrl(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SearchResults">
      <div className="results-section wdps-box my-4">
        {!results.winner && (
          <div className="results-row tie mb-3">
            <div className="heading">
              <span>Tie!</span>
            </div>
            <small>{results.analysis}</small>
          </div>
        )}
        {searchTerms.map((term, index) => {
          const isWinner = results.winner === index + 1;
          return (
            <Fragment key={index}>
              <div className={`results-row ${isWinner ? "winner" : ""}`}>
                <div className="heading">
                  {isWinner && <i className="fas fa-check me-2"></i>}
                  {term}
                </div>
                {isWinner && <small>{results.analysis}</small>}
              </div>
              {index < searchTerms.length - 1 && (
                <div className="results-row versus-divider my-3">vs</div>
              )}
            </Fragment>
          );
        })}
      </div>

      <div className="share-section mb-4">
        <h6 className="heading">
          <span>Share</span>
        </h6>
        <form>
          <div className="input-group">
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={shareUrl}
            />
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={handleCopyClick}
            >
              {didCopyShareUrl ? "Copied!" : "Copy"}
            </button>
          </div>
        </form>
      </div>

      <button
        type="button"
        className="back-button btn btn-link"
        onClick={onBackClick}
      >
        Try again!
      </button>
    </div>
  );
};
