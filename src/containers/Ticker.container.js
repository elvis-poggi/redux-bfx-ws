import { connect } from 'react-redux'
import { tickerUpdate, tickerSnapshot } from '../redux/actionsCreators/tickers.actions'
import TickerList from '../components/TickerList'

const mapDispatchToProps = dispatch => {
  return {
    dispatch()
  }
}

const TickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TickerList)

export default TickerContainer
