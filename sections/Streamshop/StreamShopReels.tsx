interface Props {
  /**
   * @title Slug da sua loja
   * @description Slug separados por vírgula - dBXLVDZM,B9hKEmHZ,...
   */
  storeSlug?: string;
}

/**
 * @title StreamShop Reels
 */
export default function Stories({ storeSlug }: Props) {
  return (
    <div class="w-screen h-screen bg-black">
      <iframe
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
  );
}
