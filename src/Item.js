import React from 'react';

export default function Item({ item, toggleItem }) {
  function handleItemClick() {
    toggleItem(item.id);
  }

  return (
    <div>
      <label>
        <div class="list">
          <input type="checkbox" checked={item.complete} onChange={handleItemClick} />
          <p class="item">{item.name}</p>
        </div>
      </label>
    </div>
  )
}
