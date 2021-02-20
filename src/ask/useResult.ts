import { useEffect, useState } from 'react';

import { queryLocalDatabase } from '../database';
import { InferenceResult } from '../model';

export async function getSearchResults(
  query: string,
): Promise<InferenceResult | null> {
  const normalizedQuery = query.trim();

  if (normalizedQuery.trim().length < 1) {
    return null;
  }

  // 1. Query local database.
  const localDbResult = await queryLocalDatabase(query);

  if (localDbResult) {
    // TODO...
    return InferenceResult.Unknown;
  }

  // 2. Query foods database to obtain ingredients.
  // TODO...

  // 3. Infer result.
  // TODO...

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(InferenceResult.Unknown);
    }, 3500);
  });
}

export default function useResult(query: string) {
  const [result, setResult] = useState<InferenceResult | null>(
    InferenceResult.Unknown,
  );

  useEffect(() => {
    setResult(InferenceResult.InProgress);
    getSearchResults(query).then((queryResult) => setResult(queryResult));
  }, [query]);

  return result;
}
