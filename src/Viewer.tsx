import * as React from 'react';
import { createPortal } from 'react-dom';
import ViewerCore from './ViewerCore';
import ViewerProps from './ViewerProps';

interface ViewerState {
  container: HTMLElement | null;
  component: any;
}

export default class Viewer extends React.Component<ViewerProps, ViewerState> {
  private defaultContainer: HTMLElement;

  constructor(props: ViewerProps) {
    super(props);

    this.defaultContainer = document.createElement('div');
    this.state = {
      container: props.container || this.defaultContainer,
      component: null,
    };
  }

  componentDidMount() {
    if (!this.props.container) {
      document.body.appendChild(this.defaultContainer);
    }
  }

  componentDidUpdate(prevProps: ViewerProps) {
    // Handle container changes
    if (this.props.container !== prevProps.container) {
      if (prevProps.container === null && this.defaultContainer.parentNode) {
        // Remove default container if we're switching to a provided container
        document.body.removeChild(this.defaultContainer);
      } else if (this.props.container === null) {
        // Add default container if we're switching back to it
        document.body.appendChild(this.defaultContainer);
      }

      this.setState({
        container: this.props.container || this.defaultContainer,
        component: null,
      });
    }
  }

  componentWillUnmount() {
    const { visible, onClose } = this.props;
    if (visible && onClose) {
      onClose();
    }
    this.removeViewer();
  }

  removeViewer() {
    if (!this.props.container && this.defaultContainer.parentNode) {
      document.body.removeChild(this.defaultContainer);
    }
    this.setState({
      component: null,
    });
  }

  handlePortalCallback = () => {
    if (!this.state.component) {
      this.setState({ component: this });
    }
  }

  render() {
    const { visible } = this.props;
    const { container, component } = this.state;

    if (!visible && !component) {
      return null;
    }

    if (!container) {
      return null;
    }

    return createPortal(<ViewerCore {...this.props} />, container);
  }
}
