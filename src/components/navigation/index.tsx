import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import AuthorAvatarLink from './AuthorAvatarLink';
import { ActiveBreakpointContext } from '../breakpoints';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

function Navigation({ ...otherProps }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          topNavigationRoutes {
            to
            display
          }
        }
      }
    }
  `);

  const { topNavigationRoutes: routes } = data.site.siteMetadata;
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const isDesktop = activeBreakpoint === 'desktop';

  return (
    <nav
      css={css`
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 0.5rem;
        max-width: 50rem;
      `}
      {...otherProps}
    >
      <AuthorAvatarLink to="/" />
      {isDesktop ? (
        <DesktopNavigation routes={routes} />
      ) : (
        <MobileNavigation routes={routes} />
      )}
    </nav>
  );
}

export default Navigation;
