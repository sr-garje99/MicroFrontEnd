import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error or send it to a monitoring service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>waiting remote to start...</h2>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
