import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/action";
import fetchDataReducer from "./redux/reducers/fetchDataReducer";

export class App extends Component {
  constructor(props) {
    super(props)

    this.handlefetchData = this.handlefetchData.bind(this)
  }

  handlefetchData() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <button onClick={this.handlefetchData} className="btn btn-primary">Fetch</button>
        <table border="2px">
          <thead>
            <tr className="bg bg-primary">
              <th>Coins</th>
              <th>Name</th>
              <th>Price</th>
              <th>Market_cap</th>
              <th>Max supply</th>
            </tr>
          </thead>

          <tbody>
            {this.props.user.map((e) => {
              return (
                <tr key={e.id} className="bg-info">
                  <td><img src={e.image} className="rounded mx-auto d-block" ></img></td>
                  <th>{e.name}</th>
                  <th>{e.current_price}</th>
                  <th>{e.market_cap}</th>
                  <th>{e.max_supply}</th>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)