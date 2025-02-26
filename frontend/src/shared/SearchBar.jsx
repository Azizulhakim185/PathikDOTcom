import React, { useRef } from "react";
import './search-bar.css';
import { Col, FormGroup } from "reactstrap"; // Import Col and FormGroup from Reactstrap

const SearchBar = () => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert("All fields are required!");
        }

        console.log(`Searching for: Location - ${location}, Distance - ${distance}, Max Group Size - ${maxGroupSize}`);
    };

    return (
        <Col lg="12" className="search_bar"> {/* Use Col here, and lg="12" for full width */}
            <div className="d-flex align-items-center gap-4">
                {/* Form Group for Location */}
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                        <i className="ri-map-pin-line"></i> {/* Use appropriate icons */}
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef} />
                    </div>
                </FormGroup>

                {/* Form Group for Distance */}
                <FormGroup className="d-flex gap-3 form_group form_group-last">
                    <span>
                        <i className="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef} />
                    </div>
                </FormGroup>

                {/* Form Group for Max People */}
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                        <i className="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>

                {/* Search Icon */}
                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i className="ri-search-line"></i>
                </span>
            </div>
        </Col>
    );
};

export default SearchBar;
