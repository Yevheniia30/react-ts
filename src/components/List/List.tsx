import React, { FC } from "react";

// компонент-дженерік (перевикористовуваний)
// вказуємо Т, це означає що може буде будь-який тип
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <ul>{props.items.map(props.renderItem)}</ul>;
}

export default List;
