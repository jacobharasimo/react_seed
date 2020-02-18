/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar) and layout
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { Flex, Box } from 'rebass';
import HomePage from '../homePage';
import { ErrorBoundary } from '../../components/errorBoundary';
import { Oops } from '../oops';
import { Header } from '../../components/header';
import Footer from '../../components/footer';

function Main() {
  return (
    <>
      <Helmet titleTemplate="Freedom Mobile | %s" defaultTitle="Freedom Mobile">
        <meta name="description" content="Freedom Mobile application" />
      </Helmet>
      <Flex flexDirection="column" height="100%">
        <ErrorBoundary>
          <Header />
          <Box flex="1 1 auto" sx={{ overflowY: 'auto' }} position="relative">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/404" component={Oops} />
            </Switch>
          </Box>
          <Footer />
        </ErrorBoundary>
      </Flex>
    </>
  );
}

Main.displayName = 'Main';

export default Main;
