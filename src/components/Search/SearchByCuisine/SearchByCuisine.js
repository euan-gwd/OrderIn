import React from "react";
import { Route } from "react-router-dom";
import "../search_global_styles.css";

class SearchByCuisine extends React.PureComponent {
  render() {
    const { selectCuisine, cuisinesData } = this.props;
    return (
      <div className="searchByCuisine-container">
        <div className="well">
          <div className="inner-grid-header">
            <i className="fa fa-icon fa-cutlery" />
            Search by Cuisine
          </div>
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
