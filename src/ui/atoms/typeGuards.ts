// ui - types
import type {Node, ImageNode, LinkNode} from '@/ui/types/nodeTypes';

export function isImageNode(node: Node): node is ImageNode {
  return (
    node.type === 'image' &&
    typeof node.data?.src === 'string' &&
    typeof node.data?.width === 'number' &&
    typeof node.data?.height === 'number' &&
    typeof node.data?.alt === 'string'
  );
}

export function isLinkNode(node: Node): node is LinkNode {
  return (
    node.type === 'link' &&
    typeof node.data?.href === 'string'
  );
}
