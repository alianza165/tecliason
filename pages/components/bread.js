import { useRouter } from 'next/router';

export default function Breadcrumb() {

const { asPath, pathname } = useRouter();

return (
	<h4> {asPath} </h4>
	);
}
