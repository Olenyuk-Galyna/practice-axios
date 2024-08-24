import './styles/normalize.css';
import './styles/index.css';
import { getProdukts } from './requests/products';

getProdukts(), then(data => console.log(data));
