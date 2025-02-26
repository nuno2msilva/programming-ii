import { fetchExchangeRate } from './currencyConverter.js';
import { fetchExchangeRate } from './api'; // Assume this is the path to the API module

jest.mock('./api', () => ({
  fetchExchangeRate: jest.fn(),
}));

describe('convertUSDToEUR', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('correctly converts USD to EUR using the exchange rate', async () => {
    const mockRate = 0.85;
    const usdAmount = 100;
    const expectedEUR = usdAmount * mockRate;

    fetchExchangeRate.mockResolvedValue(mockRate);

    const result = await convertUSDToEUR(usdAmount);

    expect(result).toBe(expectedEUR);
    expect(fetchExchangeRate).toHaveBeenCalledTimes(1);
  });

  it('throws an error when the exchange rate API fails', async () => {
    const errorMessage = 'Failed to fetch exchange rate';
    
    fetchExchangeRate.mockRejectedValue(new Error(errorMessage));
1
    await expect(convertUSDToEUR(100)).rejects.toThrow(errorMessage);
    expect(fetchExchangeRate).toHaveBeenCalledTimes(1);
  });
});