import { Component } from "react";
import { connect } from "react-redux";

export default function requireAuth(ChildComponent) {
  class ComposedComponent extends Component {
    //our component just got rendered
    componentDidMount() {}
    //ourr component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
}
