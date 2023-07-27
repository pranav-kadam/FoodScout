import React, { useState, useEffect, useRef } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function AddReview() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const selectedOption = useRef(null);

  useEffect(() => {
    setRating(selectedOption.current.value);
  }, [selectedOption]);

  const handleSelectOption = (event) => {
    selectedOption.current = event.target.options[event.target.selectedIndex];
  };

  const [rating, setRating] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Validation check for name and reviewText
    if (!name.trim()) {
      setNameError("Name cannot be blank");
      return;
    }

    if (!reviewText.trim()) {
      setReviewError("Review cannot be blank");
      return;
    }

    // Reset error messages if fields are not empty
    setNameError("");
    setReviewError("");

    try {
      const response = await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>

          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>

            <select
              className="form-control"
              ref={selectedOption}
              onChange={handleSelectOption}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => {
              setReviewText(e.target.value);
              setReviewError("");
            }}
            id="Review"
            className="form-control"
          ></textarea>
          {reviewError && <div className="text-danger">{reviewError}</div>}
        </div>

        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
