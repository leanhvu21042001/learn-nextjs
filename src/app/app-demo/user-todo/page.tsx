import { getTodos } from "@/lib/drizzle/actions/todo-drizzle.actions";
import UserForm from "./user-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function UserTodoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos(Number(id));

      setData(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <UserForm />
    </div>
  );
}
