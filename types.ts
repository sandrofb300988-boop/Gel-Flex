import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ComparisonRow {
  technique: string;
  problem: string;
  solution: string;
}

export interface Ingredient {
  name: string;
  amount: string;
  benefit: string;
}