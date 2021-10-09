import { useRef, useState } from 'react';

// 修复中文输入法 onChange 的问题
const useCompositionChange = <T = string>(
	value: T,
	onChange: (v: T) => void,
) => {
	const [cpValue, setCpValue] = useState<any>(null);
	const cpLock = useRef(false);

	const handleChange = (v: T, forceChange = false) => {
		if (cpLock.current && !forceChange) {
			// 临时值锁
			setCpValue(v);
			return;
		}

		// 没有 lock 的时候，清除临时值
		cpValue !== null && setCpValue(null);

		onChange(v);
	};

	return {
		value: (cpValue || value) as T,
		onComposition: (e: any) => {
			if (e.type === 'compositionend' && cpLock.current) {
				const v = e.target.value;
				// hack safari 可能会触发两次 end, 所以需要在 lock 的时候才强制触发 change
				// hack chrome 的 onChange 先于 onCompositionEnd 触发，这里需要补充一次
				handleChange(v, true);
				cpLock.current = false;
			} else {
				cpLock.current = true;
			}
		},
		onChange: (v: T) => {
			return handleChange(v);
		},
	};
};

export default useCompositionChange;
