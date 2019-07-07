
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';
import { Contact, Courses, Home, pages, routeItem } from '../../moduleLoader';
import Nav from 'react-bootstrap/Nav';

/**
 * This function builds a list of main/top menu items (links) and of corresponding routes based on data, which in future it should receive from the server.
 */
const renderTopNavLinksAndRoutes= function(routesData){

    const pagesMap = {
        [pages.CONTACT]: Contact,
        [pages.COURSES]: Courses,
        [pages.HOME]: Home,
    };
    let links = [];
    let routes = [];
    for (const singleRouteData of routesData) {
        var CapitalizedComponent = pagesMap[singleRouteData[routeItem.COMPONENT]];
        if (!CapitalizedComponent) continue;
        links.push(
            <LinkContainer
                key={singleRouteData[routeItem.LINK]}
                to={singleRouteData[routeItem.LINK]}
            ><Nav.Link>{singleRouteData[routeItem.TEXT]}</Nav.Link>
             
             </LinkContainer>
        )
        routes.push(
            <Route
                key={singleRouteData[routeItem.LINK]}
                path={singleRouteData[routeItem.ROUTE]} 
                component={CapitalizedComponent}
                //{}exact={singleRouteData[routeItem.EXACT]}
            />
        )
    }

    return {'links':links,'routes':routes};
}

export { renderTopNavLinksAndRoutes };