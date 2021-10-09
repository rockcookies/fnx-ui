/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import { ImageFit } from '../interface';
import './basic.less';
// @ts-ignore
import EXP_IMG from '../../../site/assets/demo-dog.jpg';
import Image from '..';
import Col from '../../col';
import Row from '../../row';

const bem = createBEM('demo-image');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		fitMode: '填充模式',
		round: '圆形图片',
		radius: '圆角',
		loading: '加载中提示',
		error: '加载失败提示',
		defaultTip: '默认提示',
		customTip: '自定义提示',
		loadFail: '加载失败',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		fitMode: 'Fit Mode',
		round: 'Round',
		radius: 'Radius',
		loading: 'Load Tip',
		error: 'Error Tip',
		defaultTip: 'Default Tip',
		customTip: 'Custom Tip',
		loadFail: 'Load failed',
	},
};

const IMAGE_FITS: ImageFit[] = [
	'contain',
	'cover',
	'fill',
	'none',
	'scale-down',
];

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const fitImages = IMAGE_FITS.map((fit, i) => (
		<Col span={8} key={`${i}-col-fit`}>
			<Image
				fit={fit}
				width="100%"
				height="27vw"
				src={EXP_IMG}
				key={`${i}-fit`}
			/>
			<div className="text">{fit}</div>
		</Col>
	));

	const fitRoundImages = IMAGE_FITS.map((fit, i) => (
		<Col span={8} key={`${i}-col-round`}>
			<Image
				round
				fit={fit}
				width="100%"
				height="27vw"
				src={EXP_IMG}
				key={`${i}-round`}
			/>
			<div className="text">{fit}</div>
		</Col>
	));

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.basicUsage}>
				<div className={bem('row')}>
					<Image width="100" height="100" src={EXP_IMG} />
				</div>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.fitMode}>
				<Row gutter={20}>{fitImages}</Row>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.round}>
				<Row gutter={20}>{fitRoundImages}</Row>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.radius}>
				<Row gutter={20}>
					<Col span={8}>
						<Image
							radius="10"
							width="100%"
							height="27vw"
							src={EXP_IMG}
						/>
						<div className="text">{i18n.radius}</div>
					</Col>
				</Row>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.loading}>
				<Row gutter={20}>
					<Col span={8}>
						<Image width="100%" height="27vw" />
						<div className="text">{i18n.defaultTip}</div>
					</Col>
					<Col span={8}>
						<Image
							width="100%"
							height="27vw"
							slots={{
								loading: (
									<span className="loading-text">
										Loading...
									</span>
								),
							}}
						/>
						<div className="text">{i18n.customTip}</div>
					</Col>
				</Row>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.error}>
				<Row gutter={20}>
					<Col span={8}>
						<Image width="100%" height="27vw" src="x" />
						<div className="text">{i18n.defaultTip}</div>
					</Col>
					<Col span={8}>
						<Image
							width="100%"
							height="27vw"
							src="x"
							slots={{
								error: (
									<span className="error-text">Error</span>
								),
							}}
						/>
						<div className="text">{i18n.customTip}</div>
					</Col>
				</Row>
			</DemoBlock>
		</>
	);
}
