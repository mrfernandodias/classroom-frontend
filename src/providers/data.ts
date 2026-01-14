import {
  type BaseRecord,
  type DataProvider,
  type GetListParams,
  type GetListResponse,
} from '@refinedev/core';

import { mockSubjects } from '@/constants/mock-data.ts';

// Provider real para quando tiver API
// export const { dataProvider: restDataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

// Mock provider para desenvolvimento (substitua por restDataProvider quando tiver API)
export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error('This function is not present in mock');
  },
  create: async () => {
    throw new Error('This function is not present in mock');
  },
  update: async () => {
    throw new Error('This function is not present in mock');
  },
  deleteOne: async () => {
    throw new Error('This function is not present in mock');
  },
  getApiUrl: () => '',
};
