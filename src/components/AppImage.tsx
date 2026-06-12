import NextImage, { type ImageProps } from "next/image";

const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Image({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/") ? `${bp}${src}` : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
