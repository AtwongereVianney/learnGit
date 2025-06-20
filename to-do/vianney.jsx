// Edit function by vianney
export default function editItem(items, index, setItems) {
    const newValue = prompt("Edit task:", items[index]);
    if (newValue !== null && newValue.trim() !== "") {
      setItems(prevItems => {
        const updated = [...prevItems];
        updated[index] = newValue;
        return updated;
      });
    }
  }
