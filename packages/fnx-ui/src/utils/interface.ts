import { PropsWithChildren, Ref } from 'react';

export type Dictionary<T = any> = { [key: string]: T };

export type NullablePartial<T> = {
	[U in keyof T]?: T[U] | null;
};

export type Constructor<T> = new (...args: any[]) => T;

export type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<
	ObjectType,
	Exclude<keyof ObjectType, KeysType>
>;

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

export type SetRequired<BaseType, Keys extends keyof BaseType> = Simplify<
	Except<BaseType, Keys> & Required<Pick<BaseType, Keys>>
>;

export type SetOptional<BaseType, Keys extends keyof BaseType> = Simplify<
	Except<BaseType, Keys> & Partial<Pick<BaseType, Keys>>
>;

export type ForwardRefProps<T, R> = PropsWithChildren<T> & {
	ref?: Ref<R>;
};

export interface ElementRect {
	bottom: number;
	height: number;
	left: number;
	right: number;
	top: number;
	width: number;
	x: number;
	y: number;
}
