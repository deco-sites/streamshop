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
   * @title storeSlug
   */
  storeSlug?: string;

  /**
   * @title Texto
   * @format html
   */
  text: string;
}

/**
 * @title StreamShop Info & Stories
 */
export default function InfoStories({ title, cta, storeSlug, text }: Props) {
  return (
    <>
      <Section.Container>
        <Section.Header title={title} cta={cta} />
        <div class="w-full flex justify-between items-start flex-col sm:flex-row gap-4 !px-5 md:!px-0">
          {
            /* <div
          style={{
            display: "inline-block",
            height: "auto",
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "0px"
          }}
          hx-on:click="openStreamShopLive('https://live.hml.streamshop.com.br/trident/loja?v=WSkU9DFr')">AQUI</div> */
          }
          <div class="w-full" dangerouslySetInnerHTML={{ __html: text }}>
          </div>

          <div
            style="width: 100%"
            class="w-full px-5 sm:px-0 flex justify-center items-center"
          >
            <iframe
              class="max-w-[380px] md:max-w-[440px] aspect-[9/16]"
              style="border-radius: 16px; overflow: hidden"
              frameborder="0"
              src={storeSlug
                ? `https://lite.streamshop.com.br/${storeSlug}`
                : "https://lite.streamshop.com.br/streamshopdemo"}
              height="100%"
              width="100%"
              allow="fullscreen; autoplay; picture-in-picture"
            >
            </iframe>
          </div>
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
