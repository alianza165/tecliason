import { ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

const features = [
  {
    name: 'Cost Effective',
    description:
      'Offer our customers the most cost-efficient, solution to satisfy their Industrial Automation needs',
    icon: ArrowTrendingDownIcon,
  },
  {
    name: 'Authentic',
    description: 'Provide genuine products to help our partners achieve their goals',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Reliable',
    description: 'Build and Maintain long term mutually beneficial relationships with our customers and principals.',
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">Partner with us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Smoother Operations</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Providing reliable equipment of the highest quality, we ensure seamless operations for factories and plants. Our customer-centric approach places their needs at the forefront, delivering tailored solutions to meet their requirements.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://ducaqjqbmh7lv.cloudfront.net/tecliason/feature-image2.jpg"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

