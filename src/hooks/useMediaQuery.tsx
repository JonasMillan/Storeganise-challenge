import { useEffect, useState } from 'react';

const MOBILE_WIDTH_QUERY = '(max-width: 768px)';
const DESKTOP_WIDTH_QUERY = '(min-width: 768px)';
const MEDIUM_SCREEN_WIDTH_QUERY = '(max-width: 992px)';

const useMediaQuery = (query: string) => {
	const getMatches = (): boolean => window.matchMedia(query).matches;
	const [matches, setMatches] = useState<boolean>(getMatches());

	const handleChange = () => setMatches(getMatches());

	useEffect(() => {
		const matchMedia = window.matchMedia(query);
		handleChange();
		matchMedia.addEventListener('change', handleChange);

		return () => matchMedia.removeEventListener('change', handleChange);
	}, [query]);

	return matches;
};

export default useMediaQuery;
export { MOBILE_WIDTH_QUERY, DESKTOP_WIDTH_QUERY, MEDIUM_SCREEN_WIDTH_QUERY };
