import { ReactNode } from "react";

type Props = {
  label: ReactNode;
};

export function Banner({ label }: Props) {
  return (
    <div className="w-full">
      <div className="bg-gray-800 text-white text-center py-2 flex items-center justify-center">
        <h1>{label}</h1>
      </div>
    </div>
  );
}
