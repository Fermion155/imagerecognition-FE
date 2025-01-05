import { useEffect, useState } from "react";
import GroupList from "./GroupList";

interface Category {
  id: number;
  name: string;
  allowed: boolean;
}

const SideWindow = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/categories`
        );
        setError(null);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseJson = (await response.json()) as Category[];
        setCategories(responseJson);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.log(err.message);
        } else {
          setError("An unknown error occurred");
          console.log(err);
        }
      }
    };
    getCategories();
  }, []);

  return (
    <div className="d-flex text-start flex-column">
      {error && <p>error</p>}
      <div className="p-2">
        <GroupList
          list={categories.filter((category) => category.allowed)}
          headerName="Allowed categories"
        ></GroupList>
      </div>
      <div className="p-2">
        <GroupList
          list={categories.filter((category) => !category.allowed)}
          headerName="Forbidden categories"
        ></GroupList>
      </div>
    </div>
  );
};

export default SideWindow;
