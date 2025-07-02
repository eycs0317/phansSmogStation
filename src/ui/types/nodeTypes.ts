export type BaseNode<T extends string, D> = {
  type: T;
  data: D & {
    id?: string;
    className?: string;
  };
};

// AtomContent nodes
export type ContentNode = BaseNode<'content', {
  children: string;
}>;

export type BreakNode = BaseNode<'break', Record<string, never>>;

export type BlockquoteNode = BaseNode<'blockquote', {
  children: Node[];
}>;

export type EmphasisNode = BaseNode<'emphasis', {
  children: Node[];
}>;

export type ParagraphNode = BaseNode<'paragraph', {
  children: Node[];
}>;

export type QuoteNode = BaseNode<'quote', {
  children: Node[];
}>;

export type SmallNode = BaseNode<'small', {
  children: Node[];
}>;

export type StrongNode = BaseNode<'strong', {
  children: Node[];
}>;

// AtomContentComplex nodes
export type HeadingNode = BaseNode<'heading', {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: Node[];
}>;

export type ImageNode = BaseNode<'image', {
  src: string;
  alt: string;
  width: number;
  height: number;
}>;

export type LinkNode = BaseNode<'link', {
  href: string;
  children: Node[];
}>;

// Union groups
export type AtomContentNode =
  | ContentNode
  | BreakNode
  | BlockquoteNode
  | EmphasisNode
  | ParagraphNode
  | QuoteNode
  | SmallNode
  | StrongNode;

export type AtomContentComplexNode =
  | HeadingNode
  | ImageNode
  | LinkNode;

export type AtomNode =
  | AtomContentNode
  | AtomContentComplexNode;

export type Node = AtomNode;
