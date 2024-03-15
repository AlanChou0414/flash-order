import EntryPage from '@pages/entry';
import ErrorPage from '@pages/error';
import CenterPage from '@pages/index';
import OrderingPage from '@pages/order/index';
import { createBrowserRouter } from "react-router-dom";

const routes = [
  { path: '/', element: <EntryPage /> },
  { path: '/center', element: <CenterPage /> },
  { path: '/ordering', element: <OrderingPage /> },
  // { path: '/about', element: <DesktopAbout /> },
  // { path: '/more', element: <DesktopMore /> },
  // { path: '/m/', element: <MobileProject /> },
  // { path: '/m/about', element: <MobileAbout /> },
  // { path: '/m/more', element: <MobileMore /> },
  // { path: '/error', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> },
];

export const router = createBrowserRouter(routes);