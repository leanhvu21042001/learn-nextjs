export const pageRouters = {
  // page_home: "/",
  page_blog: { url: "/page-demo/blog", label: "Page Blog" },
  page_todo: { url: "/page-demo/todo", label: "Page Todo" },
  page_todo_detail: {
    url: "/page-demo/todo/:id",
    label: "Page Todo Detail",
    urlWithParams({ id }: { id: string }) {
      return this.url.replace(":id", id);
    },
  },
};

export const appRouters = {
  // app_home: "/",
  app_blog: { url: "/app-demo/blog", label: "App Blog" },
  app_products: { url: "/app-demo/products", label: "App Products" },
  app_todo: { url: "/app-demo/todo", label: "App Todo" },
  app_todo_detail: {
    url: "/app-demo/todo/:id",
    label: "App Todo Detail",
    urlWithParams({ id }: { id: string }) {
      return this.url.replace(":id", id);
    },
  },
  app_todo_new: { url: "/app-demo/todo/new", label: "App Todo New" },
  app_user_todo: {
    url: "/app-demo/user/:id/todo",
    label: "App User Todo",
    urlWithParams({ id }: { id: string }) {
      return this.url.replace(":id", id);
    },
  },
};

export const hasParam = (url: string) => {
  return url.includes(":");
};
