const routes = [
  {
    path: "/",
    component: () => import("pages/LandingLayout.vue"),
    children: [{ path: "", component: () => import("pages/LandingPage.vue") }],
  },
  {
    path: "/resources",
    component: () => import("pages/ResourcesPage.vue"),
  },
  {
    path: "/map",
    component: () => import("pages/MapPage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
