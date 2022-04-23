import React, { Component } from "react";

import ErrorBoundarySvg from "./ErrorBoundarySvg";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo }, () => {
      console.table({ error, errorInfo });
      console.log(this.state.error.message);
    });
  }

  sendErrorReport = () => {
    alert("Report Sent! Thanks for reporting this error");
  };

  render() {
    if (this.state.hasError) {
      return <ErrorBoundarySvg />;
    }
    return this.props.children;
  }
}
