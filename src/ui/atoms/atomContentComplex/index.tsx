// react
import type {JSX} from 'react';

// nextjs
import Image from 'next/image';
import Link from 'next/link';

// ui - types
import type {Node} from '@/ui/types/nodeTypes';

// ui - renderNode
import {renderNode} from '@/ui/atoms/atom';

// ui - typeGuards
import {isImageNode, isLinkNode} from '@/ui/atoms/typeGuards';

// ui - atomContentComplex
import Heading from '@/ui/atoms/atomContentComplex/heading';

export default function AtomContentComplex({node}: {node: Node}): JSX.Element | null {
  switch (node.type) {
    case 'heading': {
      return (
        <Heading
          level={node.data.level}
          id={node.data.id}
          className={node.data.className}
        >
          {renderNode(node.data.children)}
        </Heading>
      );
    }
    case 'image': {
      if (!isImageNode(node)) return null;
      return (
        <Image
          src={node.data.src}
          width={node.data.width}
          height={node.data.height}
          alt={node.data.alt}
          id={node.data.id}
          className={node.data.className}
        />
      );
    }
    case 'link': {
      if (!isLinkNode(node)) return null;
      return (
        <Link
          href={node.data.href}
          id={node.data.id}
          className={node.data.className}
        >
          {renderNode(node.data.children)}
        </Link>
      );
    }
    default:
      return null;
  }
}
