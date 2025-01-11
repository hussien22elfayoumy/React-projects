import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQyantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button
        type='round'
        onClick={() => dispatch(decreaseItemQyantity(pizzaId))}
      >
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button
        type='round'
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
