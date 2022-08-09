import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChangeCaptial = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return activeCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="drop-down">
            <select
              className="select"
              onChange={this.onChangeCaptial}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachCaptial => (
                <option
                  key={eachCaptial.id}
                  value={eachCaptial.id}
                  className="option"
                >
                  {eachCaptial.capitalDisplayText}
                </option>
              ))}
            </select>
            <h4 className="text">is capital of which country?</h4>
          </div>
          <p className="head">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
