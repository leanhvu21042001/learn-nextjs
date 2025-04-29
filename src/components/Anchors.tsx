import { appRouters, pageRouters } from "@/lib/routes";
import { Todo } from "@/types/types";
import Link from "next/link";
import { useRouter as useNavigationRouter } from "next/navigation";

export const DefaultAnchor = ({
  url,
  className,
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <Link href={url} className={className}>
    {children}
  </Link>
);

export const AppAnchorAddTodo = () => {
  return (
    <DefaultAnchor
      url={appRouters.app_todo_new.url}
      className="bg-blue-500 text-white p-2 inline-block my-4"
    >
      + {appRouters.app_todo_new.label}
    </DefaultAnchor>
  );
};

export const AppAnchorTodoDetail = ({ todo }: { todo: Partial<Todo> }) => {
  return (
    <DefaultAnchor
      url={appRouters.app_todo_detail.urlWithParams({
        id: todo.id?.toString() || "",
      })}
    >
      <span
        className={
          todo.completed ? "line-through cursor-pointer" : "cursor-pointer"
        }
      >
        {todo.title}
      </span>
    </DefaultAnchor>
  );
};

export const PageAnchorTodoDetail = ({ todo }: { todo: Partial<Todo> }) => {
  return (
    <DefaultAnchor
      url={pageRouters.page_todo_detail.urlWithParams({
        id: todo.id?.toString() || "",
      })}
    >
      <span
        className={
          todo.completed ? "line-through cursor-pointer" : "cursor-pointer"
        }
      >
        {todo.title}
      </span>
    </DefaultAnchor>
  );
};

export const AppBtnAnchorBackTodo = () => {
  const router = useNavigationRouter();
  return (
    <button
      className="bg-gray-500 text-white p-2"
      onClick={() => router.push(appRouters.app_todo.url)}
    >
      Back
    </button>
  );
};
export const AppBtnAnchorAddTodo = ({
  action,
  payload,
}: {
  action: (payload: string) => void;
  payload: string;
}) => {
  const router = useNavigationRouter();
  return (
    <button
      className="bg-green-500 text-white p-2"
      onClick={() => {
        action(payload);
        router.push(appRouters.app_todo.url);
      }}
    >
      Save
    </button>
  );
};
