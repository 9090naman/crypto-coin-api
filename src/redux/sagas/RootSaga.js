import { take, call, all } from 'redux-saga/effects'

import { watchFetchDataSaga } from './fetchDataSaga'

function* RootSaga() {
    yield all([
        watchFetchDataSaga()
    ])
}

export default RootSaga