import { useState } from 'react';
import cardsData from '../cards-data.json';
 
function CardList() {
  const [cards, setCards] = useState(cardsData);
 
  return (
    <div>
      <h2>Cards List</h2>
    </div>
  );
}
 
export default CardList;