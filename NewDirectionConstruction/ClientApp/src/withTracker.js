/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React, { Component } from 'react';

export default function withTracker(WrappedComponent) {
    const trackPage = (page) => {
        window.gtag('send', 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    };

    const HOC = class extends Component {
        componentDidMount() {
            const {
                location: { pathname: page }
            } = this.props;
            trackPage(page);
        }

        // eslint-disable-next-line camelcase
        UNSAFE_componentWillReceiveProps(nextProps) {
            const {
                location: { pathname: currentPage }
            } = this.props;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
}