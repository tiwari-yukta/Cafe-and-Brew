import {
  ItemWrapper,
  Image,
  Details,
  Name,
  Description,
  Price,
  Actions,
} from './styled';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { Button } from '@/components/ui';
import type { Product } from '@/types';
import { useCart, useWishlist, useRequireAuth } from '@/hooks';

export type WishlistItemProps = {
  product: Product;
};

export const WishlistItem = ({ product }: WishlistItemProps) => {
  const { addItem } = useCart();
  const { removeItem } = useWishlist();
  const { requireAuth } = useRequireAuth();

  return (
    <ItemWrapper>
      <Image src={product.image} alt={product.name} />
      <Details>
        <Name to={`/products/${product.id}`}>{product.name}</Name>
        <Description>{product.description}</Description>
        <Price>${product.price.toFixed(2)}</Price>
      </Details>
      <Actions>
        <Button
          buttonSize="sm"
          onClick={() => requireAuth(() => addItem(product))}
          disabled={!product.inStock}
        >
          <FaShoppingCart />
          Add to Cart
        </Button>
        <Button
          variant="ghost"
          buttonSize="sm"
          onClick={() => removeItem(product.id)}
        >
          <FaTrashAlt />
          Remove
        </Button>
      </Actions>
    </ItemWrapper>
  );
};
