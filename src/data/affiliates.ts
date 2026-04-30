import affiliatesData from './affiliates.json';

export interface Affiliate {
  id: string;
  name: string;
  goUrl: string;
  finalUrl: string;
}

export const affiliates: Record<string, Affiliate> = Object.fromEntries(
  Object.entries(affiliatesData).map(([id, data]) => [
    id,
    {
      id,
      name: data.name,
      goUrl: `/go/${id}`,
      finalUrl: data.finalUrl
    }
  ])
);
