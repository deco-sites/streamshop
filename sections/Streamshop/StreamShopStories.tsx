import { clx } from "../../sdk/clx.ts";
import Section, {
  Props as SectionHeaderProps,
} from "../../components/ui/Section.tsx";
import { type LoadingFallbackProps } from "@deco/deco";

// notice that using the same types from the loaders
// it will be easier to use the data from the loaders
// on deco.cx admin

interface Props extends SectionHeaderProps {
  /**
   * @title Slug Videos
   * @description Slug separados por vírgula - dBXLVDZM,B9hKEmHZ,...
   */
  slugs: string;
}

/**
 * @title Stories
 */
export default function Stories({ title, cta, slugs }: Props) {
  return (
    <>
      <Section.Container>
        <Section.Header title={title} cta={cta} />

        <div style="width: 100%; height: 100px;" class="w-full px-5 sm:px-0">
          {/* @ts-ignore */}
          <liveshop-ads-carousel
            videos-width="80px"
            height="80px"
            border-radius="50%"
            gap="25px"
            slugs-video={slugs}
          >
            {/* @ts-ignore */}
          </liveshop-ads-carousel>
        </div>
      </Section.Container>
    </>
  );
}

export const LoadingFallback = (
  { title, cta }: LoadingFallbackProps<Props>,
) => (
  <Section.Container>
    <Section.Header title={title} cta={cta} />
    <Section.Placeholder height="471px" />;
  </Section.Container>
);
