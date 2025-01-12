import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type='primary'>Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const { orderId } = params;

  await updateOrder(orderId, { priority: true });
  return null;
}
