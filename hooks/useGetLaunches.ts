import { useQuery } from '@tanstack/react-query';
import { Launch } from '../dto/launch';
import { Payload } from '../dto/payloads';
import { ChangeTypeOfKeys } from '../util';

type LaunchWithPayload = ChangeTypeOfKeys<Launch, 'payloads', Payload[]>;

const useGetLaunches = () => {
  return useQuery<Paged<LaunchWithPayload>>({
    queryKey: ['launches'],
    queryFn: () =>
      fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: {},
          options: {
            limit: 10,
            populate: ['payloads'],
          },
        }),
      }).then((res) => res.json()),
  });
};

export default useGetLaunches;
