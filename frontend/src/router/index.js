/* Layout */
import Layout from "@/layout";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/annotate",
    component: () => import("@/views/annotate/index"),
    meta: { title: "标注页面", icon: "edit" },
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/temp",
    component: () => import("@/views/temp"),
    hidden: true,
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "主控台", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/profile",
    redirect: "profile/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/profile/index"),
        name: "Profile",
        meta: { title: "个人中心", icon: "user", noCache: true },
      },
    ],
  },
  {
    path: "/text",
    component: Layout,
    redirect: "/text/list",
    name: "text",
    meta: { title: "标注文本", icon: "documentation" },
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("@/views/table/list"),
        meta: { title: "文本列表", icon: "el-icon-notebook-2" },
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("@/views/table/setting"),
        meta: { title: "标注设置", icon: "el-icon-setting" },
      },
    ],
  },
  {
    path: "/errorAnalysis",
    component: Layout,
    redirect: "/errorAnalysis/fileUpload",
    name: "errorAnalysis",
    meta: { title: "错误分析", icon: "bug" },
    children: [
      {
        path: "fileUpload",
        name: "fileUpload",
        component: () => import("@/views/errorAnalysis/fileUpload"),
        meta: { title: "文件上传", icon: "el-icon-upload" },
      },
      {
        path: "text",
        name: "text-analysis",
        component: () => import("@/views/errorAnalysis/textAnalysis"),
        meta: { title: "文本分析", icon: "el-icon-notebook-2" },
      },
      {
        path: "charts",
        name: "charts-analysis",
        component: () => import("@/views/errorAnalysis/chartsAnalysis"),
        meta: { title: "图表分析", icon: "tree" },
      },
    ],
  },

  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
