import { Head } from "$fresh/runtime.ts";
import { clx } from "../../sdk/clx.ts";
import Section, {
  Props as SectionHeaderProps,
} from "../../components/ui/Section.tsx";
import { type LoadingFallbackProps } from "@deco/deco";
import { useDevice } from "@deco/deco/hooks";

// notice that using the same types from the loaders
// it will be easier to use the data from the loaders
// on deco.cx admin

interface Style {
  /**
   * @title Width - Desktop
   * @description Largura dos Video
   * @default 100
   */
  videoWidth?: string;

  /**
   * @title Width - Mobile
   * @description Largura dos Video
   * @default 100
   */
  videoWidthMobile?: string;
  /**
   * @title Container
   * @description 100% do site ou container
   * @default 100
   */
  containerWidth?: "container" | "full";
}

interface Props extends SectionHeaderProps {
  /**
   * @title Slug Videos
   * @description Slug separados por vírgula - dBXLVDZM,B9hKEmHZ,...
   */
  slugs: string;

  /**
   * @title Estilo
   */
  style: Style;
}

/**
 * @title Carousel Video
 */
export default function Carousel({ title, cta, slugs, style }: Props) {
  const device = useDevice();
  return (
    <>
      <Head>
        <script
          async
          src="https://assets.streamshop.com.br/sdk-ads/liveshop-ads-video.min.js"
        >
        </script>
        <script
          async
          src="https://assets.streamshop.com.br/sdk-ads/liveshop-ads-carousel.min.js"
        >
        </script>
      </Head>
      <Section.Container
        class={clx(
          style?.containerWidth == "full" && "w-full !max-w-full",
          style?.containerWidth == "container" && "container",
        )}
      >
        <Section.Header title={title} cta={cta} />

        <div style="width: 100%; height: 580px;" class="w-full px-5 sm:px-0">
          {/* @ts-ignore */}
          <liveshop-ads-carousel
            videos-width={device != "desktop"
              ? style?.videoWidthMobile
              : style.videoWidth}
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
