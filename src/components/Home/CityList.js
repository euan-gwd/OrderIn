import React, { Component } from "react";
import SuburbList from "./SuburbList";

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  handleCityBtnClick() {
    this.state.selected === false
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  }

  render() {
    const { name, city } = this.props;
    return (
      <div className="has-text-centered">
        <a>
          <button className="button is-danger" onClick={this.handleCityBtnClick.bind(this)}>
            {name}
          </button>
        </a>
        {this.state.selected ? <SuburbList city={city.suburbs} /> : null}
      </div>
    );
  }
}

export default CityList;
