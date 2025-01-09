// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//   Done
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
//   Done
// 3. Add a root layout that adds the <MainNavigation> component above all page components
//   Done
// 4. Add properly working links to the MainNavigation
//   Done
// 5. Ensure that the links in MainNavigation receive an "active" class when active
//   Done
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
//   Done
// 7. Output the ID of the selected event on the EventDetailPage
//   Done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
//   Done

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EventsRootLayout from "./pages/EventsRoot";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  ///absolute path
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          // { path: ':eventId', element: <EventDetailPage /> , loader: eventDetailLoader,},
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
          //{ path: ':eventId/edit', element: <EditEventPage /> },
          
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
