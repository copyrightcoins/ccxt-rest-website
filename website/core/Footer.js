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
            <a href={this.docUrl('quickstart.html', this.props.language)}>
              Getting Started
            </a>
            <a href='/api.html'>
              API
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://github.com/ccxt-rest/ccxt-rest">GitHub</a>
            <a href="https://gitter.im/ccxt-rest/community">Project Chat</a>
            <a href="https://hub.docker.com/r/ccxtrest/ccxt-rest">Docker</a>
            <a href="https://npmjs.com/package/ccxt-rest">NPM</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href={this.props.config.mainProjectRepoUrl}>GitHub</a>
            <a href="https://github.com/ccxt/ccxt">CCXT</a>
            <a
              className="github-button"
              href={this.props.config.mainProjectRepoUrl}
              data-icon="octicon-star"
              data-count-href="/ccxt-rest/ccxt-rest/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
