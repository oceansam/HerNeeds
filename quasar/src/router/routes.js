const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "login",
        component: () => import("pages/auth/LoginPage.vue"),
      },
      {
        path: "signup",
        component: () => import("pages/auth/SignupPage.vue"),
      },
    ],
  },
  {
    path: "/landing",
    component: () => import("layouts/LandingLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/LandingPage.vue"),
      }
    ]
  },
  {
    path: "/search",
    component: () => import("layouts/SearchLayout.vue"),
    children: [
      {
        path: "/resources",
        component: () => import("pages/FindPage.vue"),
      },
      {
        path: "/map",
        component: () => import("pages/MapPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
