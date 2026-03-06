import {
  ItemWrapper,
  Image,
  Details,
  Name,
  Price,
  Actions,
} from './styled';
import { FaTrashAlt } from 'react-icons/fa';
import { Button, QuantityStepper } from '@/components/ui';
import type { CartItem as CartItemType } from '@/types';
import { useCart } from '@/hooks';

export type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <ItemWrapper>
      <Image src={item.image} alt={item.name} />
      <Details>
        <Name>{item.name}</Name>
        <Price>${item.price.toFixed(2)} each</Price>
      </Details>
      <Actions>
        <QuantityStepper
          quantity={item.quantity}
          onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
          onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
        />
        <Button variant="ghost" buttonSize="sm" onClick={() => removeItem(item.id)}>
          <FaTrashAlt />
          Remove
        </Button>
      </Actions>
    </ItemWrapper>
  );
};
