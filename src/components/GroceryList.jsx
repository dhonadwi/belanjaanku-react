import { useState } from 'react';
import GroceryItem from './GroceryItem';

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  switch (sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.length > 0 ? (
            sortedItems.map((item) => (
              <GroceryItem
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            ))
          ) : (
            <li>Catatan Belanjaan Kosong!</li>
          )}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
