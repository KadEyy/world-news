import * as React from 'react';

interface RouteType{
    url: string,
    exact: boolean,
    title: string,
    component: React.FC
}

export default RouteType;