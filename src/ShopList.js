import React from 'react';
import Item from './Item';

export default function ShopList({ items, toggleItem }) {
  return (
      items.map(item => {
        return <Item key={item.id} toggleItem={toggleItem} item={item} />
    })
  );
}
