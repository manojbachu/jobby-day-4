import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import ProfileAndSortOptions from '../ProfileAndSortOptions'
import JobsList from '../JobsList'

import './index.css'

class Jobs extends Component {
  state = {searchInput: '', searchValue: ''}

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchValue, searchInput} = this.state

    return (
      <>
        <Header />
        <div className="jobs">
          <div className="jobs-search-container search-sm">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearch}
              value={searchInput}
            />

            <button
              type="button"
              data-testid="searchButton"
              className="search-button"
              onClick={this.onClickSearch}
            >
              <BsSearch className="search-icon" />
            </button>
          </div>
          <div className="jobs-container">
            <ProfileAndSortOptions />
            <>
              <div className="jobs-search-container search-lg">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                  value={searchInput}
                />
                <button
                  type="button"
                  data-testid="searchButton"
                  className="search-button"
                  onClick={this.onClickSearch}
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
              <JobsList searchValue={searchValue} />
            </>
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
