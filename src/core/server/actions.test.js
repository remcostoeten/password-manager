import { fetchData } from './actions';

describe('fetchData', () => {
  it('should fetch data from the API and return it as JSON', async () => {
    const mockResponse = [
      { name: 'Payroll Select', color: '#0000FF' },
      { name: 'Benu Direct', color: '#259617' },
      { name: 'Schotpoort Connect', color: '#e3c922' },
      { name: 'KNHB', color: '#e39c22' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      }),
    );

    const data = await fetchData();
    expect(data).toEqual(mockResponse);
  });

  it('should throw an error if the fetch fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    );

    await expect(fetchData()).rejects.toThrow('Failed to fetch data');
  });
});