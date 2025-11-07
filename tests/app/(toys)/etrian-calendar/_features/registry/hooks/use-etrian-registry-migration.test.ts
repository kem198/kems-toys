import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useEtrianRegistry, ETRIAN_REGISTRY_STORAGE_KEY } from '@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry';
import { EtrianV1 } from '@/app/(toys)/etrian-calendar/_common/types/etrian';

describe('useEtrianRegistry migration integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should migrate V1 data with missing month', async () => {
    // Arrange - Store V1 format data
    const v1Data: EtrianV1[] = [
      {
        id: 'test-id',
        name: 'セトハ',
        dateOfBirth: { day: 1 }, // Missing month
        affiliations: ['ブレイバント'],
        order: 0,
        memo: 'テスト',
      },
    ];
    localStorage.setItem(ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(v1Data));

    // Act
    const { result } = renderHook(() => useEtrianRegistry());

    // Wait for loading to complete
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    // Assert
    expect(result.current.storedEtrians).toHaveLength(1);
    expect(result.current.storedEtrians[0].dateOfBirth).toEqual({
      month: '皇帝ノ月',
      day: 1,
    });

    // Check localStorage was updated with migrated data
    const stored = JSON.parse(localStorage.getItem(ETRIAN_REGISTRY_STORAGE_KEY)!);
    expect(stored[0].dateOfBirth).toEqual({
      month: '皇帝ノ月',
      day: 1,
    });
  });

  it('should migrate V1 data with missing day', async () => {
    // Arrange
    const v1Data: EtrianV1[] = [
      {
        id: 'test-id',
        name: 'セトハ',
        dateOfBirth: { month: '怒猪ノ月' }, // Missing day
        affiliations: ['ブレイバント'],
        order: 0,
      },
    ];
    localStorage.setItem(ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(v1Data));

    // Act
    const { result } = renderHook(() => useEtrianRegistry());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    // Assert
    expect(result.current.storedEtrians[0].dateOfBirth).toEqual({
      month: '怒猪ノ月',
      day: 1,
    });
  });

  it('should migrate V1 data with empty dateOfBirth to undefined', async () => {
    // Arrange
    const v1Data: EtrianV1[] = [
      {
        id: 'test-id',
        name: 'セトハ',
        dateOfBirth: {}, // Empty object
        affiliations: ['ブレイバント'],
        order: 0,
      },
    ];
    localStorage.setItem(ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(v1Data));

    // Act
    const { result } = renderHook(() => useEtrianRegistry());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    // Assert
    expect(result.current.storedEtrians[0].dateOfBirth).toBeUndefined();
  });

  it('should not migrate V2 data', async () => {
    // Arrange - Store V2 format data (already migrated)
    const v2Data = [
      {
        id: 'test-id',
        name: 'セトハ',
        dateOfBirth: { month: '怒猪ノ月', day: 28 }, // Both present
        affiliations: ['ブレイバント'],
        order: 0,
      },
    ];
    localStorage.setItem(ETRIAN_REGISTRY_STORAGE_KEY, JSON.stringify(v2Data));

    // Act
    const { result } = renderHook(() => useEtrianRegistry());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    // Assert - Should remain unchanged
    expect(result.current.storedEtrians[0].dateOfBirth).toEqual({
      month: '怒猪ノ月',
      day: 28,
    });
  });
});
