// // react
// import type {JSX} from 'react';

// // ui
// import Atom from '@/ui/atoms/atom';
// import type {ListNode} from '@/ui/atoms/types';

// export default function AtomList({node}: {node: ListNode}): JSX.Element | null {
//   const {type, children} = node;
//   switch (type) {
//     case 'ul':
//       return <ul>{children.map((child, i) => <Atom key={i} node={child} />)}</ul>;
//     case 'ol':
//       return <ol>{children.map((child, i) => <Atom key={i} node={child} />)}</ol>;
//     case 'li':
//       return <li>{children.map((child, i) => <Atom key={i} node={child} />)}</li>;
//     case 'dl':
//       return <dl>{children.map((child, i) => <Atom key={i} node={child} />)}</dl>;
//     case 'dt':
//       return <dt>{children.map((child, i) => <Atom key={i} node={child} />)}</dt>;
//     case 'dd':
//       return <dd>{children.map((child, i) => <Atom key={i} node={child} />)}</dd>;
//     default:
//       return null;
//   }
// }
