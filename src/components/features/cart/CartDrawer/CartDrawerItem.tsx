import {
  ItemCard,
  ImageWrapper,
  Image,
  ItemDetails,
  Name,
  Price,
  ItemActions,
  RemoveButton,
} from './styled';
import { FaTrashAlt } from 'react-icons/fa';
import { QuantityStepper } from '@/components/ui';
import type { CartItem as CartItemType } from '@/types';
import { useCart } from '@/hooks';

export type CartDrawerItemProps = {
  item: CartItemType;
};

export const CartDrawerItem = ({ item }: CartDrawerItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <ItemCard>
      <ImageWrapper>
        <Image src={item.image} alt={item.name} />
      </ImageWrapper>
      <ItemDetails>
        <Name>{item.name}</Name>
        <Price>${item.price.toFixed(2)} each</Price>
        <ItemActions>
          <QuantityStepper
            quantity={item.quantity}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
          />
        </ItemActions>
      </ItemDetails>
      <RemoveButton
        type="button"
        onClick={() => removeItem(item.id)}
        aria-label="Remove from cart"
      >
        <FaTrashAlt />
      </RemoveButton>
    </ItemCard>
  );
};
