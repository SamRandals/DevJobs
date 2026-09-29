import type { GridProps } from "./Grid.props";
import type { GridItem } from "./Grid.types";

export default function Grid<T extends GridItem>({
    data,
    renderItem,
    className = "",
}: GridProps<T>) {

    return (

    <section

        className={`
            grid
            gap-4
            ${className}
        `}

    >

        {data.map((item) => (

            <div key={item.id}>

                {renderItem(item)}

            </div>

        ))}

    </section>

);
}