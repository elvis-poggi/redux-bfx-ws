import { connect } from 'react-redux'
import { tradeMessage } from '../redux/actionsCreators/trades.actions'
import TradeList from '../components/TickerList'

const mapDispatchToProps = dispatch => {
  return {
    dispatch()
  }
}

const TradeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeList)

export default TradeContainer
