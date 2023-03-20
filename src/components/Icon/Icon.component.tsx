import { FunctionComponent, useMemo } from "react";
import { Props } from "./Icon.interface";
import { list } from "./Icon.list";
import { SourceIcon } from "./Icon.styles";

const Icon: FunctionComponent<Props> = ({ name, ...props }) => {
    const icon = useMemo(() => list[name], [name]);
    
    return (
        <SourceIcon as="span" dangerouslySetInnerHTML={{ __html: icon}} {...props} name={name}/>
    );
};

Icon.defaultProps = {
    color: 'inherit',
}

export default Icon;