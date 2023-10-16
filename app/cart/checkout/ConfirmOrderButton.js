import { useRouter } from 'next/navigation';
import { deleteCookie } from './actions';

export default function ConfirmOrderButton() {
  const router = useRouter();
  const submitCartDeleteCookieHandler = async () => {
    await deleteCookie();
    await router.push('/cart/thanks');
  };

  return (
    <button onClick={submitCartDeleteCookieHandler}>
      Confirm your purchase
    </button>
  );
}
