import React, {Component, Fragment} from 'react';
import Modal from "../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class WithError extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null
      };

      this.state.interceptorId = axios.interceptors.response.use(res => res, error => {
        this.setState({error});
        throw error;
      });
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.state.interceptorId);
    }

    dismissError = () => {
      this.setState({error: null});
    };

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <Modal show={!!this.state.error} close={this.dismissError}>
            {String(this.state.error)}
          </Modal>
        </Fragment>
      );
    }
  }
};

export default withErrorHandler;