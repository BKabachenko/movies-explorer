import type React from 'react';
import { Component } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
interface ErrorBoundaryState {
  isError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { isError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error);
    console.info(info);
  }

  render() {
    if (this.state.isError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className='flex justify-center pt-10 text-xl'>
          Something went wrong. Please reload the page.
        </div>
      );
    }

    return this.props.children;
  }
}
