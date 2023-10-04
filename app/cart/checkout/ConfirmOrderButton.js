import { useRouter } from 'next/navigation';

export default function ConfirmOrderButton() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await router.push('/cart/thanks');
      }}
    >
      Confirm your purchase
    </button>
  );
}
