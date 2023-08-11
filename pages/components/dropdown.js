import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import { useApiContext } from '../../utils/ApiContext';
import '@szhsin/react-menu/dist/index.css';
import Link from 'next/link';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const { brands } = useApiContext();
  const { productTypes } = useApiContext();

  return (
    <Menu menuButton={<MenuButton className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Products</MenuButton>}>
      <SubMenu label="Brands">
        <MenuItem>
          <ul className="list-none pl-3 list-none font-sans">
              {brands.slice(0, 10).map((brand, index) => (
                <Link key={brand.id} href={{ pathname: '/brands', query: { name: brand.brand } }} passHref>
                  <li key={index} className="py-0.5 text-black text-sm/[20px]">
                    {brand.brand}
                  </li>
                </Link>
              ))}
            </ul>
        </MenuItem>
      </SubMenu>
      <SubMenu label="Categories">
        <MenuItem>
          <ul className="list-none pl-3 list-none font-sans">
              {productTypes.slice(0, 10).map((type, index) => (
                <Link key={type.id} href={{pathname: '/categories', query: { name: type.product_type},}} passHref>
                  <li key={index} className="py-0.5 text-black text-sm/[20px]">
                    {type.product_type}
                  </li>
                </Link>
              ))}
            </ul>
        </MenuItem>
      </SubMenu>
    </Menu>
  );
}