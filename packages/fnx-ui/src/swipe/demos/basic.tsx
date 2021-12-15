import React, { useRef, useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Toast from '../../toast';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import Swipe from '../index';
import { SwipeRef } from '../interface';
import './basic.less';

const bem = createBEM('demo-swipe');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		verticalScrolling: '纵向滚动',
		customIndicator: '自定义指示器',
		changeEvent: '监听 change 事件',
		swipeSize: '自定义滑块大小',
		instanceAPI: '组件实例',
		currentSwipeIndex: '当前 Swipe 索引:',
		btnPrev: '上一个',
		btnNext: '下一个',
		btnFirst: '第一个',
		btnLast: '最后一个',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		verticalScrolling: 'Vertical Scrolling',
		customIndicator: 'Custom indicator',
		changeEvent: 'Change Event',
		swipeSize: 'Set Swipe.Item Size',
		instanceAPI: 'Ref instance API',
		currentSwipeIndex: 'Current Swipe index:',
		btnPrev: 'Prev',
		btnNext: 'Next',
		btnFirst: 'First',
		btnLast: 'Last',
	},
};

const CustomIndicator = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Swipe
			indicator={
				<div className="custom-indicator">{activeIndex + 1} / 3</div>
			}
			onActiveIndexChange={(idx) => setActiveIndex(idx)}
		>
			<Swipe.Item>1</Swipe.Item>
			<Swipe.Item>2</Swipe.Item>
			<Swipe.Item>3</Swipe.Item>
		</Swipe>
	);
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const swipeRef = useRef<SwipeRef>(null);

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				<Swipe autoplay={1500}>
					<Swipe.Item>1</Swipe.Item>
					<Swipe.Item>2</Swipe.Item>
					<Swipe.Item>3</Swipe.Item>
				</Swipe>
			</DemoBlock>

			<DemoBlock cardMode title={i18n.verticalScrolling}>
				<Swipe className={bem('vertical-swipe')} vertical>
					<Swipe.Item>1</Swipe.Item>
					<Swipe.Item>2</Swipe.Item>
					<Swipe.Item>3</Swipe.Item>
				</Swipe>
			</DemoBlock>

			<DemoBlock cardMode title={i18n.customIndicator}>
				<CustomIndicator />
			</DemoBlock>

			<DemoBlock cardMode title={i18n.changeEvent}>
				<Swipe
					autoplay={0}
					defaultActiveIndex={1}
					onActiveIndexChange={(idx) => {
						Toast.show(`${i18n.currentSwipeIndex} ${idx}`);
					}}
				>
					<Swipe.Item>1</Swipe.Item>
					<Swipe.Item>2</Swipe.Item>
					<Swipe.Item>3</Swipe.Item>
				</Swipe>
			</DemoBlock>

			<DemoBlock cardMode title={i18n.swipeSize}>
				<Swipe className={bem('define-swipe')} width={200} loop={false}>
					<Swipe.Item>1</Swipe.Item>
					<Swipe.Item>2</Swipe.Item>
					<Swipe.Item>3</Swipe.Item>
					<Swipe.Item>4</Swipe.Item>
				</Swipe>
			</DemoBlock>

			<DemoBlock cardMode title={i18n.instanceAPI}>
				<Swipe ref={swipeRef}>
					<Swipe.Item>1</Swipe.Item>
					<Swipe.Item>2</Swipe.Item>
					<Swipe.Item>3</Swipe.Item>
				</Swipe>
				<div className={bem('buttons')}>
					<Button
						size="sm"
						onClick={() =>
							swipeRef.current?.swipeTo(0, { animation: true })
						}
					>
						{i18n.btnFirst}
					</Button>
					<Button size="sm" onClick={() => swipeRef.current?.prev()}>
						{i18n.btnPrev}
					</Button>
					<Button size="sm" onClick={() => swipeRef.current?.next()}>
						{i18n.btnNext}
					</Button>
					<Button
						size="sm"
						onClick={() =>
							swipeRef.current?.swipeTo(2, { animation: true })
						}
					>
						{i18n.btnLast}
					</Button>
				</div>
			</DemoBlock>
		</>
	);
}
