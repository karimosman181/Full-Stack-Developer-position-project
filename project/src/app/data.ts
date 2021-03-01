import {WorkOrder} from "./WorkOrder";
import {Detail} from "./Detail";

const Details : Detail[] = [
    {
        Description : "this is the first item",
        location : "Beirut",
        progress : 60
    },
    {
        Description : "this is the second item",
        location : "Beirut",
        progress : 70
    },
    {
        Description : "this is the third item",
        location : "Beirut",
        progress : 30
    }

];

export const WorkOrders : WorkOrder[] = [
    {   Id: 1,
        creationDate: "12/1/2018",
        OperationDescription: "this is the test operation",
        StartDate: "12/2/2019",
        EndDate: "12/2/2020",
        progress: 50,
        Details : Details
    },
    {   Id: 2,
        creationDate: "10/7/2017",
        OperationDescription: "this is the second test operation",
        StartDate: "10/12/2017",
        EndDate: "12/2/2020",
        progress: 30,
        Details : Details
    },
];