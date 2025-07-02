// styles
import '@/ui/molecules/hero/hero.css';

// ui - types
import type {Node} from '@/ui/types/nodeTypes';

// ui - atom
import Atom from '@/ui/atoms/atom';

type HeroProps = {
  content: Node[][];
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        {content.map((group, groupIndex) => (
          <div className="content" key={groupIndex}>
            {group.map((block, blockIndex) => (
              <Atom key={blockIndex} node={block} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
