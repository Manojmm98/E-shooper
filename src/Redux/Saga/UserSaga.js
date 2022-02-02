import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const apiUrl = "products.json";

const productsData = async () => {
  try {
    let response = await axios.get(apiUrl);
    let data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchProducts(action) {
  try {
    // we got all the users data from productsData
    const users = yield call(productsData);
    // we put all the data and dispatch it to store on sucess action
    yield put({ type: "GET_USERS_SUCESS", users: users });
  } catch (error) {
    // if any error occurs we dispatch error message to store
    yield put({ type: "GET_USERS_FAILURE", message: error.message });
  }
}

// we pass the fetched products on request action called
function* UserSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchProducts);
}

export default UserSaga;
