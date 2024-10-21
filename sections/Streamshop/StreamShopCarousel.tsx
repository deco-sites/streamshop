import { clx } from "../../sdk/clx.ts";
import Section, {
  Props as SectionHeaderProps,
} from "../../components/ui/Section.tsx";
import { type LoadingFallbackProps } from "@deco/deco";
import { useDevice } from "@deco/deco/hooks";

// notice that using the same types from the loaders
// it will be easier to use the data from the loaders
// on deco.cx admin

interface StyleDesktop {
  /**
   * @title Altura do vídeo
   * @desription px ou %
   */
  videoHeigth?: string;

  /**
   * @titleLargura do vídeo dentro do carrosel
   * @desription px ou %
   */
  videoWidth?: string;
}

interface StyleMobile {
  /**
   * @title Altura do vídeo
   * @desription px ou %
   */
  videoHeigth?: string;

  /**
   * @title Largura do vídeo dentro do carrosel
   * @desription px ou %
   */
  videoWidth?: string;
}

interface Style {
  /**
   * @title Container
   * @description 100% do site ou container
   */
  containerWidth?: "container" | "full";

  /**
   * @title Arredondamento dos cantos
   */
  radius?: "pequeno" | "médio" | "grande" | "pílula";

  /**
   * @title Desktop
   */
  styleDesktop?: StyleDesktop;

  /**
   * @title Mobile
   */
  styleMobile?: StyleMobile;
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
 * @title StreamShop Carousel Video
 */
export default function Carousel({ title, cta, slugs, style }: Props) {
  const device = useDevice();
  const currentStyle = device == "desktop"
    ? style.styleDesktop
    : style.styleMobile;
  return (
    <>
      <Section.Container
        class={clx(
          style?.containerWidth == "full" && "w-full !max-w-full",
          style?.containerWidth == "container" && "container",
        )}
      >
        <div
          class={clx(
            style?.containerWidth == "full" && "sm:!px-5",
          )}
        >
          <Section.Header title={title} cta={cta} />
        </div>

        <div style="width: 100%;" class="w-full px-5 sm:px-0">
          {/* @ts-ignore */}
          <liveshop-ads-carousel
            videos-width={currentStyle?.videoWidth}
            height={currentStyle?.videoHeigth}
            border-radius={style?.radius == "pequeno"
              ? "4px"
              : style?.radius == "médio"
              ? "10px"
              : style?.radius == "grande"
              ? "20px"
              : style?.radius == "pílula"
              ? "500px"
              : "5px"}
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
