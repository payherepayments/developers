/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('embed-sdk.html')}>
              Embed SDK
            </a>
            <a href={this.docUrl('api.html')}>
              API Reference
            </a>
          </div>
          <div>
            <h5>PayHere</h5>
            <a href={this.pageUrl('help.html')}>
              Help
            </a>
            <a href="https://payhere.co/signups/new">
              Signup free
            </a>
            <a href="https://payhere.co/">Features</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://medium.com/payhere">Our Blog</a>
            <a href="https://github.com/payherepayments">GitHub</a>
            <a
              href="https://twitter.com/payherepayments"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
