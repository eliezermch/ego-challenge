'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-[30px] font-bold text-foreground mb-4">
        ¡Ups! Algo salió mal.
      </h2>
      <p className="text-[16px] text-[#373737] mb-8 max-w-[500px]">
        Lo sentimos, hubo un problema al cargar la información. Por favor,
        intentá nuevamente.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#D0021B] text-white rounded-[30px] px-[28px] py-[10px] text-[14px] font-semibold tracking-[0.2px] hover:bg-[#B00217] transition-colors"
        >
          Intentar nuevamente
        </button>
        <Link
          href="/"
          className="bg-[#191919] text-white rounded-[30px] px-[28px] py-[10px] text-[14px] font-semibold tracking-[0.2px] hover:bg-[#000000] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
