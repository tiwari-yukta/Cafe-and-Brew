import { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Button, Typography, QuantityStepper } from '@/components/ui';
import { useCart, useWishlist, useProduct, useRequireAuth } from '@/hooks';
import {
  PageWrapper,
  BackButton,
  Content,
  Image,
  Details,
  TitleWrapper,
  PriceWrapper,
  DescriptionWrapper,
  Actions,
  WishlistButtonWrapper,
  LoadingState,
  NotFoundStateWrapper,
} from './styled';

export const ProductDetailPage = memo(function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { items, addItem, updateQuantity } = useCart();
  const { isInWishlist, addItem: addToWishlist, removeItem: removeFromWishlist } =
    useWishlist();
  const { requireAuth } = useRequireAuth();

  const { data: product, isLoading } = useProduct(id);

  if (isLoading) {
    return (
      <PageWrapper>
        <LoadingState>
        <Typography name="secondary">Loading...</Typography>
      </LoadingState>
      </PageWrapper>
    );
  }

  if (!product) {
    return (
      <PageWrapper>
        <NotFoundStateWrapper>
          <Typography name="secondary">Product not found.</Typography>
        </NotFoundStateWrapper>
        <BackButton onClick={() => navigate(-1)}>← Go back</BackButton>
      </PageWrapper>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const cartQuantity = items.find((i) => i.id === product.id)?.quantity ?? 0;

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate(-1)}>← Back to menu</BackButton>
      <Content>
        <Image src={product.image} alt={product.name} />
        <Details>
          <TitleWrapper>
            <Typography name="heading2">{product.name}</Typography>
          </TitleWrapper>
          <PriceWrapper>
            <Typography name="heading4">${product.price.toFixed(2)}</Typography>
          </PriceWrapper>
          <DescriptionWrapper>
            <Typography name="secondary">{product.description}</Typography>
          </DescriptionWrapper>
          <Actions>
            {cartQuantity > 0 ? (
              <QuantityStepper
                quantity={cartQuantity}
                onIncrease={() => updateQuantity(product.id, cartQuantity + 1)}
                onDecrease={() => updateQuantity(product.id, cartQuantity - 1)}
                disabled={!product.inStock}
              />
            ) : (
              <Button
                onClick={() => requireAuth(() => addItem(product))}
                disabled={!product.inStock}
              >
                Add to Cart
              </Button>
            )}
            <WishlistButtonWrapper $inWishlist={inWishlist}>
              <Button
                variant="outline"
                onClick={() =>
                  inWishlist
                    ? removeFromWishlist(product.id)
                    : requireAuth(() => addToWishlist(product))
                }
              >
                {inWishlist ? (
                  <>
                    <FaHeart />
                    In Wishlist
                  </>
                ) : (
                  <>
                    <FaRegHeart />
                    Add to Wishlist
                  </>
                )}
              </Button>
            </WishlistButtonWrapper>
          </Actions>
        </Details>
      </Content>
    </PageWrapper>
  );
});
