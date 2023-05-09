import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import { DesktopNavbar, MobileNavbar } from "@/components/Navbar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [quantity, setQuantity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const slideImages = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const goToPrevSlide = () => {
    const newPointer =
      currentIndex === 0 ? slideImages.length - 1 : currentIndex - 1;

    setCurrentIndex(newPointer);
  };

  const goToNextSlide = () => {
    const newPointer =
      currentIndex === slideImages.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newPointer);
  };

  return (
    <>
      <Head>
        <title>E-commerce product page</title>
        <meta name="description" content="E-commerce product page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <MobileNavbar />
        <DesktopNavbar />

        <div className={styles.contentCon}>
          <section className={styles.productDisplay}>
            <div>
              <Image
                className={styles.productImage}
                priority
                src={slideImages[currentIndex]}
                width={350}
                height={360}
                alt="product - sneakers"
              />

              <div className={styles.iconCircleDiv}>
                <div className={styles.iconCircle1} onClick={goToPrevSlide}>
                  <Image
                    priority
                    src="/icons/icon-previous.svg"
                    width={10}
                    height={10}
                    alt="icon menu"
                  />
                </div>
                <div className={styles.iconCircle2} onClick={goToNextSlide}>
                  <Image
                    priority
                    src="/icons/icon-next.svg"
                    width={10}
                    height={10}
                    alt="icon menu"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={styles.productDescription}>
            <h2> Sneaker Company</h2>
            <h1> Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div>
              <span> $125.00</span>
              <span> 50%</span>
              <span> $250.00</span>
            </div>
            <div className={styles.addOrRemoveItem}>
              <div onClick={handleDecrement}>
                <Image
                  priority
                  src="/icons/icon-minus.svg"
                  height={6}
                  width={14}
                  alt="icon menu"
                />
              </div>
              {quantity}
              <div onClick={handleIncrement}>
                <Image
                  priority
                  src="/icons/icon-plus.svg"
                  height={15}
                  width={15}
                  alt="icon menu"
                />
              </div>
            </div>
            <button>
              <Image
                className={styles.btnCartIcon}
                priority
                src="/icons/btn-icon-cart.svg"
                height={16}
                width={18}
                alt="icon cart"
              />
              Add to cart
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
