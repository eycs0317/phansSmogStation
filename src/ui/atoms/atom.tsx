// react
import type {JSX} from 'react';

// ui - types
import type {Node} from '@/ui/types/nodeTypes';

// ui - atom
import AtomContent from '@/ui/atoms/atomContent';
import AtomContentComplex from '@/ui/atoms/atomContentComplex';

const contentTypes = new Set([
  'content', 'break', 'blockquote', 'emphasis', 'paragraph', 'quote', 'small', 'strong',
]);

const complexTypes = new Set([
  'heading', 'image', 'link',
]);

export function renderNode(nodes: Node[]): React.ReactNode {
  return nodes.map((node, index) => <Atom key={index} node={node} />);
}

export default function Atom({node}: {node: Node}): JSX.Element | null {
  if (contentTypes.has(node.type)) {
    return <AtomContent node={node} />;
  }

  if (complexTypes.has(node.type)) {
    return <AtomContentComplex node={node} />;
  }

  return null;
}
