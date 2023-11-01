import { Menu, MenuItem, MenuButton, SubMenu, MenuDivider } from '@szhsin/react-menu';
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
    <Menu menuButton={<MenuButton className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all">Products</MenuButton>}>
      <SubMenu label="Brands">
        {brands.slice(0, 6).map((brand, index) => (
          <MenuItem className="transition-all">
            <Link className='text-black text-sm' key={brand.id} href={{ pathname: '/brands', query: { name: brand.brand } }} passHref>
              {brand.brand}
            </Link>
          </MenuItem>
        ))}
        <MenuDivider />
          <MenuItem>
            <Link className='flex justify-center' href={{ pathname: '/viewall/brands' }} passHref>
              <button className="bg-black hover:bg-blue-700 text-white font-bold px-2 rounded text-sm/[20px] w-full">
                View All
              </button>
            </Link>
          </MenuItem>
      </SubMenu>
      <SubMenu label="Categories">
        {productTypes.slice(0, 6).map((type, index) => (
          <MenuItem>
            <Link className='text-black text-sm' key={type.id} href={{pathname: '/categories', query: { name: type.product_type},}} passHref>
              {type.product_type}
            </Link>
          </MenuItem>
        ))}
        <MenuDivider />
          <MenuItem>
            <Link href={{ pathname: '/viewall/categories' }} passHref>
              <button className="bg-black hover:bg-blue-700 text-white font-bold px-2 rounded text-sm/[20px] w-full">
                View All
              </button>
            </Link>
          </MenuItem>
      </SubMenu>
    </Menu>
  );
}