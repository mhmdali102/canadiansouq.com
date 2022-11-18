import { marked } from "marked";
import { useDispatch, useSelector } from "react-redux";
import { add as addToCart, remove as removeFromCart } from "../redux/cartSlice";
import { add as addToWishlist, remove as removeFromWishlist } from "../redux/wishlistSlice";
import { RootState } from "../redux/store";
import { IProduct } from "../types/";
import Button from "./Button";
import { AddedtoCart, AddtoCart, Bookmark } from "./icons";
import ImagesSlider from "./ImagesSlider";
import Head from "next/head";
import Navigation from "./Navigation";

interface Props {
  product: IProduct;
  asPath: string;
}

const Product = ({ product, asPath }: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Canadian Souq | {product.attributes.title}</title>
        <meta name="description" content={product.attributes.description} />

        <meta property="og:description" content={product.attributes.description} />
        <meta property="og:image" content={product.attributes.images?.data[0].attributes.url}/>

        <meta name="twitter:description" content={product.attributes.description} />
        <meta name="twitter:image" content={product.attributes.images?.data[0].attributes.url} />
      </Head>

    <div className="container grid lg:grid-cols-productSliderAndInfo gap-x-6 overflow-x-hidden">
      <Navigation />
      <ImagesSlider
        images={product.attributes.images!}
        alt={product.attributes.title!}
      />
      <div className="flex-1 w-full mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">{product.attributes.title}</h1>
          <div className="items-center">
            <p className="text-base line-through text-gray">
              ${product.attributes.cost}
            </p>
            <h3 className="text-lg font-bold">${product.attributes.price}</h3>
          </div>
        </div>
        <div className="flex items-stretch gap-2 my-4">
          <a
            href={`https://wa.me/+96181921320/?text=Hello, I saw this... ${
              process.env.NEXT_PUBLIC_HOST || ""
            }${asPath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="lg" className="w-full">
              Order Now
            </Button>
          </a>
          {cart.some((item) => item.prod.id === product.id) ? (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => dispatch(removeFromCart(product.id))}
              icon={<AddedtoCart />}
            />
          ) : (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => dispatch(addToCart(product))}
              icon={<AddtoCart />}
            />
          )}
          {wishlist.some((item) => item.id === product.id) ? (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => dispatch(removeFromWishlist(product.id))}
              icon={<Bookmark clr="fill-black" />}
            />
          ) : (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => dispatch(addToWishlist(product))}
              icon={<Bookmark />}
            />
          )}
        </div>
        <div className="grid grid-cols-productInfo gap-x-6 gap-y-4">
          <Info
            title="Availability"
            text={
              product.attributes.availability! > 0 ? "In Stock" : "Out of Stock"
            }
            className={`${
              product.attributes.availability! > 0
                ? "text-success"
                : "text-danger"
            } font-bold`}
          />
          {product.attributes.brand?.data?.attributes?.name ? <Info title="Brand" text={product.attributes.brand.data.attributes.name} /> : null}
          {product.attributes.model ? <Info title="Model" text={product.attributes.model} /> : null}
          <Info title="Condition" text={product.attributes.condition!} />
          {product.attributes.description ? <Info title="Description" className="col-span-2">
            <div className="col-span-2" dangerouslySetInnerHTML={{ __html: marked.parse(product.attributes.description || "" ) }} />
          </Info> : null}
        </div>
      </div>
    </div>
    </>
  );
};

interface InfoProps {
  title: string;
  text?: string;
  className?: string;
  children?: JSX.Element;
}

const Info = ({ title, text, className, children }: InfoProps) => (
  <>
    <h4 className="text-gray font-bold text-base">{title}:</h4>
    {text && <h2 className={`${className} text-lg`}>{text}</h2>}
    {children}
  </>
);

export default Product;
