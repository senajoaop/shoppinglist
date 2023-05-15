import React, { useState, useRef, useEffect } from 'react';
import ShopList from './ShopList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = "shopApp.items"

function App() {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    /* if (storedItems) setItems(prevItems => [...prevItems, ...storedItems]); */
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items]);

  function toggleItem(id) {
    const newItems = [...items];
    const item = newItems.find(item => item.id === id);
    
    item.complete = !item.complete;
    setItems(newItems);
  }

  function handleAddItem(e) {
    const name = itemNameRef.current.value;

    if (name === "") return;
    setItems(prevItems => {
      return [...prevItems, { id: uuidv4(), name: name, complete: false}];
    })
    itemNameRef.current.value = null;
  }

  function handleClearItems() {
    const newItems = items.filter(item => !item.complete);
    setItems(newItems);
  }

  return (
    <>
      <h1>Lista de Compras</h1>
      <ShopList items={items} toggleItem={toggleItem} />
      <input ref={itemNameRef} type="text" />
      <button onClick={handleAddItem}>Adicionar itens</button>
      <button onClick={handleClearItems}>Limpar items selecioados</button>
      <div class="info">Ainda restam {items.filter(item => !item.complete).length} itens</div>
    </>
  );
}

export default App;
