import { ref, onMounted } from 'vue';
import { getProducts } from '@/api/products';

export default function useGetProducts() {
  const products = ref([]);
  const getData = async () => {
    products.value = await getProducts();
  };
  onMounted(getData);

  return {
    products,
    getData,
  };
}
