interface Category {
  id: number;
  name: string;
  allowed: boolean;
}

interface CategoryList {
  list: Category[];
  headerName: string;
}

const GroupList = ({ list, headerName }: CategoryList) => {
  return (
    <>
      <h5 className="fw-bold">{headerName}</h5>
      {list.length === 0 && <p>List is empty</p>}
      <ul className="list-group">
        {list.map((category) => (
          <li className="fs-6 list-group-item" key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GroupList;
