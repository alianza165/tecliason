import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/categories/item',
    price: '$48',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/13-18A.png',
    imageAlt: 'contactors',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '/categories/item',
    price: '$35',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/etn150.png',
    imageAlt: 'motors',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '/categories/item',
    price: '$89',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/nf-125cv-125a.png',
    imageAlt: 'breakers',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '/categories/item',
    price: '$35',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/s-t100.png',
    imageAlt: 'motor-starters',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '/categories/item',
    price: '$35',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/s-t100.png',
    imageAlt: 'motor-starters',
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '/categories/item',
    price: '$35',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/s-t100.png',
    imageAlt: 'motor-starters',
  },
  // More products...
];

export default function Categories() {
  return (

    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-bold text-gray-900 flex justify-center pb-6">Our Top Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={{pathname: product.href, query: { name: product.imageAlt},}} passHref>

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 sm:h-32">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
