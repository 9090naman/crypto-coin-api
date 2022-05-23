import axios from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { types } from '../types'
import { fetchDataSuccess } from '../action'

function* asyncFetchRequest(action) {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false${action.payload}`
        const response = yield call(() => axios.get(url));
        console.log(response.data.map((e) => {
            return (
                e.name
            )
        }));
        yield put(fetchDataSuccess(response.data))

    }
    catch (error) {
        console.log(error)
    }
}
export function* watchFetchDataSaga() {
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}