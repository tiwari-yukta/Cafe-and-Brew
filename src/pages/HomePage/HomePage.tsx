import { HeroIllustration } from './HeroIllustration';
import {
  HeroSection,
  HeroLayout,
  DecorIcon,
  HeroContent,
  TitleWrapper,
  SubtitleWrapper,
  CTAWrapper,
  FeaturedSection,
  SectionTitleWrapper,
  QuickLinks,
  QuickLinkCard,
  CardIcon,
  WhySection,
  WhyGrid,
  WhyCard,
  WhyIcon,
  QuoteSection,
  QuoteWrapper,
  QuoteAuthorWrapper,
} from './styled';
import {
  FaHeart,
  FaCoffee,
  FaChair,
  FaShoppingCart,
  FaStar,
  FaLeaf,
  FaUtensils,
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { Button, Typography } from '@/components/ui';

export const HomePage = () => {
  return (
    <>
      <HeroSection>
        <DecorIcon $delay={0} $left="8%" $top="18%" $animation="float">
          <FaHeart />
        </DecorIcon>
        <DecorIcon $delay={0.8} $left="88%" $top="12%" $animation="float">
          <FaHeart />
        </DecorIcon>
        <DecorIcon $delay={0.3} $left="12%" $top="72%" $animation="sparkle">
          <HiOutlineSparkles />
        </DecorIcon>
        <DecorIcon $delay={1.2} $left="78%" $top="78%" $animation="sparkle">
          <HiOutlineSparkles />
        </DecorIcon>
        <DecorIcon $delay={0.5} $left="22%" $top="35%" $animation="pulse">
          <HiOutlineSparkles />
        </DecorIcon>
        <DecorIcon $delay={1} $left="72%" $top="45%" $animation="pulse">
          <HiOutlineSparkles />
        </DecorIcon>
        <DecorIcon $delay={0.2} $left="5%" $top="55%" $animation="float">
          <FaHeart />
        </DecorIcon>
        <DecorIcon $delay={1.5} $left="92%" $top="60%" $animation="float">
          <FaHeart />
        </DecorIcon>
        <DecorIcon $delay={0.6} $left="50%" $top="25%" $animation="sparkle">
          <HiOutlineSparkles />
        </DecorIcon>
        <DecorIcon $delay={0.4} $left="15%" $top="30%" $animation="float">
          <FaCoffee />
        </DecorIcon>
        <DecorIcon $delay={1.1} $left="85%" $top="65%" $animation="float">
          <FaCoffee />
        </DecorIcon>

        <HeroLayout>
          <HeroIllustration />
          <HeroContent>
          <TitleWrapper>
            <Typography name="display">Welcome to Café and Brew</Typography>
          </TitleWrapper>
          <SubtitleWrapper>
            <Typography name="subtitle">
              Where every sip feels like a gentle hug. Discover our artisanal
              coffee, delicate pastries, and cozy moments crafted with love.
            </Typography>
          </SubtitleWrapper>
          <CTAWrapper>
            <Button to="/products" buttonSize="lg">
              <FaCoffee />
              View Menu
            </Button>
            <Button to="/reservation" variant="secondary" buttonSize="lg">
              <FaChair />
              Reserve a Table
            </Button>
          </CTAWrapper>
        </HeroContent>
        </HeroLayout>
      </HeroSection>

      <FeaturedSection>
        <SectionTitleWrapper>
          <Typography name="heading2">Explore</Typography>
        </SectionTitleWrapper>
        <QuickLinks>
          <QuickLinkCard to="/products">
            <CardIcon className="card-icon">
              <FaCoffee />
            </CardIcon>
            <Typography name="heading4">Our Menu</Typography>
            <Typography name="secondary">Fresh drinks & pastries made daily</Typography>
          </QuickLinkCard>
          <QuickLinkCard to="/reservation">
            <CardIcon className="card-icon">
              <FaChair />
            </CardIcon>
            <Typography name="heading4">Reserve</Typography>
            <Typography name="secondary">Book your cozy table</Typography>
          </QuickLinkCard>
          <QuickLinkCard to="/cart">
            <CardIcon className="card-icon">
              <FaShoppingCart />
            </CardIcon>
            <Typography name="heading4">Order To-Go</Typography>
            <Typography name="secondary">Pick up or delivery</Typography>
          </QuickLinkCard>
        </QuickLinks>
      </FeaturedSection>

      <WhySection>
        <SectionTitleWrapper>
          <Typography name="heading2">Why Visit Us</Typography>
        </SectionTitleWrapper>
        <WhyGrid>
          <WhyCard $delay={0}>
            <WhyIcon className="why-icon">
              <FaStar />
            </WhyIcon>
            <Typography name="heading4">Artisanal Quality</Typography>
            <Typography name="secondary">
              Every cup and pastry is crafted with care using the finest
              ingredients and time-honored techniques.
            </Typography>
          </WhyCard>
          <WhyCard $delay={1}>
            <WhyIcon className="why-icon">
              <FaLeaf />
            </WhyIcon>
            <Typography name="heading4">Fresh & Natural</Typography>
            <Typography name="secondary">
              Locally sourced whenever possible. We believe in simple, wholesome
              flavors that nourish the soul.
            </Typography>
          </WhyCard>
          <WhyCard $delay={2}>
            <WhyIcon className="why-icon">
              <FaUtensils />
            </WhyIcon>
            <Typography name="heading4">Cozy Atmosphere</Typography>
            <Typography name="secondary">
              A warm, inviting space designed for relaxation and connection.
              Your perfect escape from the everyday.
            </Typography>
          </WhyCard>
        </WhyGrid>
      </WhySection>

      <QuoteSection>
        <QuoteWrapper>
          <Typography name="heading3">
            There is nothing better than a friend, unless it is a friend with
            coffee.
          </Typography>
        </QuoteWrapper>
        <QuoteAuthorWrapper>
          <Typography name="secondary">— Linda Grayson</Typography>
        </QuoteAuthorWrapper>
      </QuoteSection>
    </>
  );
};
