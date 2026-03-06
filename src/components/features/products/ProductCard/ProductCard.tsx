import {
  ProductLink,
  StyledCard,
  OutOfStockBadge,
  ImageWrapper,
  Image,
  WishlistButton,
  TitleWrapper,
  DescriptionWrapper,
  Footer,
  Price,
} from './styled';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { Button, Badge, Typography, QuantityStepper } from '@/components/ui';
import type { Product } from '@/types';
import { useCart, useWishlist, useRequireAuth } from '@/hooks';

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  const { isInWishlist, addItem: addToWishlist, removeItem: removeFromWishlist } =
    useWishlist();
  const { requireAuth } = useRequireAuth();

  const inWishlist = isInWishlist(product.id);
  const cartQuantity = items.find((i) => i.id === product.id)?.quantity ?? 0;

  return (
    <StyledCard elevated>
      <ProductLink to={`/products/${product.id}`}>
        <ImageWrapper>
          <Image src={product.image} alt={product.name} />
          <WishlistButton
            type="button"
            $inWishlist={inWishlist}
            onClick={(e) => {
              e.preventDefault();
              if (inWishlist) {
                removeFromWishlist(product.id);
              } else {
                requireAuth(() => addToWishlist(product));
              }
            }}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {inWishlist ? <FaHeart /> : <FaRegHeart />}
          </WishlistButton>
          {!product.inStock && (
            <OutOfStockBadge>
              <Badge variant="warning">Out of stock</Badge>
            </OutOfStockBadge>
          )}
        </ImageWrapper>
        <TitleWrapper>
          <Typography name="heading4">{product.name}</Typography>
        </TitleWrapper>
        <DescriptionWrapper>
          <Typography name="secondary">{product.description}</Typography>
        </DescriptionWrapper>
      </ProductLink>
      <Footer>
        <Price>${product.price.toFixed(2)}</Price>
        {cartQuantity > 0 ? (
          <QuantityStepper
            quantity={cartQuantity}
            onIncrease={() => updateQuantity(product.id, cartQuantity + 1)}
            onDecrease={() => updateQuantity(product.id, cartQuantity - 1)}
            disabled={!product.inStock}
          />
        ) : (
          <Button
            buttonSize="sm"
            onClick={() => requireAuth(() => addItem(product))}
            disabled={!product.inStock}
          >
            <FaShoppingCart />
            Add to Cart
          </Button>
        )}
      </Footer>
    </StyledCard>
  );
};
