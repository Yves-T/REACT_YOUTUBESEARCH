import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChanged(event.target.value)}/>
            </div>
        );
    }

    onInputChanged(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

SearchBar.propTypes = {
    onSearchTermChange: React.PropTypes.func.isRequired
};

export default SearchBar;
