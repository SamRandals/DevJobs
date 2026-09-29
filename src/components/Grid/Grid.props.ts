import type { ReactNode } from "react";

export interface GridProps<T> {

    data: T[];

    renderItem: (item: T) => ReactNode;

    className?: string;

}