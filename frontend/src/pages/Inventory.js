import { inventory } from "../data/mockData";

function Inventory() {
  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.item} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;