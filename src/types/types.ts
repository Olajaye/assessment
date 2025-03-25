export interface Product {
  id: string;
  name?: string;
  data?: {
    [key: string]: any;
  };
}

export interface ProductTableProps {
  products: Product[];
}


export interface UseFetchObjectsResult {
  data: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}