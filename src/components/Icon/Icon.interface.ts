import { list } from "./Icon.list";

export interface Props {
    name: IconName;
    color?: any;
    width?: number;
}

export type IconName = keyof typeof list;