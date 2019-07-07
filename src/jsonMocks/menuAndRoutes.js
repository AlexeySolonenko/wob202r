
import { pages, routeItem, routeKinds, routesData, servRes } from "../moduleLoader";

const menuAndRoutes = {
    [servRes.DATA]: [
        {
            [routesData.KIND]: routeKinds.TOP,
            [routesData.ITEMS]: [
                {
                    [routeItem.COMPONENT]:pages.HOME,
                    [routeItem.ROUTE]: '/home',
                    [routeItem.LINK]: '/home',
                    [routeItem.TEXT]: 'Home',
                    [routeItem.EXACT]: true,
                },
                {
                    [routeItem.COMPONENT]:pages.COURSES,
                    [routeItem.ROUTE]: '/courses',
                    [routeItem.LINK]: '/courses',
                    [routeItem.TEXT]: 'Courses',
                    [routeItem.EXACT]: true,
                },
                {
                    [routeItem.COMPONENT]:pages.CONTACT,
                    [routeItem.ROUTE]: '/contact',
                    [routeItem.LINK]: '/contact',
                    [routeItem.TEXT]: 'Contact',
                    [routeItem.EXACT]: true,
                },
            ]
        }
    ],
};

export { menuAndRoutes };