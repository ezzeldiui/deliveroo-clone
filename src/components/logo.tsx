import Image from "next/image";
import Link from "next/link";

type Props = {
  width: number;
  height: number;
};

export function Logo({ width, height }: Props) {
  return (
    <Link href="/" className="hover:opacity-75">
      <Image src="/logo.png" alt="logo" width={width} height={height} />
    </Link>
  );
}
