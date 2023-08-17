export const discountRoutes = () => [
  {
    path: '/main',
    element: <h1>home page</h1>,
    children: [
      {
        path: 'ussd',
        element: <div> Home page3423 </div>,
      },
      { path: 'plans', element: <h1>tarif rejalari</h1> },
      { path: 'internet', element: <h1>internet paketlar</h1> },
      { path: 'servises', element: <h1>Xizmatlar</h1> },
      { path: 'sms', element: <h1>Sms to'plamlar</h1> },
      { path: 'call-center', element: <h1>Operator</h1> },
    ],
  },
];
