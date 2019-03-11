import React, {Component} from 'react'
import Input from '../common/Input'
import toastr from 'toastr'
import createProductValidator from '../../utils/createProductValidator'
import {createProductValidationFunc} from '../../utils/formValidator'
import {createProductAction} from '../../actions/productsActions'
import {redirectAction} from '../../actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class CreatePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      price: '',
      image: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.createProductError.hasError) {
      toastr.error(nextProps.createProductError.message)
    } else if (nextProps.createProductSuccess) {
      this.props.redirect()
      toastr.success('Computer created successfully')
      this.props.history.push('/store')
    }
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    if (!createProductValidator(this.state.title, this.state.description, 
	this.state.image, this.state.price)) {
      return
    }
    this.props.createProduct(this.state.title, this.state.description, 
	this.state.image, this.state.price)
  }

  render () {
    let validObj = createProductValidationFunc(
      this.state.title,
      this.state.description,
      this.state.image,
      this.state.price
    )

    return (
      <div className='form-wrapper'>
        <h1>Create New Computer</h1>
        <form onSubmit={this.onSubmit}>
              <Input
                type='text'
                name='title'
                label='Title'
                placeholder='Enter computer title'
                value={this.state.title}
                onChange={this.onChange}
                valid={validObj.validTitle} />
              <Input
                type='text'
                name='description'
                label='Description'
                placeholder='Enter computer description'
                value={this.state.description}
                onChange={this.onChange}
                valid={validObj.validDescription} />
              <Input
                type='text'
                name='image'
                label='Image URL'
                placeholder='Enter computer image URL'
                value={this.state.image}
                onChange={this.onChange}
                valid={validObj.validImage} />
              <Input
                type='number'
                name='price'
                label='Price'
                placeholder='Enter computer price'
                value={this.state.price}
                onChange={this.onChange}
                valid={validObj.validPrice} />
              <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    createProductSuccess: state.createProduct.success,
    createProductError: state.createProductError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createProduct: (title, description, image, price) => {
      dispatch(createProductAction({title, description, image, price}))
    },
    redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePage))
