import { Anime } from './Anime.js';
import { addAnimeToWatchlist, loadWatchlist } from './watchlistService.js';
import { handleError } from './errorHandler.js';
import fs from 'fs';
import { jest } from "jest";

describe('Anime class initialization', () => {
  test('creates instance with correct properties', () => {
    const mockData = {
      title: 'Test Anime',
      genres: ['Action'],
      episodes: null,
      status: 'Airing',
      duration: '24min',
      broadcastDay: null,
      season: null,
      studios: ['Studio Test']
    };

    const anime = new Anime(mockData);
    
    expect(anime.title).toBe('Test Anime');
    expect(anime.genres).toEqual(['Action']);
    expect(anime.episodes).toBe('Unknown (Ongoing)');
    expect(anime.broadcastDay).toBe('Unknown');
  });
});

describe('Watchlist Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(JSON.stringify([]));
  });

  test('adds anime to existing watchlist', () => {
    const testAnime = new Anime({ title: 'Test Anime', genres: ['Action'] });
    const result = addAnimeToWatchlist(testAnime);
    
    expect(fs.writeFileSync).toHaveBeenCalled();
    expect(result).toBe('Added "Test Anime" to watchlist.');
  });
});

describe('Error Handler', () => {
  test('handles network errors', () => {
    const error = new Error('Failed to fetch');
    const result = handleError(error);
    expect(result).toContain('No internet connection');
  });

  test('handles 404 errors', () => {
    const error = new Error('Not found');
    error.response = { status: 404 };
    expect(handleError(error)).toContain('Resource not found');
  });
});