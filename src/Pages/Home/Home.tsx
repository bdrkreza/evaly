import Banner from 'Components/Home/Banner';
import Products from 'Components/Home/Products';
import useAsync from 'Hooks/UserHooks';
import productService from 'services/productService';

export default function Home() {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   productService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data, isLoading } = useAsync(productService.getProducts);
  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
}
