import {FETCH_DATA_SUCCESS, 
CREATE_COMPUTER_SUCCESS, 
CREATE_COMPUTER_ERROR, 
EDIT_COMPUTER_SUCCESS, 
EDIT_COMPUTER_ERROR,
  DELETE_COMPUTER} from './actionTypes'
import {beginAjax, endAjax} from './ajaxStatusActions'
import {fetchProducts, createProduct, editProduct, deleteProduct} from '../api/remote'
import errorHandler from '../utils/errorHandler'

function fetchDataSuccess (data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  }
}

function createSuccess (data) {
  return {
    type: CREATE_COMPUTER_SUCCESS,
    data
  }
}

function createError (error) {
  return {
    type: CREATE_COMPUTER_ERROR,
    error
  }
}

function editSuccess (data) {
  return {
    type: EDIT_COMPUTER_SUCCESS,
    data
  }
}

function editError (error) {
  return {
    type: EDIT_COMPUTER_ERROR,
    error
  }
}

function deleteSuccess (id) {
  return {
    type: DELETE_COMPUTER,
    id
  }
}

function fetchProductsAction () {
  return async (dispatch) => {
    dispatch(beginAjax())
    const data = await fetchProducts()
    dispatch(fetchDataSuccess(data))
    dispatch(endAjax())
  }
}

function createProductAction (data) {
  return (dispatch) => {
    dispatch(beginAjax())
    return createProduct(data)
      .then(json => {
        if (json.success) {
          dispatch(createSuccess(json.data))
        } else {
          const error = errorHandler(json)
          dispatch(createError(error))
        }
        dispatch(endAjax())
      })
  }
}

function editProductAction (id, data) {
  return (dispatch) => {
    dispatch(beginAjax())
    return editProduct(id, data)
      .then(json => {
        if (json.success) {
          dispatch(editSuccess(json.data))
        } else {
          const error = errorHandler(json)
          dispatch(editError(error))
        }
        dispatch(endAjax())
      })
  }
}

function deleteProductAction (id) {
  return (dispatch) => {
    return deleteProduct(id)
      .then(json => {
        if (json.success) {
          dispatch(deleteSuccess(id))
        }
      })
  }
}






export {
  fetchProductsAction,
  createProductAction,
  editProductAction,
  deleteProductAction
}
