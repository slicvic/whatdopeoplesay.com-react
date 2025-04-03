import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { SearchTerm } from "../types/types";

const VALUE_MIN_LENGTH = 3;
const VALUE_MAX_LENGTH = 200;
const VALUE_INVALID_MESSAGE = "3 characters minimum, let's do this!";
const VALUE_DUPLICATE_MESSAGE = "No duplicates allowed.";

type FormErrorMessage = string;

type Props = {
  initialValues?: SearchTerm[];
  onFormSubmit?: (values: SearchTerm[]) => void;
};

const validateValue = (value: string): boolean => {
  if (typeof value !== "string") {
    return false;
  }
  value = value.trim();
  const isValid =
    value.length >= VALUE_MIN_LENGTH && value.length <= VALUE_MAX_LENGTH;
  return isValid;
};

const validateForm = (values: string[]): FormErrorMessage => {
  const valuesAreValid = values.every((value) => validateValue(value));
  if (valuesAreValid) {
    const duplicates = new Map();
    values.forEach((value) => duplicates.set(value.trim().toLowerCase(), true));
    const hasDuplicateValues = duplicates.size !== values.length;
    if (hasDuplicateValues) {
      return VALUE_DUPLICATE_MESSAGE;
    } else {
      return "";
    }
  } else {
    return VALUE_INVALID_MESSAGE;
  }
};

export const SearchForm = ({ initialValues, onFormSubmit }: Props) => {
  const [values, setValues] = useState<string[]>(["", ""]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialValues?.length === values.length) {
      const valid = initialValues.filter((value) => validateValue(value));
      if (valid.length === values.length) {
        setValues(valid.map((value) => value));
      }
    }
  }, [initialValues]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const error = validateForm(values);
    setErrorMessage(error);
    if (error === "") {
      onFormSubmit?.(values);
    }
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const index = Number(target.dataset.index);
    const newValues = [...values];
    newValues[index] = target.value;
    setValues(newValues);
    setErrorMessage("");
  };

  return (
    <div className="SearchForm">
      <form action="#" className="mt-4 mt-md-5" onSubmit={handleSubmit}>
        <div className="field-group">
          <input
            type="text"
            data-index="0"
            value={values[0]}
            maxLength={VALUE_MAX_LENGTH}
            placeholder="Ex: Jordan is the GOAT"
            onChange={handleFieldChange}
            className="form-control"
          />
        </div>

        <div className="versus-divider my-3">vs</div>

        <div className="field-group">
          <input
            type="text"
            data-index="1"
            value={values[1]}
            maxLength={VALUE_MAX_LENGTH}
            placeholder="Ex: LeBron is the GOAT"
            onChange={handleFieldChange}
            className="form-control"
          />
        </div>

        {errorMessage && (
          <div className="alert alert-danger mt-4 mb-0 fs-5" role="alert">
            <i className="fa fa-triangle-exclamation me-1"></i> {errorMessage}
          </div>
        )}

        <button type="submit" className="btn btn-link mt-2">
          Go!
        </button>
      </form>

      <div className="info-text mt-2 text-secondary">
        <i className="fa fa-info-circle me-2 fs-5"></i>
        <span>
          Compare two{" "}
          <em>
            words, phrases, expressions, ideas, beliefs, opinions, or views
          </em>{" "}
          to see which is more widely accepted.
        </span>
      </div>
    </div>
  );
};
