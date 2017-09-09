import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCuisine extends React.Component {
  render() {
    const { selectCuisine, cuisinesData } = this.props;
    return (
      <div className="search-body">
        <div className="well">
          <h1 className="has-text-centered is-size-5-touch is-size-4-desktop">
            <i className="fa fa-cutlery" />
            Search by Cuisine
          </h1>
          <div className="inner-grid">
            {cuisinesData.map(cuisine => (
              <Route
                key={cuisine}
                render={props => (
                  <a
                    onClick={() => {
                      let getSlug = require("speakingurl");
                      let cuisineName = getSlug(`${cuisine}`);
                      selectCuisine(`${cuisineName}`);
                      props.history.push(`/Cuisine/${cuisineName}`);
                    }}
                    className="search-links"
                  >
                    {cuisine}
                  </a>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchByCuisine;
