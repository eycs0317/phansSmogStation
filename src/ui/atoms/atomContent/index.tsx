// react
import type {JSX} from 'react';

// ui - types
import type {Node} from '@/ui/types/nodeTypes';

// ui - renderNode
import {renderNode} from '@/ui/atoms/atom';

// ui - atomContent
import Content from '@/ui/atoms/atomContent/content';
import Break from '@/ui/atoms/atomContent/break';
import Blockquote from '@/ui/atoms/atomContent/blockquote';
import Emphasis from '@/ui/atoms/atomContent/emphasis';
import Paragraph from '@/ui/atoms/atomContent/paragraph';
import Quote from '@/ui/atoms/atomContent/quote';
import Small from '@/ui/atoms/atomContent/small';
import Strong from '@/ui/atoms/atomContent/strong';

export default function AtomContent({node}: {node: Node}): JSX.Element | null {
  switch (node.type) {
    case 'content': {
      return (
        <Content>{node.data.children}</Content>
      );
    }
    case 'break':
      return <Break />;
    case 'blockquote': {
      return (
        <Blockquote id={node.data.id} className={node.data.className}>
          {renderNode(node.data.children)}
        </Blockquote>
      );
    }
    case 'emphasis': {
      return (
        <Emphasis id={node.data.id} className={node.data.className}>
          {renderNode(node.data.children)}
        </Emphasis>
      );
    }
    case 'paragraph': {
      return (
        <Paragraph id={node.data.id} className={node.data.className}>
          {renderNode(node.data.children)}
        </Paragraph>
      );
    }
    case 'quote': {
      return (
        <Quote id={node.data.id} className={node.data.className}>
          {renderNode(node.data.children)}
        </Quote>
      );
    }
    case 'small': {
      return (
        <Small id={node.data.id} className={node.data.className}>
          {renderNode(node.data.children)}
        </Small>
      );
    }
    case 'strong': {
      return (
        <Strong id={node.data.id} className={node.data.className}>
          {renderNode(node.data.children)}
        </Strong>
      );
    }
    default:
      return null;
  }
}
