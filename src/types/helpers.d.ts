
export type NullableMappedType<T> = {
    [K in keyof T] : T[K] | null;
}