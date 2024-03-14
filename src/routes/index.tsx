import EntryPage from '@pages/entry';
import ErrorPage from '@pages/error';
import CenterPage from '@pages/index';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: '/', element: <EntryPage /> },
  { path: '/center', element: <CenterPage /> },
  // { path: '/about', element: <DesktopAbout /> },
  // { path: '/more', element: <DesktopMore /> },
  // { path: '/m/', element: <MobileProject /> },
  // { path: '/m/about', element: <MobileAbout /> },
  // { path: '/m/more', element: <MobileMore /> },
  // { path: '/error', element: <ErrorPage /> },
  { path: '*', element: <ErrorPage /> }
]);