import { useEffect, useState } from 'react';
import { detectFlexGapSupported } from '../utils/dom/style';

export default function useFlexGapSupport(): boolean {
	const [flexible, setFlexible] = useState(false);

	useEffect(() => {
		setFlexible(detectFlexGapSupported());
	}, []);

	return flexible;
}
