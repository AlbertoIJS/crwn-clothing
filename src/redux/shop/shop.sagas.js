import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import ShopActionsTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    // Collection named: 'collection' from firebase
    const collectionRef = firestore.collection('collections');
    // Snapshot from the collection
    const snapshot = yield collectionRef.get();
    // Convert the object to a map
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // Send collections to the store (Type: map) if the request succeeded
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    // Send the error to the store if there was a failure
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([fetchCollectionsStart()])
}