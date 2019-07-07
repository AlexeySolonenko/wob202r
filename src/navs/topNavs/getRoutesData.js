
import { servRes, menuAndRoutes, routesData, routeKinds } from "../../moduleLoader";


/* todo to implement fetch or websocket  loading of rootes */

const getRoutesData = (kind) => {
   
    for(const group of menuAndRoutes[servRes.DATA]){
        if(group[routesData.KIND] == routeKinds.TOP){
            return group[routesData.ITEMS];
        }
    }      
};
export { getRoutesData };
